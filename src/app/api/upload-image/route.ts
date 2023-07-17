import { Storage } from '@google-cloud/storage';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = process.env.BUCKET_NAME ?? '';
  const bucket = storage.bucket(bucketName);
  const params = req.nextUrl.searchParams;

  const fileObj = bucket.file(params.get('file') as string);
  const options = {
    expires: Date.now() + 1 * 60 * 1000,
    fields: { 'x-goog-meta-test': 'data' },
  };
  const [response] = await fileObj.generateSignedPostPolicyV4(options);

  return NextResponse.json(response);
}
