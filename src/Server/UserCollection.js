import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getUserFromDb = async () => {
    const db = await DbConnect();
    const userCollections = db.collection('users');
    return userCollections.find().toArray();
}
export const getUserByIdFromDb = async (id) => {
    const db = await DbConnect();
    const userCollections = db.collection('users');
    const query = { _id: new ObjectId(id) };
    return userCollections.find(query);
};