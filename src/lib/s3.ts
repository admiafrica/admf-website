import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const BUCKET_NAME = process.env.REPORTS_BUCKET_NAME!;
const CLOUDFRONT_DOMAIN = process.env.REPORTS_CLOUDFRONT_DOMAIN;
const REPORTS_PREFIX = "reports/";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.REPORTS_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.REPORTS_AWS_SECRET_ACCESS_KEY!,
  },
});

export interface ReportMetadata {
  key: string;
  name: string;
  size: number;
  lastModified: string;
  downloadUrl: string;
}

export async function listReports(): Promise<ReportMetadata[]> {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: REPORTS_PREFIX,
  });

  const response = await s3.send(command);
  const contents = response.Contents || [];

  return contents
    .filter((obj) => obj.Key && obj.Key !== REPORTS_PREFIX)
    .map((obj) => {
      const key = obj.Key!;
      const filename = key.replace(REPORTS_PREFIX, "");

      return {
        key: encodeURIComponent(filename),
        name: filename,
        size: obj.Size || 0,
        lastModified: obj.LastModified?.toISOString() || "",
        downloadUrl: CLOUDFRONT_DOMAIN
          ? `https://${CLOUDFRONT_DOMAIN}/${key}`
          : "",
      };
    })
    .sort(
      (a, b) =>
        new Date(b.lastModified).getTime() -
        new Date(a.lastModified).getTime()
    );
}

export async function getUploadUrl(
  filename: string,
  contentType: string
): Promise<string> {
  const key = `${REPORTS_PREFIX}${filename}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  return getSignedUrl(s3, command, { expiresIn: 600 }); // 10 minutes
}

export async function getDownloadUrl(filename: string): Promise<string> {
  // If CloudFront is configured, use it directly
  if (CLOUDFRONT_DOMAIN) {
    return `https://${CLOUDFRONT_DOMAIN}/${REPORTS_PREFIX}${filename}`;
  }

  // Fallback to presigned S3 URL
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `${REPORTS_PREFIX}${filename}`,
  });

  return getSignedUrl(s3, command, { expiresIn: 3600 }); // 1 hour
}
