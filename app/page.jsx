import Photo from "@/components/Photo";
import Social from "@/components/Social";
// import CV from "../public/assets/Resume.pdf";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Document } from "react-pdf";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Area */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Programmer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Md. Saiful Islam Arif</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80]">I excel at crafting elegant digital experiences and I'm proficient in various programming language and technogies.</p>
            {/* button and social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Document file={CV}> */}
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <a>
                    <span>Download CV</span>
                  </a>
                  <FiDownload className="text-xl" />
                </Button>
              {/* </Document> */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo Area */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;