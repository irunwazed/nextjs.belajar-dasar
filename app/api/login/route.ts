import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function POST(req: any) {
  const { username, password } = await req.json();

  return NextResponse.json(
    {
      success: true,
      message: "Login successfull",
    },
    {
      status: 200,
    }
  );
}
