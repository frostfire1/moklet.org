import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        tags: true,
        user: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
