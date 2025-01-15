import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

//----- Header Part-------//
function HeaderNavBar() {
  return (
    <nav>
      <Link href="#home">Home</Link>
      <Link href="#services">Services</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#resume">Resume</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
}

function HeaderLogo() {
  return (
    <div>
      <Image
        src="/path/to/image.jpg"
        alt="Israel Logo"
        width={100}
        height={100}
      />
    </div>
  );
}

function HeaderCvButton() {
  return (
    <>
      <Link href="./ezeisraeljonCv">
        <button>Download Cv</button>
      </Link>
    </>
  );
}

/**
 * The header, of the Home section
 */
function HeaderForHome() {
  return (
    <>
      <header>
        <HeaderLogo></HeaderLogo>
        <HeaderNavBar></HeaderNavBar>
        <HeaderCvButton></HeaderCvButton>
      </header>
    </>
  );
}

//------- Hero Part ------//
function HeroSocialCard({
  title,
  url,
  svgLogo,
}: {
  url: Url;
  svgLogo: React.ReactNode;
  title: String;
}) {
  return (
    <div>
      <Link href={url}>{svgLogo}</Link>
    </div>
  );
}

function HeroSocialCards() {
  return (
    <div>
      <h3>FIND ME ON</h3>
      <HeroSocialCard
        title="Twitter URL"
        url="https://twitter.com/ezeisraeljon"
        svgLogo={<FaXTwitter></FaXTwitter>}
      ></HeroSocialCard>

      <HeroSocialCard
        title="Facebook URL"
        url="https://facebook.com/ezeisraeljon"
        svgLogo={<FaFacebook></FaFacebook>}
      ></HeroSocialCard>

      <HeroSocialCard
        title="Linkedin URL"
        url="https://linkedin.com/in/ezeisraeljon"
        svgLogo={<FaLinkedin></FaLinkedin>}
      ></HeroSocialCard>

      <HeroSocialCard
        title="Github URL"
        url="https://github.com/ezeisraeljon"
        svgLogo={<FaGithub></FaGithub>}
      ></HeroSocialCard>
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
    <div>
      <h2>{term}</h2>
      <p>{explanation}</p>
    </div>
  );
}

function HeroStatement() {
  return (
    <div>
      <HeroStatementCard
        term="2+"
        explanation="Years of experience"
      ></HeroStatementCard>

      <HeroStatementCard
        term="10+"
        explanation="Projects completed"
      ></HeroStatementCard>

      <HeroStatementCard
        term="5+"
        explanation="Happy clients"
      ></HeroStatementCard>
    </div>
  );
}

function HeroText() {
  return (
    <div>
      <h3>Hello, I'm</h3>
      <h2>Eze Israel John</h2>
      <p>
        I am a Backend Developer with a passion for developing robust and
        scalable Backend Solutions
      </p>
      <HeroSocialCards></HeroSocialCards>
      <HeroStatement></HeroStatement>
    </div>
  );
}

function HeroImage() {
  return (
    <div>
      <Image src="/path/to/image.jpg" alt="The hero image" />
    </div>
  );
}

/**
 * The hero section of the home section
 */
function Hero() {
  return (
    <div>
      <HeroText></HeroText>
      <HeroImage></HeroImage>
    </div>
  );
}

/**
 * The home section of the page
 */
export default function Home() {
  return (
    <>
      <section id="home">
        <HeaderForHome></HeaderForHome>
        <Hero></Hero>
      </section>
    </>
  );
}
