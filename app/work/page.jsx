"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "WordPress",
        description: "Developed the Tech Wania website, a digital agency offering web and mobile app development, digital marketing, graphics design, video production, SEO, and more. The platform highlights client collaboration, data security, and personalized support to drive business growth and success online.",
        stack: [
            {
                name: "HTML5"
            },
            {
                name: "CSS3"
            },
            {
                name: "WordPress",
            },
            {
                name: "Elementor"
            },
        ],
        image: "/assets/work/thumb1.png",
        live: "https://techwania.com/",
        github: "",
    },
    {
        num: "02",
        category: "WordPress",
        description: "TechCity is a dynamic platform dedicated to showcasing the latest in technology and innovation. Based in Bangladesh, TechCity provides insights, reviews, and updates on cutting-edge tech products and trends. It aims to connect tech enthusiasts, industry professionals, and businesses, fostering a community centered around technological advancement and digital growth.",
        stack: [
            {
                name: "HTML5"
            },
            {
                name: "CSS3"
            },
            {
                name: "WordPress",
            },
            {
                name: "Elementor"
            },
        ],
        image: "/assets/work/thumb2.png",
        live: "https://techcity.com.bd/",
        github: "",
    },
    {
        num: "03",
        category: "WordPress",
        description: "Alkali Solution is a company specializing in providing high-quality chemical solutions and services. They focus on delivering expertise in various sectors, including industrial and laboratory applications, with a strong emphasis on customer satisfaction and reliable product performance. Their offerings include a range of chemical products, technical support, and tailored solutions to meet diverse client needs.",
        stack: [
            {
                name: "HTML5"
            },
            {
                name: "CSS3"
            },
            {
                name: "WordPress",
            },
            {
                name: "Elementor"
            },
        ],
        image: "/assets/work/thumb3.png",
        live: "https://alkalisolution.com/",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"} }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent  text-outline">{project.num}</div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {/* remove last comma */}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repositary</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                {/* image */}
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-cover"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                            {/* slideer buttons */}
                            <WorkSliderBtns
                                containerStyle=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                                btnStyle=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Work;