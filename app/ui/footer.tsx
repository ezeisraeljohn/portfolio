import { HeaderLogo, HeroSocialCard } from "./hero";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function FooterSection() {
  return (
    <footer>
      <HeaderLogo></HeaderLogo>
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
      ezeisraeljohn@2024 All Rights Reserved By Israel
    </footer>
  );
}
