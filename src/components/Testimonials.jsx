import React from 'react';
import Title from "./Title.jsx";
import {testimonialsItems} from "../constant/data.js";
import {RiArrowLeftLine, RiArrowRightLine} from "@remixicon/react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import {Autoplay, Navigation} from "swiper/modules";
import {motion} from "motion/react";
import * as variants from "../motion/animation.js";


const Testimonials = () => {
    return (
        <section className="section" id="testimonials">
            <motion.div className="container" variants={variants.staggerContainer} initial='hidden'
                        viewport={{once: true}}
                        whileInView='show'>
                <Title title='Our Testimonials'
                       text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                 Ac cum eget habitasse in velit fringilla feugiat senectus in.'
                       link='View All'/>
                <motion.div variants={variants.fadeInUp}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1.5
                            },
                            1280: {
                                slidesPerView: 2.5
                            },
                        }}
                        loop={true}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        className="mt-14 lg:mt-16">
                        {testimonialsItems.map(item => (
                            <SwiperSlide
                                className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3 shadow-md"
                                key={item.id}>
                                <p>{item.text}</p>
                                <div
                                    className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <img src={item.img} alt={item.author} width={50} height={50}/>
                                        </div>

                                        <p className="font-medium">{item.author}</p>
                                    </div>
                                    <button className="secondary-btn">Read Full Story</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.div variants={variants.fadeInUp} className="flex items-center justify-center mt-18 gap-5">
                    <button className="bg-secondary w-12 h-12 flex items-center justify-center rounded-xl
                    hover:bg-secondary/90 transition-colors active:bg-secondary/80 prev-btn text-white">
                        <RiArrowLeftLine size={30}/>
                    </button>

                    <button className="bg-secondary w-12 h-12 flex items-center justify-center rounded-xl
                    hover:bg-secondary/90 transition-colors active:bg-secondary/80 next-btn text-white">
                        <RiArrowRightLine size={30}/>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Testimonials;