import { Storage } from '@google-cloud/storage';
import { NextRequest, NextResponse } from 'next/server';
import { credential } from '@/lib/encode';
export async function GET(req: NextRequest) {

  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    // important
    credentials: {
      // @ts-ignore
      client_email: credential.client_email,
      // @ts-ignore
      private_key: credential.private_key,
    },
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
