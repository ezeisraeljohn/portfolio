import React from "react";
import { Tags, Links } from "./interface";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

function PortfolioCard({
  image,
  links,
  tags,
  title,
  description,
}: {
  image: React.ReactNode;
  title: String;
  links: Array<Links>;
  tags: Array<Tags>;
  description: string;
}) {
  return (
    <div>
      <div>{image}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {tags.map((tag) => (
          <div>
            {tag.svgLogo}
            <p>{tag.name}</p>
          </div>
        ))}
      </div>
      <div>
        {links.map((link) => (
          <Link href={link.url}>
            <button>{link.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h3>PORTFOLIO</h3>
        <h2>My Work</h2>

        <PortfolioCard
          title="Portfolio"
          description="My portfolio website built with Next.js, React Tailwind CSS, and TypeScript."
          image="https://via.placeholder.com/150"
          links={[
            {
              name: "View Source",
              url: "https://github.com/ezeisraeljohn/portfolio",
            },
            {
              name: "View Live",
              url: "https://ezeisraeljohn.com",
            },
          ]}
          tags={[
            { name: "Next.js", svgLogo: <SiNextdotjs></SiNextdotjs> },
            { name: "Tailwind CSS", svgLogo: <SiTailwindcss></SiTailwindcss> },
            { name: "React", svgLogo: <FaReact></FaReact> },
            { name: "TypeScript", svgLogo: <SiTypescript></SiTypescript> },
          ]}
        ></PortfolioCard>
      </section>
    </>
  );
}
