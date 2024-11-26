import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { Helmet } from 'react-helmet-async'

const Blog = () => {

  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  useEffect (() => {
    AOS.init ({ duration : 1000 })
  }, []);
  return (
    <>
<Helmet>
  <title>Food Delight - Blog</title>
</Helmet>
      <div data-aos ="fade-up" className='flex justify-center items-center'>
      <section class="bg-white dark:bg-gray-900 h-[80vh]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to='/'><button
                data-aos="fade-up"
                className="bg-[#FF4C4C] text-[#FFFFFF] hover:bg-[#000000] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
              >
                Back to Homepage
              </button>
              </Link>
        </div>   
    </div>
</section>
      </div>
      </>
  )
}

export default Blog
