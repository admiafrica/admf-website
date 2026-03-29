import { NextRequest, NextResponse } from "next/server";
import { getDownloadUrl } from "@/lib/s3";

// GET /api/reports/:key/download — public, returns download URL
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  try {
    const { key } = await params;
    const filename = decodeURIComponent(key);
    const downloadUrl = await getDownloadUrl(filename);

    return NextResponse.redirect(downloadUrl);
  } catch (error) {
    console.error("Failed to generate download URL:", error);
    return NextResponse.json(
      { error: "Failed to generate download URL" },
      { status: 500 }
    );
  }
}
