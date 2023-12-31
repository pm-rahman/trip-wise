import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

// get 
export const getBlogsFromDb = async (limit) => {
    const db = await DbConnect();
    const blogsCollection = db.collection('blogs');
    if (!limit) {
        return blogsCollection.find().toArray();
    }
    return blogsCollection.find().limit(parseInt(limit)).toArray();
}
export const getBlogByIdFromDb = async (id) => {
    const db = await DbConnect();
    const blogsCollection = db.collection('blogs');
    const query = { _id: new ObjectId(id) };
    return blogsCollection.findOne(query);
}
export const getBlogByCategory = async (category) => {
    const db = await DbConnect();
    const blogCollection = db.collection('blogs');
    const query = { category: category };
    return blogCollection.find(query).toArray();
}
// post
export const addBLogInDb = async (blog) => {
    const db = await DbConnect();
    const blogCollection = db.collection('blogs');
    return blogCollection.insertOne(blog);
}
// put
export const updateBlogById = async (id, updateBlog) => {
    const db = await DbConnect();
    const blogCollection = db.collection('blogs');
    const query = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            title: updateBlog?.title,
            paraTitle: updateBlog?.paraTitle,
            blog: updateBlog?.blog
        }
    }
    return blogCollection.updateOne(query, updateDoc);
}
// delete
export const deleteBlogById = async (id) => {
    const db = await DbConnect();
    const blogCollection = db.collection('blogs');
    const query = { _id: new ObjectId(id) };
    return blogCollection.deleteOne(query);
}