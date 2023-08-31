"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import SingleBlog from "../(home)/SingleBlog";

const TravelBLogs = () => {
    const [travelBlogs, setTravelBlogs] = useState([])
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_url}/api/blog/blogsByCategory?category=travel`)
            .then(data => setTravelBlogs(data.data))
            .catch(err => console.log(err.message))
    }, [])
    // console.log(travelBlogs);
    return (
        <div>
            <div className="flex mt-14 justify-between items-center">
                <h1 className="text-3xl font-semibold">Travel Blogs</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                {travelBlogs?.map(blog => <SingleBlog key={blog._id} article={blog} />)}
            </div>
        </div>
    );
};

export default TravelBLogs;