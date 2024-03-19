import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET() {
  const posts = await prisma.post.findMany()

  return NextResponse.json(
    {
      success: true,
      message: "List Data Post",
      data: posts,
    },
    {
      status: 200,
    }
  );
};

export async function POST(req:any) {
  const {title, content} = await req.json()


  const posts = await prisma.post.create({
    data:{
      title, content
    }
  })

  return NextResponse.json(
    {
      success: true,
      message: "Save successfull",
      data: posts,
    },
    {
      status: 200,
    }
  );
};
