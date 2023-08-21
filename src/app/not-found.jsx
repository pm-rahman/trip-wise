"use client"
import notFound from "@/assets/NotFound.png"
import Image from 'next/image';
import Link from "next/link";
const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <Image
            src={notFound}
            width={400}
            height={400}
            alt='not found image'
            />
            <Link href="/" className='btn btn-wide btn-primary text-white bg-blue-500'>Go Home</Link>
        </div>
    );
};

export default NotFound;