import { FaCode, FaSketch, FaPen } from "react-icons/fa";

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export  function Service() {
  return (
    <>
      <section id="services">
        <h3>MY SERVICES</h3>
        <h2>What I Do</h2>
        <ServiceCard
          title="Backend Developer"
          description="I build scalable and secure RESTful APIs using Node.js, Express, and MongoDB and More..."
          icon={<FaCode></FaCode>}
        ></ServiceCard>
        <ServiceCard
          title="Web Development"
          description="I build web applications using modern technologies like React, Next.js, and Tailwind CSS."
          icon={<FaCode></FaCode>}
        ></ServiceCard>
        <ServiceCard
          title="UI/UX Design"
          description="I design user interfaces and user experiences that are intuitive and user-friendly."
          icon={<FaSketch></FaSketch>}
        ></ServiceCard>

        <ServiceCard
          title="Technical Writing"
          description="I write technical documentation that are easy to understand and follow, using tools like postman and swagger."
          icon={<FaPen></FaPen>}
        ></ServiceCard>
      </section>
    </>
  );
}
