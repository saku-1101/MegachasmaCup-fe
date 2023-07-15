import { NextResponse } from 'next/server';
import fs from 'fs';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function GET() {
  await delay(2000);
  console.log(fs);
  const classes = JSON.parse(fs.readFileSync('src/mockData/classes.json', 'utf8'));

  return NextResponse.json(classes);
}
