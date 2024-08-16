import React from 'react'

export default function AboutSection() {
    return (
        <div id='about' className='w-full border-t-2 border-gray-400/20 h-full bg-black p-2 md:p-4 flex justify-center items-center flex-col'>
            <div className='w-full sm:w-2/3 md:w-2/3 xl:w-2/3 h-fit flex flex-col justify-center items-center'>
                <h1 className='text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl text-white font-bold p-2'>About</h1>
                <p className='text-gray-400 text-center '><span className='text-violet-600 font-bold'>Composehub </span>
                    is a comprehensive online platform dedicated to enhancing programming skills across a diverse range of languages. It provides a wealth of learning resources, including tutorials specifically designed to accommodate users at every skill level, from beginners just starting their journey to advanced learners seeking to refine their expertise. In addition to facilitating personal skill development, Composehub fosters a collaborative environment where users can share their knowledge and experiences with one another. This community-driven approach not only enriches the learning experience but also makes Composehub an invaluable resource for anyone looking to improve their programming proficiency and engage with like-minded individuals in the tech space.
                </p>
            </div>


        </div>
    )
}
