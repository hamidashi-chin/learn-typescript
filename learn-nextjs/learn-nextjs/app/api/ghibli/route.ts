import { NextResponse } from "next/server";

export async function GET() {
  const result = await fetch("https://ghibliapi.dev/films");
  const data = await result.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: `Hello, We have received '${data.review}' for ${data.title}!` });
}
