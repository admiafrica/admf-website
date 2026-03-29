import { createRemoteJWKSet, jwtVerify } from "jose";
import { NextRequest } from "next/server";

const COGNITO_USER_POOL_ID = process.env.COGNITO_USER_POOL_ID!;
const COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID!;
const COGNITO_REGION = process.env.COGNITO_REGION || "us-east-1";

const issuer = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
const jwksUrl = new URL(`${issuer}/.well-known/jwks.json`);
const JWKS = createRemoteJWKSet(jwksUrl);

export interface CognitoUser {
  sub: string;
  email: string;
  name: string;
  groups: string[];
}

export async function verifyToken(
  request: NextRequest
): Promise<CognitoUser | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.slice(7);

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer,
      audience: COGNITO_CLIENT_ID,
    });

    return {
      sub: payload.sub as string,
      email: payload.email as string,
      name: payload.name as string,
      groups: (payload["cognito:groups"] as string[]) || [],
    };
  } catch {
    return null;
  }
}

export function isAdmin(user: CognitoUser): boolean {
  return user.groups.includes("admin");
}
