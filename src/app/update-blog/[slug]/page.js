"use client"
import Spinner from "@/Component/Spinner";
import useAuth from "@/hook/useAuth";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const UpdateSingleBlog = () => {
    const [prevBlog, setPrevBlog] = useState({});
    const [error, setError] = useState(false);

    const { slug } = useParams();
    const { user, loading } = useAuth();

    const { replace } = useRouter();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_url}/api/blog/singleBlog?id=${slug}`)
            .then(data => setPrevBlog(data.data))
            .catch(err => console.log(err))
    }, [slug]);

    const onSubmit = event => {
        event.preventDefault();
        setError(false);
        const form = event.target;
        const title = form.title.value;
        const paraTitle = form.paraTitle.value;
        const blog = form.blog.value;
        const updateBlog = {
            title,
            paraTitle,
            blog
        }
        // console.log(updateBlog);
        // TODO : next akhan thaka suro
        axios.put(`${process.env.NEXT_PUBLIC_url}/api/blog/singleBlog?id=${slug}`, {
            body: JSON.stringify(updateBlog)
        })
            .then(data => {
                console.log(data.data);
                replace('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    if (loading) {
        return <Spinner />
    }
    if (!user) {
        toast.dismiss('You Need to Login First');
        return replace('/');
    }

    return (
        <div className="w-2/4  mt-14 mx-auto border py-10 px-8 rounded">
            <form onSubmit={onSubmit}>
                <h1 className="font-bold text-2xl">Update Blog!</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">What is your blog title?</span>
                    </label>
                    <input type="text" name="title" defaultValue={prevBlog?.title} placeholder="Type here" className="input input-bordered rounded w-full p-2" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">Place Name</span>
                    </label>
                    <input type="text" name="paraTitle" defaultValue={prevBlog?.paraTitle} placeholder="Type here" className="input input-bordered rounded w-full p-2" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">Write blog</span>
                    </label>
                    <textarea type="text" cols="50" name="blog" defaultValue={prevBlog?.blog} placeholder="Write a para" className="input input-bordered h-24 rounded w-full p-2" ></textarea>
                </div>
                {error && <p className="text-red-500 py-1">{error?.message}</p>}
                <div className="relative mt-3">
                    <input className="btn btn-block rounded btn-primary text-white bg-blue-500" type="submit" value="Add Now" />
                </div>
            </form>
        </div>
    );
}
export default UpdateSingleBlog;