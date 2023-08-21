import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SinglePlace = ({article}) => {
    const {_id,thumbnails,title,category,blog}=article;
    return (
        <div className="relative rounded overflow-hidden">
            <Image
                src={thumbnails[0]}
                width={450}
                height={450}
                className="h-full w-full"
                alt=""
            />
            <div className="absolute w-full h-full bottom-0 left-0 p-4" style={{ background: "rgba(69,69,69,.6)" }}>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl uppercase font-semibold text-orange-500">{title}</h2>
                    <Link href={`${category}-blogs/${_id}`} className="bg-base-200 text-orange-500 w-8 h-8 rounded-full flex justify-center items-center">
                        <FaArrowRight />
                    </Link>
                </div>
                <p className="text-slate-200">{blog}</p>
            </div>
        </div>
    );
};

export default SinglePlace;