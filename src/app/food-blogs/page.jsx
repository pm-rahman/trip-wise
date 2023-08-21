'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SinglePlace from "../(home)/SinglePlace";

const FoodBlogs = () => {
    const [foodBlogs,setFoodBlogs]=useState([])
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_url}/api/blog/blogsByCategory?category=food`)
        .then(data=>setFoodBlogs(data.data))
        .catch(err=>console.log(err.message))
    },[])
    // console.log(foodBlogs);
    return (
        <div>
            <div className="flex mt-14 justify-between items-center">
                <h1 className="text-3xl font-semibold">Food Blogs</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                {foodBlogs?.map(blog=><SinglePlace key={blog._id} article={blog} />)}
            </div>
        </div>
    );
};

export default FoodBlogs;