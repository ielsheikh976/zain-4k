import React, {useState} from 'react';
import Title from "./Title.jsx";
import {faqItems} from "../constant/data.js";
import {RiAddLine} from "@remixicon/react";

import {motion} from "motion/react";
import * as variants from "../motion/animation.js";

const FaqSec = () => {
    const [openId, setOpenId] = useState(faqItems[0].id ?? null);
    const handleClick = (id) => {
        setOpenId(openId === id ? null : id);
    }
    return (
        <section className="section pb-[90px] lg:mb-[160px]" id="faq">
            <motion.div className="container" variants={variants.staggerContainer} initial='hidden'
                 viewport={{once: true}}
                 whileInView='show'>
                <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10 shadow-md">
                    <Title title='Frequently Asked Questions'
                    text='Still you have any questions? Contact our Team via ibrahimelsheikh196@gmail.com'
                    link='See All FAQ’s'/>

                    <div className="border border-white-95 grid p-6">
                        {faqItems.map((item) => (
                            <motion.div variants={variants.fadeInUp} className="space-y-3.5" key={item.id}>
                                <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                                    <h4 className="text-lg sm:text-xl">{item.title}</h4>
                                    <button className="w-10 h-10 bg-secondary flex items-center justify-center aspect-square
                                     rounded-lg hover:bg-secondary/90 text-white transition-colors" onClick={() => handleClick(item.id)}>
                                        <RiAddLine className={`transition ${openId === item.id ? "rotate-45": ""}`} size={30}/>
                                    </button>
                                </div>
                                <div className={`max-h-0 overflow-y-hidden transition-all ${openId === item.id ? "max-h-200": ""}`}>
                                    <p className="px-5 pb-3">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

export default FaqSec;