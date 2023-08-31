import { deleteBlogById, getBlogByIdFromDb, updateBlogById } from "@/Server/BlogsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const result = await getBlogByIdFromDb(id);
    return NextResponse.json(result)
}
export const PUT = async (request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const { body } = await request.json();
    const updateBlog = JSON.parse(body);
    const result = await updateBlogById(id, updateBlog)
    return NextResponse.json(result);
}
export const DELETE = async (request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const result = await deleteBlogById(id);
    return NextResponse.json(result);
}