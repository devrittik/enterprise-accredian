import Hero from "./components/Home/Hero";
import Metrics from "./components/Home/Metrics";
import Mission from "./components/Home/Mission";
import USP from "./components/Home/USP";
import CAT from "./components/Home/CAT";
import Impact from "./components/Home/Impact";
import Deliverables from "./components/Home/Deliverables";
import CTA from "./components/Home/CTA";
import FloatingCTA from "./components/common/FloatingCTA";

import dynamic from "next/dynamic";

const Partnerships = dynamic(
  () => import("./components/Home/Partnerships"),
  {
    loading: () => (
      <div className="py-20 text-center">
        Loading Partners...
      </div>
    ),
  }
);

const Testimonials = dynamic(
  () => import("./components/Home/Testimonials"),
  {
    loading: () => (
      <div className="py-20 text-center">
        Loading Testimonials...
      </div>
    ),
  }
);

const SkillsCatalog = dynamic(
  () => import("@/Catalog/SkillsCatalog"),
  {
    loading: () => (
      <div className="py-20 text-center">
        Loading Skills Catalog...
      </div>
    ),
  }
);

const FAQSection = dynamic(
  () => import("./components/Home/FAQ"),
  {
    loading: () => (
      <div className="py-20 text-center">
        Loading FAQ Section...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <main className="w-full">
        <Hero />
        <Metrics />
        <Partnerships />
        <SkillsCatalog />
        <Mission />
        <USP />
        <CAT />
        <Impact />
        <Deliverables />
        <CTA />
        <Testimonials />
        <FAQSection />
        <FloatingCTA />
      </main>
    </div>
  );
}