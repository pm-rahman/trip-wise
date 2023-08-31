"use client";
import SingleBlog from "./SingleBlog";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";

const BestBlogs = () => {
  // state declare
  const [blogs, setBLogs] = useState([]);
  const [carouselStart, setCarouselStart] = useState(0);
  const [carouselEnd, setCarouselEnd] = useState(3);
  const [carouselItem, setCarouselItem] = useState([]);

  // data fatch
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_url}/api/blog?limit=10`)
      .then((data) => {
        setBLogs(data.data);
        setCarouselItem(blogs.slice(carouselStart, carouselEnd));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [blogs, carouselStart, carouselEnd]);

  // function
  const handleCarouselPrev = () => {
    if (carouselStart !== 0) {
      setCarouselStart((prev) => prev - 1);
      setCarouselEnd((prev) => prev - 1);
    }
  };
  const handleCarouselNext = () => {
    if (blogs.length !== carouselEnd) {
      setCarouselStart((prev) => prev + 1);
      setCarouselEnd((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="flex mt-14 justify-between items-center">
        <h1 className="text-2xl uppercase font-semibold">Best BLogs</h1>
        <Link
          href="/food-blogs"
          className="bg-base-200 font-semibold hover:bg-base-300 text-orange-500 px-3 py-2 rounded flex gap-2 justify-center items-center"
        >
          <span>See All</span>
          <FaArrowRight />
        </Link>
      </div>
      <div className="mt-8 px-8 py-16 flex items-center gap-4 bg-base-200 border border-orange-500 rounded">
        <button
          onClick={handleCarouselPrev}
          className="bg-base-100 font-semibold hover:bg-base-300 text-orange-500 p-4 rounded-full"
        >
          <FaAngleLeft />
        </button>
        <div className="flex-1 grid lg:grid-cols-3 gap-4">
          {carouselItem.map((blog) => (
            <SingleBlog key={blog._id} article={blog} />
          ))}
        </div>
        <button
          onClick={handleCarouselNext}
          className="bg-base-100 font-semibold hover:bg-base-300 text-orange-500 p-4 rounded-full"
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default BestBlogs;
