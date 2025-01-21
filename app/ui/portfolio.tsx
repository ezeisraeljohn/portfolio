import React from "react";
import { Tags, Links } from "./interface";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import Image from "next/image";

function PortfolioCard({
  image,
  links,
  tags,
  title,
  description,
}: {
  image: string;
  title: String;
  links: Array<Links>;
  tags: Array<Tags>;
  description: string;
}) {
  return (
    <div className="rounded-2xl shadow-2xl bg-custombackground">
      <div className=" ">
        <Image
          src={image}
          alt="This is the earnily image"
          width={500}
          height={500}
        />
      </div>
      <div className="p-5 w-full pb-10">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <p className="mt-5 text-slate-300">{description}</p>
        <div className="mt-5 flex flex-row space-x-4">
          {tags.map((tag) => (
            <div className="bg-blue-800 p-1 rounded-lg bg-opacity-30 text-xs text-blue-500">
              <p>{tag.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-row space-x-7">
          {links.map((link) => (
            <Link
              href={link.url}
              className="p-2 rounded-lg bg-blue-800 w-36 flex flex-col justify-center items-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <>
      <section id="portfolio" className="mt-20 p-10 pb-20">
        <div className=" mb-10 w-full flex flex-col justify-center items-center">
          <h3 className="text-blue-800">PORTFOLIO</h3>
          <h2 className="text-5xl font-bold font-weight: 700">My Work</h2>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <PortfolioCard
            title="Earnily API"
            description="This is an API built to serve both Job seekers (Entry level developers) and clients who are seeking to developers for a particular Job."
            image="/EarnilyImage.png"
            links={[
              {
                name: "View Source",
                url: "https://github.com/ezeisraeljohn/earnily",
              },
              {
                name: "View Live",
                url: "https://ezeisraeljohn.com",
              },
            ]}
            tags={[
              { name: "express.js", svgLogo: <SiNextdotjs></SiNextdotjs> },
              {
                name: "node.js",
                svgLogo: <SiTailwindcss></SiTailwindcss>,
              },
              { name: "javascript", svgLogo: <FaReact></FaReact> },
              { name: "cors", svgLogo: <SiTypescript></SiTypescript> },
            ]}
          ></PortfolioCard>

          <PortfolioCard
            title="CommerceCore API"
            description="This is a Microservice Based API built to ease the stress of developing E-commerce sites while setting up payment gateway for payments"
            image="/CommerceCoreImage.png"
            links={[
              {
                name: "View Source",
                url: "https://github.com/ezeisraeljohn/earnily",
              },
              {
                name: "View Live",
                url: "https://ezeisraeljohn.com",
              },
            ]}
            tags={[
              { name: "Ruby", svgLogo: <SiNextdotjs></SiNextdotjs> },
              {
                name: "Ruby on Rails",
                svgLogo: <SiTailwindcss></SiTailwindcss>,
              },
              { name: "Python", svgLogo: <FaReact></FaReact> },
              { name: "Fast API", svgLogo: <SiTypescript></SiTypescript> },
            ]}
          ></PortfolioCard>
          <PortfolioCard
            title="Property Hive API"
            description="This is an API built for a B2C Real Estate Company to manage their properties and also serve as a platform for users to search for properties"
            image="/PropertyHiveImage.png"
            links={[
              {
                name: "View Source",
                url: "https://github.com/ezeisraeljohn/earnily",
              },
              {
                name: "View Live",
                url: "https://ezeisraeljohn.com",
              },
            ]}
            tags={[
              { name: "Django", svgLogo: <SiNextdotjs></SiNextdotjs> },
              {
                name: "DRF",
                svgLogo: <SiTailwindcss></SiTailwindcss>,
              },
              { name: "Postman", svgLogo: <FaReact></FaReact> },
              { name: "Node.js", svgLogo: <SiTypescript></SiTypescript> },
              { name: "express.js", svgLogo: <SiTypescript></SiTypescript> },
            ]}
          ></PortfolioCard>
        </div>
      </section>
    </>
  );
}
