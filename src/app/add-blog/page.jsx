"use client"
import Spinner from "@/Component/Spinner";
import useAuth from "@/hook/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddBlog = () => {
    const [thumbnails, setThumbnails] = useState([])
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailTwo, setThumbnailTwo] = useState(null);
    const [thumbnailThree, setThumbnailThree] = useState(null);
    const [thumbnailFour, setThumbnailFour] = useState(null);
    const [imageLoading, setImageLoading] = useState(false)
    const [error, setError] = useState(false);


    const { user, loading } = useAuth();
    const { replace } = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError(false)
        if (!thumbnail) {
            return setError("First Thumbnail Required");
        }
        const blog = {
            ...data,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            thumbnails
        }
        // TODO : next akhan thaka suro
        fetch(`${process.env.NEXT_PUBLIC_url}/api/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const thumbnailHandler = ({ target: { files } }) => {
        setThumbnail(files[0].name);
        const formData = new FormData();
        formData.append('image', files[0]);
        setImageLoading(true);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imagebb_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.display_url);
                setThumbnails([...thumbnails, data.data.display_url]);
                setImageLoading(false);
            });
    }
    const thumbnailHandler2 = ({ target: { files } }) => {
        setThumbnailTwo(files[0].name);
        setTest([...test, 1]);
        const formData = new FormData();
        formData.append('image', files[0]);
        setImageLoading(true);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imagebb_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.display_url);
                setThumbnails([...thumbnails, data.data.display_url]);
                setImageLoading(false);
            })
            .catch(err => {
                setError(err.message)
            })
    }
    const thumbnailHandler3 = ({ target: { files } }) => {
        setThumbnailThree(files[0].name);
    }
    const thumbnailHandler4 = ({ target: { files } }) => {
        setThumbnailFour(files[0].name);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold text-2xl">Add Blog!</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">What is your blog title?</span>
                    </label>
                    <input type="text" {...register("title", { required: true })} placeholder="Type here" className="input input-bordered rounded w-full p-2" />
                    {errors.title && <p className="text-red-500 py-1">{errors?.title?.message || "Title is Required"}</p>}
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="mt-1 font-semibold">Category?</span>
                        </label>
                        <select defaultValue={"food"} {...register("category", { required: true })} className="select select-bordered rounded w-full p-2" >
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                        </select>
                        {errors.category && <p className="text-red-500 py-1">{errors?.category?.message || "Title is Required"}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="mt-1 font-semibold">Relative Place</span>
                        </label>
                        <select {...register("relativePlace", { required: true })} className="select select-bordered rounded w-full p-2" >
                            <option value="Cox's bazar">{"Cox's bazar"}</option>
                            <option value="Sondor bon">Sondor bon</option>
                        </select>
                        {errors.relativePlace && <p className="text-red-500 py-1">{errors?.relativePlace?.message || "Title is Required"}</p>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">{thumbnail ? "Update" : "Upload"} Blog Thumbnail</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <label htmlFor="thumbnail" className="rounded cursor-pointer border p-2">
                            <span className="font-semibold text-sm">{thumbnail ? thumbnail : "Thumbnail 1"}</span>
                            <input onChange={thumbnailHandler} name="thumbnail" id="thumbnail" type="file" className="input input-bordered rounded w-full hidden" />
                        </label>
                        <label htmlFor="thumbnailTwo" className="rounded cursor-pointer border p-2">
                            <span className="font-semibold text-sm">{thumbnailTwo ? thumbnailTwo : "Thumbnail 2"}</span>
                            <input onChange={thumbnailHandler2} name="thumbnailTwo" id="thumbnailTwo" type="file" className="input input-bordered rounded w-full hidden" />
                        </label>
                        <label htmlFor="thumbnailThree" className="rounded cursor-pointer border p-2">
                            <span className="font-semibold text-sm">{thumbnailThree ? thumbnailThree : "Thumbnail 3"}</span>
                            <input onChange={thumbnailHandler3} name="thumbnailThree" id="thumbnailThree" type="file" className="input input-bordered rounded w-full hidden" />
                        </label>
                        <label htmlFor="thumbnailFour" className="rounded cursor-pointer border p-2">
                            <span className="font-semibold text-sm">{thumbnailFour ? thumbnailFour : "Thumbnail 4"}</span>
                            <input onChange={thumbnailHandler4} name="thumbnailFour" id="thumbnailFour" type="file" className="input input-bordered rounded w-full hidden" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">Place Name</span>
                    </label>
                    <input type="text" {...register("paraTitle", { required: true })} placeholder="Type here" className="input input-bordered rounded w-full p-2" />
                    {errors.paraTitle && <p className="text-red-500 py-1">{errors?.paraTitle?.message || "Para Title is Required"}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="mt-1 font-semibold">Write blog</span>
                    </label>
                    <textarea type="text" cols="50" {...register("blog", { required: true })} placeholder="Write a para" className="input input-bordered h-24 rounded w-full p-2" ></textarea>
                    {errors.blog && <p className="text-red-500 py-1">{errors?.blog?.message || "Blog is Required"}</p>}
                </div>
                {error && <p className="text-red-500 py-1">{error}</p>}
                <div className="relative mt-3">
                    <input disabled={imageLoading} className="btn btn-block rounded btn-primary text-white bg-blue-500" type="submit" value="Add Now" />
                    <div className="absolute top-1 w-full flex justify-center">{imageLoading && <Spinner size={40} />}</div>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;