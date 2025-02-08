import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import TestinomialsDis from "@/components/TestinomialsDis";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="relative grid min-h-screen grid-rows-[.5fr_5fr_1fr] items-center justify-items-center font-Roboto overflow-x-hidden">
        <div className="bg-blob-1 absolute -left-20 -top-20 -z-10 h-64 w-80 rounded-full opacity-50 blur-3xl lg:-top-[20rem] lg:left-20 lg:h-[40rem] lg:w-[40rem] lg:blur-[70rem]"></div>
        <div className="bg-blob-2 bottom-50 absolute -right-64 -z-10 h-64 w-80 rounded-full opacity-50 blur-3xl lg:-right-[30rem] lg:bottom-10 lg:h-[60rem] lg:w-[60rem] lg:blur-[70rem]"></div>
        <div className="bg-blob-3 absolute -left-40 bottom-10 -z-10 h-80 w-80 rounded-full opacity-50 blur-3xl lg:-left-[30rem] lg:bottom-0 lg:h-[40rem] lg:w-[60rem] lg:blur-[70rem]"></div>

        <div className="row-span-1 flex h-full w-full flex-col lg:flex-row">
          <div className="flex lg:h-full lg:w-1/2"></div>
          <div className="flex h-full w-full lg:w-1/2">
            <nav className="mx-2 flex h-full w-full items-center justify-around justify-items-start text-base lg:mx-20 lg:justify-start lg:gap-20 lg:text-lg">
              <a
                href="#home"
                className="hover:decoration-blob-1 font-medium text-white hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:decoration-blob-1 font-medium text-white hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="hover:decoration-blob-1 font-medium text-white hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:decoration-blob-1 font-medium text-white hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
        <div className="row-span-1 grid h-full w-full grid-cols-[1fr_1fr] p-20">
          <div className="col-span-1 flex flex-col gap-10 pl-56 pr-32 pt-20">
            <div>
              <h1 className="text-7xl font-bold">
                <p className="from-gradient-1 to-gradient-2 inline-block bg-gradient-to-r bg-clip-text text-transparent">
                  NEXUS Swarm:
                </p>
                Empowering Student Innovators
              </h1>
            </div>
            <div className="text-2xl">
              Empowering students to innovate, lead, and make an impact – that’s
              the NEXUS Swarm way.
            </div>
            <div className="flex h-full w-full justify-around pt-10">
              <Button
                variant="outline"
                className="border-blob-1 bg-blob-2 rounded-full px-20 py-9 text-xl font-bold hover:bg-transparent"
              >
                JOIN US
              </Button>
              <Button
                variant="outline"
                className="border-blob-1 hover:bg-blob-2 rounded-full px-10 py-9 text-xl font-bold"
              >
                EXPLORE MORE
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src={"/hero2.svg"}
              width={700}
              height={700}
              alt="hero"
            ></Image>
          </div>
        </div>
        <div className="row-span-1 flex h-full w-full flex-col items-start justify-center gap-10 px-40 py-5">
          <div className="px-40 font-bold text-xl">COMMUNITY PARTNERS</div>
          <div className="h-full w-full px-28">
            <div className="bg-gradient-3 h-full w-full opacity-20 rounded-md backdrop-blur-md"></div>
          </div>
        </div>
      </div>
     
  
      <div className="grid min-h-screen items-center justify-items-center border border-red-700 font-[family-name:var(--font-geist-sans)]">
        <TestinomialsDis/>
        <Footer/>
      </div>

    </>
  );
}
