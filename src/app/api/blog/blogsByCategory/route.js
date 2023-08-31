import { getBlogByCategory } from "@/Server/BlogsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    console.log(category);
    const result = await getBlogByCategory(category);
    return NextResponse.json(result);
}