import { FaCode, FaSketch, FaPen, FaServer, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb"
import { SiMaterialdesignicons } from "react-icons/si";
import { GrServices } from "react-icons/gr";

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
    <div className="p-7 bg-gradient-to-br from-custombackground to-bg-slate-900 rounded-lg shadow-2xl">
      <div className="mt-5">{icon}</div>
      <h3 className="mt-5 text-2xl text-weight: 900 font-bold">{title}</h3>
      <p className="mt-5">{description}</p>
    </div>
  );
}

export function Service() {
  return (
    <>
      <section id="services" className="mt-36 p-10 pb-20 shadow-2xl">
        <h3 className="text-blue-800">MY SERVICES</h3>
        <h2 className="font-bold text-5xl font-weight: 800">What I Do</h2>
        <div className="grid grid-cols-3 gap-7 mt-5">
          <ServiceCard
            title="Backend Developement"
            description="I build robust, scalable APIs and systems using Django, FastAPI, Express, Node, MongoDB and SQL, ensuring efficient and secure server-side functionality."
            icon={<FaCode className="text-4xl text-blue-800"></FaCode>}
          ></ServiceCard>
          <ServiceCard
            title="Database Management"
            description="I manage and optimize databases, ensuring data integrity, scalability, and high performance using SQL and NoSQL solutions"
            icon={<FaDatabase className="text-4xl text-blue-800"></FaDatabase>}
          ></ServiceCard>
          <ServiceCard
            title="Integration Services"
            description="I connect applications with third-party APIs and services, enabling interoperability and extending functionality."
            icon={<TbApi className="text-5xl text-blue-800"></TbApi>}
          ></ServiceCard>

          <ServiceCard
            title="Microservices Architecture"
            description="I develop and deploy microservices, ensuring modularity, scalability, and efficient system communication."
            icon={<GrServices className="text-4xl text-blue-800"></GrServices>}
          ></ServiceCard>

          <ServiceCard
            title="Scalable System Design"
            description="I design backend architectures to handle growing user demands with load balancing, caching, and containerization."
            icon={<SiMaterialdesignicons  className="text-4xl text-blue-800"></SiMaterialdesignicons>}
          ></ServiceCard>

          <ServiceCard
            title="Devops"
            description="I optimize development and deployment with CI/CD pipelines, automation, and tools like Docker, Kubernetes, and Jenkins for seamless software delivery."
            icon={<FaServer className="text-4xl text-blue-800"></FaServer>}
          ></ServiceCard>
        </div>
      </section>
    </>
  );
}
