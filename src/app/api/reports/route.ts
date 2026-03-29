import { NextRequest, NextResponse } from "next/server";
import { verifyToken, isAdmin } from "@/lib/cognito";
import { listReports, getUploadUrl } from "@/lib/s3";

// GET /api/reports — public, lists all available reports
export async function GET() {
  try {
    const reports = await listReports();
    return NextResponse.json({ reports });
  } catch (error) {
    console.error("Failed to list reports:", error);
    return NextResponse.json(
      { error: "Failed to list reports" },
      { status: 500 }
    );
  }
}

// POST /api/reports — admin only, returns presigned upload URL
export async function POST(request: NextRequest) {
  const user = await verifyToken(request);
  if (!user || !isAdmin(user)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { filename, contentType } = await request.json();

    if (!filename || !contentType) {
      return NextResponse.json(
        { error: "filename and contentType are required" },
        { status: 400 }
      );
    }

    // Sanitize filename
    const sanitized = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const uploadUrl = await getUploadUrl(sanitized, contentType);

    return NextResponse.json({ uploadUrl, filename: sanitized });
  } catch (error) {
    console.error("Failed to generate upload URL:", error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}
