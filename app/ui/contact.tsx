import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SiTicktick } from "react-icons/si";
import { IoMapOutline } from "react-icons/io5";

function ContactField({ placeHolder }: { placeHolder: string }) {
  return (
    <>
      <input placeholder={placeHolder} type="email" />
    </>
  );
}

function ContactFieldDiv({
  placeHolder1,
  placeHolder2,
}: {
  placeHolder1: string;
  placeHolder2: string;
}) {
  return (
    <div>
      <ContactField placeHolder={placeHolder1} />
      <ContactField placeHolder={placeHolder2} />
    </div>
  );
}

function ContactFieldDivs() {
  return (
    <div>
      <ContactFieldDiv
        placeHolder1="Enter Your Name"
        placeHolder2="Enter Your Phone"
      />
      <ContactFieldDiv
        placeHolder1="Enter Your Email"
        placeHolder2="Enter your Subject"
      />
    </div>
  );
}

function ContactMessage() {
  return (
    <div>
      <textarea placeholder="Enter Your Message" />
    </div>
  );
}

function ContactButton() {
  return (
    <div>
      <button>Send Message</button>
    </div>
  );
}

function ContactMessageArea() {
  return (
    <div>
      <ContactFieldDivs />
      <ContactMessage />
      <ContactButton />
    </div>
  );
}

//------Contact Reachout Zone----------//
function ContactReachoutCard({
  svgLogo,
  name,
}: {
  svgLogo: React.ReactNode;
  name: string;
}) {
  return (
    <div>
      <div>{svgLogo}</div>
      <p>{name}</p>
    </div>
  );
}

function ContactReachout() {
  return (
    <div>
      <ContactReachoutCard
        svgLogo={<IoMapOutline></IoMapOutline>}
        name="Lagos Nigeria"
      />
      <ContactReachoutCard
        svgLogo={<FiPhone></FiPhone>}
        name="+234 7052175726"
      />
      <ContactReachoutCard
        svgLogo={<HiOutlineMail></HiOutlineMail>}
        name="ezeisraeljohn@gmail.com"
      />
      <ContactReachoutCard
        svgLogo={<SiTicktick></SiTicktick>}
        name="Available for Freelance"
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <h3>CONTACT</h3>
      <h2>Get In Touch</h2>
      <ContactMessageArea />
      <ContactReachout />
    </section>
  );
}
