"use client"
import useAuth from '@/hook/useAuth';
import Image from 'next/image';
import userImg from "@/assets/emptyUse.jpg"

const ProfilePage = () => {
    const { user } = useAuth();
    return (
        <div className='flex gap-10'>
            <div>
                <Image
                    src={user && user?.photoURL ? user.photoURL : userImg}
                    width={400}
                    height={400}
                    className='rounded'
                    alt='User Image'
                />
                <h1 className='text-3xl font-semibold mt-2'>{user?.displayName}</h1>
                <hr className='my-2' />
                <p className='text-sm'>User id : {user&&user?.uid}</p>
                <p className=''>Email {user && user?.email}</p>
                <p>Account Create Time : {user&&user?.metadata?.creationTime}</p>
                <p>Lest Login Time : {user&&user?.metadata?.lastSignInTime}</p>
            </div>
            <div className='divider divider-horizontal'></div>
            <div>
                <h2>other things</h2>
            </div>
        </div>
    );
};

export default ProfilePage;