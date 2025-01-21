function ResumeCard({
  title,
  place,
  yearRange,
  description,
}: {
  title: String;
  place: String;
  yearRange: String;
  description: String;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{`${place}(${yearRange})`}</h4>
      <p>{description}</p>
    </div>
  );
}

function ResumeType() {
  return (
    <div>
      <div>
        <h3>Job Experience</h3>
        <p>2020-2024</p>
        <ResumeCard
          title="Backend Developer"
          place="InternPulse"
          yearRange="2024"
          description="Collaborated with a team of developers to build a scalable and secure RESTful API using Node.js, Express, Python Django, and Postgres"
        ></ResumeCard>
      </div>

      <div>
        <h3>Education</h3>
        <p>2016-2020</p>
        <ResumeCard
          title="BSc. Computer Science"
          place="University of Nigeria"
          yearRange="2016-2020"
          description="Graduated with a 2:1 in Computer Science"
        ></ResumeCard>
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <>
      <section id="resume" className="">
        <div className="flex flex-col justify-center items-center p-10">
          <h3 className=" ">RESUME</h3>
          <h2 className="font-bold text-5xl font-weight: 800">My Resume</h2>
        </div>
        <ResumeType></ResumeType>
      </section>
    </>
  );
}
