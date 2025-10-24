import React from 'react';
import Title from "./Title.jsx";
import {coursesSecItems} from "../constant/data.js";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";


const Courses = () => {
    return (
        <section className="section" id="courses">
            <motion.div className="container" variants={variants.staggerContainer} initial='hidden'
                 viewport={{once: true}}
                 whileInView='show'>
                <Title title='Our Courses'
                       text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                 Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
                       link='View All'/>
                <div className="grid gap-5 lg:grid-cols-2 mt-8 lg:mt-16">
                    {coursesSecItems.map((item) => (
                        <motion.div variants={variants.fadeInUp} className="shadow-md bg-white p-7 lg:p-10 rounded-[10px]" key={item.id}>
                            <div className="relative overflow-hidden rounded-[10px]">
                                <img src={item.img} alt={item.title} width={560} height={266}
                                     className="w-full h-full object-cover rounded-[10px]
                                     transition-transform duration-500 ease-in-out hover:scale-110"/>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center flex-wrap gap-2.5">
                                    {item.tags.map((tag, index) => (
                                        <span className="border border-orange-75 p-2 rounded-md bg-orange-97 mr-2" key={index}>
                                            {tag.tag}
                                        </span>
                                    ))}
                                    <p className="ml-auto font-medium">
                                        {item.instructor}
                                    </p>
                                </div>

                                <div className="my-6 space-y-1.5">
                                    <h4>
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </div>

                            <button className="bg-white-97 w-full p-3.5 rounded-md border border-white-97 hover:text-orange-50
                            hover:border-orange-50 transition">Get it now</button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Courses;