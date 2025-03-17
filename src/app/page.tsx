import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import TestinomialsDis from "@/components/TestinomialsDis";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
export default function Home() {
  return (
    <>
     <div className="relative grid min-h-screen grid-rows-auto items-center justify-items-center font-Roboto px-6 sm:px-10 lg:px-20">
  <div className="bg-blob-1 absolute -left-20 -top-20 -z-10 h-40 w-60 rounded-full opacity-50 blur-3xl sm:h-64 sm:w-80 lg:-top-[20rem] lg:left-20 lg:h-[40rem] lg:w-[40rem] lg:blur-[70rem]"></div>
  <div className="bg-blob-3 absolute -left-40 bottom-10 -z-10 h-60 w-60 rounded-full opacity-50 blur-3xl sm:h-80 sm:w-80 lg:-left-[30rem] lg:bottom-0 lg:h-[40rem] lg:w-[60rem] lg:blur-[70rem]"></div>

  <div className="w-full py-6 flex flex-col sm:flex-row items-center justify-between">
    <div className="flex items-center gap-3">
      <Image src="/nslogo.png" width={100} height={100} alt="Nexus Logo" />
    </div>

    <nav className="flex flex-wrap items-center sm:gap-8 gap-4 lg:gap-14 text-base lg:text-lg">
      {["Home", "About", "Testimonials", "Contact Us"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(" ", "")}`}
          className="tracking-wide font-bold text-white hover:underline hover:decoration-2 hover:underline-offset-8"
        >
          {item}
        </a>
      ))}
    </nav>
  </div>

  {/* Hero Section */}
  <div className="grid w-full grid-cols-1 sm:grid-cols-2 items-center py-10">
    <div className="flex flex-col gap-6 sm:gap-10 px-4 sm:px-10 lg:px-20">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
        <p className="from-gradient-1 to-gradient-2 inline-block bg-gradient-to-r bg-clip-text text-transparent">
          NEXUS Swarm:
        </p>
        Empowering Student Innovators
      </h1>
      <p className="text-lg sm:text-xl">
        Empowering students to innovate, lead, and make an impact – that’s the NEXUS Swarm way.
      </p>
      <div className="flex flex-wrap gap-4 sm:gap-6">
        <Button
          variant="outline"
          className="border-blob-1 bg-blob-2 rounded-full px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold hover:bg-transparent"
        >
          JOIN US
        </Button>
        <Button
          variant="outline"
          className="border-blob-1 hover:bg-blob-2 rounded-full px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold"
        >
          EXPLORE MORE
        </Button>
      </div>
    </div>
    {/* Hero Image */}
    <div className="hidden sm:flex justify-center">
      <Image src="/hero2.svg" width={500} height={500} alt="hero" className="w-full max-w-[400px] lg:max-w-[500px]" />
    </div>
  </div>

  {/* Community Partners */}
  <div className="w-full flex flex-col items-center gap-6 py-10 px-4 sm:px-10 lg:px-40">
    <h2 className="text-xl font-bold text-center">COMMUNITY PARTNERS</h2>
    <div className="w-full max-w-4xl">
      <div className="bg-gradient-3 h-24 sm:h-32 w-full opacity-20 rounded-2xl backdrop-blur-md"></div>
    </div>
  </div>
</div>

     
  
      <div className="grid min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <Hero2  />
        <TestinomialsDis/>
        <Footer/>
      </div>

    </>
  );
}
