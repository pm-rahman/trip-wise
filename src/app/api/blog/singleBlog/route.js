import { deleteBlogById, getBlogByIdFromDb } from "@/Server/BlogsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const result = await getBlogByIdFromDb(id);
    return NextResponse.json(result)
}
export const DELETE=async(request)=>{
    const {searchParams}=new URL(request.url);
    const id = searchParams.get('id');
    console.log(id);
    const result = await deleteBlogById(id);
    return NextResponse.json(result);
}