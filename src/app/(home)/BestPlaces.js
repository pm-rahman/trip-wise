"use client"
import SinglePlace from "./SinglePlace";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const BestPlaces = () => {
    const [blogs,setBLogs] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_url}/api/blog?limit=3`)
        .then(data=>{
            setBLogs(data.data);
        })
        .catch(err=>{
            console.log(err.message);
        })
    },[])
    return (
        <>
            <div className="flex mt-14 justify-between items-center">
                <h1 className="text-3xl font-semibold">Food BLogs</h1>
                <Link href="/food-blogs" className="bg-base-200 text-orange-500 px-3 py-2 rounded flex gap-2 justify-center items-center">
                    <span>See All</span>
                    <FaArrowRight className="" />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                {blogs.map(blog=><SinglePlace key={blog._id} article={blog} />)}
            </div>
        </>
    );
};

export default BestPlaces;