import { addBLogInDb, getBlogsFromDb } from "@/Server/BlogsCollection";
import { NextResponse } from "next/server";

export const GET =async(request)=>{
    const {searchParams} = new URL(request.url);
    const limit = searchParams.get("limit")
    const result = await getBlogsFromDb(limit);
    return NextResponse.json(result);
}
export const POST = async(request)=>{
    const blog = await request.json();
    const result = await addBLogInDb(blog);
    return NextResponse.json(result);
}