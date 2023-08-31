import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SingleBlog = ({ article }) => {
    const { _id, thumbnails, title, category, blog } = article;
    return (
        <div className="border rounded shadow-lg">
            <Image
                src={thumbnails[0]}
                width={450}
                height={450}
                className="h-[20vh] rounded w-full"
                alt=""
            />
            <div className="p-4 bg-base-100 border border-t-0">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl uppercase font-semibold text-orange-500">{title}</h2>
                    <Link href={`${category}-blogs/${_id}`}
                        className="shadow hover:shadow-md bg-base-200 text-orange-500 w-8 h-8 rounded-full flex justify-center items-center">
                        <FaArrowRight />
                    </Link>
                </div>
                <p>{blog.length>60?<>{blog.slice(0, 60)} <Link href={`${category}-blogs/${_id}`}>see more...</Link></>:blog}</p>
            </div>
        </div>
    );
};

export default SingleBlog;