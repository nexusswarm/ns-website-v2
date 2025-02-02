import TestimonialCard from "@/components/TestimonialCard";
import TestinomialsDis from "@/components/TestinomialsDis";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="grid min-h-screen items-center justify-items-center border border-red-700 font-[family-name:var(--font-geist-sans)]">
      </div>
      <div className="grid min-h-screen items-center justify-items-center border border-red-700 font-[family-name:var(--font-geist-sans)]">
        <TestinomialsDis/>
        <Footer/>
      </div>

    </>
  );
}
