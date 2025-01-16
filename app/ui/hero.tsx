import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

//----- Header Part-------//
function HeaderNavBar() {
  return (
    <nav className="flex space-x-10">
      <Link href="#home">HOME</Link>
      <Link href="#services">SERVICES</Link>
      <Link href="#portfolio">PORTFOLIO</Link>
      <Link href="#resume">RESUME</Link>
      <Link href="#contact">CONTACT</Link>
    </nav>
  );
}

export function HeaderLogo() {
  return (
    <div className="flex justify-center items-center space-x-3">
      <Image src="/IsraelLogo.png" alt="Israel Logo" width={50} height={50} />
      <div className="font-bold text-4xl font-weight: 700">Israel</div>
    </div>
  );
}

function HeaderCvButton() {
  return (
    <div>
      <Link
        href="./ezeisraeljonCv"
        className="bg-blue-800 hover:bg-blue-900 p-3 px-6 rounded-3xl"
      >
        <button>Download Cv</button>
      </Link>
    </div>
  );
}

/**
 * The header, of the Home section
 */
export function HeaderForHome() {
  return (
    <>
      <header className="mt-10 flex width-full mb-10 justify-between items-center">
        <HeaderLogo></HeaderLogo>
        <HeaderNavBar></HeaderNavBar>
        <HeaderCvButton></HeaderCvButton>
      </header>
    </>
  );
}

//------- Hero Part ------//
export function HeroSocialCard({
  title,
  url,
  svgLogo,
}: {
  url: Url;
  svgLogo: React.ReactNode;
  title: String;
}) {
  return (
    <div className="p-5 bg-custombackground rounded-lg">
      <Link href={url}>{svgLogo}</Link>
    </div>
  );
}

function HeroSocialCards() {
  return (
    <div className="mt-16">
      <h3>FIND ME ON</h3>
      <div className="mt-5 flex flex-row space-x-2">
        <HeroSocialCard
          title="Twitter URL"
          url="https://twitter.com/ezeisraeljohn"
          svgLogo={<FaXTwitter></FaXTwitter>}
        ></HeroSocialCard>

        <HeroSocialCard
          title="Facebook URL"
          url="https://facebook.com/ezeisraeljohn"
          svgLogo={<FiFacebook></FiFacebook>}
        ></HeroSocialCard>

        <HeroSocialCard
          title="Linkedin URL"
          url="https://linkedin.com/in/ezeisraeljohn"
          svgLogo={<FiLinkedin></FiLinkedin>}
        ></HeroSocialCard>

        <HeroSocialCard
          title="Github URL"
          url="https://github.com/ezeisraeljohn"
          svgLogo={<FiGithub></FiGithub>}
        ></HeroSocialCard>
      </div>
    </div>
  );
}

function HeroStatementCard({
  term,
  explanation,
}: {
  term: string;
  explanation: string;
}) {
  return (
    <div className="space-x-2">
      <h2 className="font-bold text-5xl font-weight: 700">{term}</h2>
      <p className="text-slate-300">{explanation}</p>
    </div>
  );
}

function HeroStatement() {
  return (
    <div className="mt-16 flex flex-row space-x-16">
      <HeroStatementCard
        term="4+"
        explanation="Years of experience"
      ></HeroStatementCard>

      <HeroStatementCard
        term="10+"
        explanation="Projects completed"
      ></HeroStatementCard>

      <HeroStatementCard
        term="9+"
        explanation="Happy clients"
      ></HeroStatementCard>
      <HeroStatementCard term="3+" explanation="System designs"></HeroStatementCard>
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col">
      <h3 className="text-slate-400 font-bold text-4xl font-weight: 700">
        Hello, <span className="text-blue-800">I'm</span>
      </h3>
      <h2 className="font-bold text-9xl font-weight: 700">Eze Israel</h2>
      <h3 className="text-4xl font-weight: 400">
        Backend Engineer and API Engineer
      </h3>
      <p className="mt-10 text-slate-400">
        I am a Backend Developer with a passion for developing robust and
        scalable Backend Solutions.
        <br /> I specialize in crafting Easy to Use APIs with Solid
        Documentations. <br />
        See more of my work down in the portfolio section.
      </p>
      <HeroSocialCards></HeroSocialCards>
      <HeroStatement></HeroStatement>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="-mt-16 shadow-2xl">
      <Image
        className="mt-5 bg-custombackground rounded-2xl"
        src="/HeroPicture.png"
        alt="The hero image"
        width={400}
        height={400}
      />
    </div>
  );
}
/**
 * The hero section of the home section
 */
export function Hero() {
  return (
    <section id="home" className="mt-36 flex flex-row space-x-24 p-5 shadow-xl">
      <HeroText></HeroText>
      <HeroImage></HeroImage>
    </section>
  );
}
