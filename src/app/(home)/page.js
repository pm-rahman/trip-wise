import React from 'react';
import HeroSlider from './HeroSlider';
import BestBlogs from './BestBlogs';
import About from './About';

const HomePage = () => {
    return (
        <div>
            <HeroSlider />
            <BestBlogs />
            <About />
        </div>
    );
};

export default HomePage;