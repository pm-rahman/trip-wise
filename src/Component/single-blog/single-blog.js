import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

const SingleBlog = ({ blog = [], slug }) => {
    // const navigate = nav
    const {replace} = useRouter();
    const handleDeleteBlog = () => {
        console.log('click hocce')
        axios.delete(`${process.env.NEXT_PUBLIC_url}/api/blog/singleBlog?id=${slug}`)
            .then(data => {
                console.log(data.data);
                replace('/');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='py-4 '>
            {blog?.thumbnails
                && <Image
                    width={400}
                    height={400}
                    src={blog?.thumbnails[0]}
                    className='w-full h-full'
                    alt="blog image"
                />
            }
            <div className='flex items-center justify-between'>
                <h2 className='mt-3 text-2xl font-semibold capitalize'>{blog?.title}</h2>
                <div className='flex items-center gap-2'>
                    <Link href={`/update-blog/${slug}`} className='cursor-pointer'><FaPenToSquare /></Link>
                    <span
                        onClick={handleDeleteBlog}
                        className='cursor-pointer'><FaTrash /></span>
                </div>
            </div>
            <p>{blog?.blog}</p>

        </div>
    );
};

export default SingleBlog;