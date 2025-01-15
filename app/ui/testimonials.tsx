"use client";

import React, { useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TestimonialCard({
  star,
  comment,
  image,
  name,
  title,
}: {
  image: string;
  comment: String;
  name: String;
  star: number;
  title: String;
}) {
  return (
    <div>
      <div>
        <div>
          <ImQuotesRight></ImQuotesRight>
        </div>
        <div className="flex m-auto">
          {Array.from({ length: star }, (_, i) => (
            <FaStar></FaStar>
          ))}
        </div>
      </div>
      <p>{comment}</p>
      <div>
        <div>
          <Image src={image} alt="client" width={150} height={150} />
        </div>
        <div>
          <h4>{name}</h4> <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ slides }: { slides: Array<any> }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      {slides.map((slide, index) => {
        return <div key={index}>{index === current && <div>{slide}</div>}</div>;
      })}
      <button onClick={prevSlide}>
        <FaArrowLeft></FaArrowLeft>
      </button>
      <button onClick={nextSlide}>
        <FaArrowRight></FaArrowRight>
      </button>
    </div>
  );
}

function TestimonialButtonIndicator({ number }: { number: number }) {
  return (
    <div>
      {Array.from({ length: number }, (_, i) => (
        <button key={i} className="w-3 h-3 bg-red-500 rounded-full"></button>
      ))}
    </div>
  );
}
export function Testimonial() {
  const slides = [
    <TestimonialCard
      star={5}
      comment="I am very happy with the service I received from Eze. He is very professional and delivered my project on time."
      image="/pth.jpg"
      name="John Doe"
      title="CEO, Company"
    ></TestimonialCard>,
    <TestimonialCard
      star={4}
      comment="Eze is a great developer. He is very knowledgeable and has a great work ethic."
      image="/pth.jpg"
      name="Jane Doe"
      title="CTO, Company"
    ></TestimonialCard>,
    <TestimonialCard
      star={5}
      comment="Eze is a great developer. He is very knowledgeable and has a great work ethic."
      image="/pahtsd.jpeg"
      name="Jane Doe"
      title="CTO, Company"
    ></TestimonialCard>,
    <TestimonialCard
      star={5}
      comment="Eze is a great developer. He is very knowledgeable and has a great work ethic."
      image="/pahtsd.jpeg"
      name="Jane Doe"
      title="CTO, Company"
    ></TestimonialCard>,
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      <h3>What client say about us</h3>
      <TestimonialCarousel slides={slides}></TestimonialCarousel>
      <TestimonialButtonIndicator number={4}></TestimonialButtonIndicator>
    </section>
  );
}
