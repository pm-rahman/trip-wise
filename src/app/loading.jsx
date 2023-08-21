
import Spinner from '@/Component/Spinner';
import React from 'react';


const loading = () => {
    return (
        <div className='flex justify-center mt-5'>
            <Spinner/>
        </div>
    );
};

export default loading;