"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Harness web development for a dynamic online presence, captivating audiences, and driving business growth.",
        href:"",
    },
    {
        num: "02",
        title: "Software Development",
        description: "Crafting software solutions to seamlessly align with business objectives propels effortless goal achievement.",
        href:"",
    },
    {
        num: "03",
        title: "Mobile App Development",
        description: "Create mobile apps to propel business goals digitally with innovation and efficiency.",
        href:"",
    },
    {
        num: "04",
        title: "Digital Marketing",
        description: "Digital marketing empowers SMEs, enabling them to compete with industry giants for growth and success.",
        href:"",
    },
    {
        num: "05",
        title: "SEO",
        description: "Digital marketing empowers SMEs, enabling them to compete with industry giants for growth and success.",
        href:"",
    },
    {
        num: "06",
        title: "Social Media Marketing",
        description: "Digital marketing empowers SMEs, enabling them to compete with industry giants for growth and success.",
        href:"",
    },
    {
        num: "07",
        title: "Website Maintenance",
        description: "Digital marketing empowers SMEs, enabling them to compete with industry giants for growth and success.",
        href:"",
    },
    {
        num: "08",
        title: "Technical Support",
        description: "Digital marketing empowers SMEs, enabling them to compete with industry giants for growth and success.",
        href:"",
    },
];

const Services = () => {
    return (
        <section className="min-h-[89vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {
                        services.map((service, index) => {
                            return (
                                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center  hover:-rotate-45">
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                    {/* description */}
                                    <p className="text-white/60">{service.description}</p>
                                    {/* border */}
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            );
                        })
                    }
                </motion.div>
            </div>
        </section>
    );
}

export default Services;