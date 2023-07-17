import { Storage } from '@google-cloud/storage';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = process.env.BUCKET_NAME ?? '';
  const fileName = req.nextUrl.searchParams.get('file') ?? '';

  if (fileName === '') {
    NextResponse.json('file is empty');
    return;
  }

  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);

  // 有効期間を指定してSigned URLを生成する
  const options = {
    version: 'v4' as const,
    action: 'read' as const,
    expires: Date.now() + 5 * 60 * 1000, // 5分間有効
  };

  const [url] = await file.getSignedUrl(options);
  return NextResponse.json({ url });
}
