import Image from "next/image";
import HomePage, { HeaderForHome } from "@/app/ui/home";
import { Portfolio } from "@/app/ui/portfolio";
import { Resume } from "@/app/ui/resume";
import { Service } from "@/app/ui/service";
import { Testimonial } from "@/app/ui/testimonials";
import { Clients } from "@/app/ui/clients";
import Contact from "@/app/ui/contact";

export default function Home() {
  return (
    <div>
      <HeaderForHome></HeaderForHome>
      <main>
        <HomePage></HomePage>
        <Service></Service>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <Clients></Clients>
        <Contact></Contact>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
