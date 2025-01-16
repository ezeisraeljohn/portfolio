import Image from "next/image";
import { Hero, HeaderForHome } from "@/app/ui/hero";
import { Portfolio } from "@/app/ui/portfolio";
import { Resume } from "@/app/ui/resume";
import { Service } from "@/app/ui/service";
import { Testimonial } from "@/app/ui/testimonials";
import { Clients } from "@/app/ui/clients";
import Contact from "@/app/ui/contact";
import FooterSection from "./ui/footer";

export default function Home() {
  return (
    <div className="screen-h p-2 mx-20">
      <HeaderForHome></HeaderForHome>
      <main>
        <Hero></Hero>
        <Service></Service>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <Clients></Clients>
        <Contact></Contact>
      </main>
      <FooterSection></FooterSection>
    </div>
  );
}
