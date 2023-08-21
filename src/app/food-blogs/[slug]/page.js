"use client"
import SingleBlog from '@/Component/single-blog/single-blog';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SingleFoodBlog = () => {
    const [blog, setBlog] = useState({});
    const {slug} = useParams();
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_url}/api/blog/singleBlog?id=${slug}`)
        .then(data=>setBlog(data.data))
        .catch(err=>console.log(err));
    }, [slug])
    return (
        <div>
            <SingleBlog blog={blog} slug={slug} />
        </div>
    );
};

export default SingleFoodBlog;