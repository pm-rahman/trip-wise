"use client"
import useTheme from '@/hook/useTheme';
import { useEffect, useState } from 'react';
import userImg from "@/assets/emptyUse.jpg"
import Image from 'next/image';
import useAuth from '@/hook/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowRightFromBracket, FaArrowRightToBracket, FaBus, FaFileCirclePlus, FaFilePen, FaPlateWheat, FaUserCheck } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [navShow, setNavShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [bioShow, setBioShow] = useState(false);
    const [dropdownShow, setDropdownShow] = useState(false);
    const { user, googleUser, userLogOut } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const { replace } = useRouter();

    const handleGoogleLogin = () => {
        googleUser()
            .then(result => {
                // console.log(result?.user);
                toast.success('User signed in successfully');
                replace('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success('User logout in successfully');
                replace('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const scrollStart = () => {
        setIsSticky(window.scrollY > 195);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollStart);
    }, []);

    const navLink = <>
        <li><Link href="/" className='flex gap-1'><FaHome />Home</Link></li>
        <li className='relative' onClick={() => setDropdownShow(!dropdownShow)} >
            <div><FaFilePen />Blogs</div>
            <ul className={`p-2 border rounded absolute z-50 bg-base-100 ${!dropdownShow ? "-top-[300%]" : "top-[135%]"}`}>
                <li className='border-b'><Link href='/food-blogs'><FaPlateWheat />Food Blogs</Link></li>
                <li><Link href='/travel-blogs'><FaBus />Travel Blogs</Link></li>
            </ul>
        </li>
        {user &&
            <li><Link href="/add-blog" className='flex gap-1'><FaFileCirclePlus />Add blog</Link></li>
        }
    </>

    return (
        <div className={`navbar p-0 z-50 justify-between md:justify-normal ${isSticky && "sticky top-0"} bg-base-100 border-b`}>
            <div className="navbar-start">
                <div onClick={() => setNavShow(!navShow)} className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`${navShow || "hidden"} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">Trip Wise</a>
            </div>
            <div className="md:navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="gap-4">
                <div
                    onClick={() => toggleTheme()}
                    className='cursor-pointer'>
                    {theme === "forest"
                        ? <svg
                            className="swap-on h-9 w-9 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        : <svg
                            className="swap-off h-9 w-9 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    }
                </div>
                <div className='relative'>
                    <figure className='h-10 w-10 cursor-pointer overflow-hidden rounded-full'>
                        <Image
                            onClick={() => setBioShow(!bioShow)}
                            src={user && user?.photoURL ? user.photoURL : userImg}
                            fill
                            sizes="(min-width: 100%), (height: 100%)"
                            className='rounded-full'
                            alt="empty user"
                            title={user?.displayName}
                        />
                    </figure>
                    <ul onClick={() => setBioShow(!bioShow)} className={`w-28 capitalize bio_nav font-semibold absolute ${bioShow || "hidden"} top-[130%] z-50 right-0 bg-base-200 px-3 py-2 rounded-lg border border-base-300`}>
                        {!user
                            ? <>
                                <li onClick={() => handleGoogleLogin()} className="flex items-center justify-center gap-2">
                                    <FaArrowRightToBracket /> Sign In
                                </li>
                            </>
                            : <>
                                <li className='flex items-center gap-1 pb-1 mb-1 border-b border-base-300'>
                                    <FaUserCheck />
                                    <Link href="/profile">profile</Link>
                                </li>
                                <li><a
                                    onClick={() => handleLogOut()}
                                    className='flex gap-1 items-center'
                                ><FaArrowRightFromBracket /> Logout</a></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;