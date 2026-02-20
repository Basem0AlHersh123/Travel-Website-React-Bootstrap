import React from 'react'
import Hero from './hero';

// import Destinations from './Destinations';
import Categories from './categories.jsx';
import Testimonials from './testimonials.jsx';
import HeroCarousel from './HeroCarousel';
// import Blogs from '../components/Blogs.jsx';
import Blog_div from './blog.jsx';
import {posts} from './posts.js';
const Home = () => {
  return (
    <>  
        <Hero />        
      <HeroCarousel />
      <Categories />
        <Blog_div posts={posts}/>
      <Testimonials/>
      </>
    
  )
}

export default Home
