import React from 'react';
import Title from "./Title";
import {benefitItems} from "../constant/data.js";
import {RiArrowRightUpLine} from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";


const Benefits = () => {
    return (
        <section className="section" id="benefits">
            <motion.div variants={variants.staggerContainer} initial='hidden'
                        viewport={{once: true}}
                        whileInView='show' className="container">
                <Title title='Benefits'
                text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et
                . Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
                link='View All'/>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16 ">
                    {benefitItems.map((item, index) => (
                        <motion.div variants={variants.fadeInUp} className="bg-white p-10 flex flex-col rounded-xl" key={index}>
                            <div className="bg-orange-75 w-[55%] h-24 flex items-center justify-center rounded-xl mx-auto mb-8">
                                <img src={item.icon} alt={item.title} width={64} height={64} />
                            </div>
                            <div className="mb-4 text-center space-y-3.5">
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>

                            <button className="mt-auto ml-auto border-white-95 w-14 h-14 flex items-center justify-center rounded-md
                            text-secondary transition-colors hover:bg-secondary hover:text-white">
                                <RiArrowRightUpLine sixe={26}/>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits;