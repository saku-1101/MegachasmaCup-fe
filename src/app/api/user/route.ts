import { NextResponse } from 'next/server';
import fs from 'fs';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function GET() {
  await delay(2000);
  console.log(fs);
  const user = JSON.parse(fs.readFileSync('src/mockData/user.json', 'utf8'));

  return NextResponse.json(user);
}
