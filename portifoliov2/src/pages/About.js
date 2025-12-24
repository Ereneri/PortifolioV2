import React from "react";
import workExperienceData from "../data/workExperience.json";

function About() {
  return (
    <div className="min-h-screen max-w-[1100px] mx-auto py-8">
      <div className="flex flex-row gap-8 items-center justify-center pt-8">
        <img
          src="/profilepicture.jpeg"
          alt="Profile"
          className="rounded-full w-40"
        />
        <div className="text-left">
          <h1 className="text-7xl font-extrabold text-light">Eren Erisgen</h1>
          <h1 className="text-4xl text-light">About Me</h1>
        </div>
      </div>

      <div className="flex gap-8 items-center flex-col md:flex-row py-16">
        <p className="text-xl text-light text-justify">
          As a Software Engineer, I strive every day to build software that
          meaningfully improves the lives of both my coworkers and customers. My
          education at the University of Minnesota, Twin Cities, has equipped me
          with the skills to solve real-world problems effectively. I have a
          vast range of experience spanning from full-stack development to
          graduate-level algorithms. Through my prior experience at Thrivent
          Financial and my current role at The Bernard Group, I’ve been pushed
          to challenge assumptions, grow professionally, and continuously work
          towards being the best engineer I can be. In the future, I plan to
          explore cloud infrastructure and DevOps. To stay updated with my
          software engineering journey, you can bookmark this page or follow me
          on GitHub. You can also connect with me on LinkedIn.
        </p>
      </div>

      <div className="flex flex-col gap-4 pb-16">
        <h2 className="text-3xl font-bold primary-text uppercase">
          Work Experience
        </h2>
        <div className="flex flex-col">
          {workExperienceData.map((company, companyIndex) => (
            <div key={companyIndex} className="flex justify-between w-full">
              <img
                src={`/${company.image}`}
                alt={`${company.company} Logo`}
                className="w-16 h-16 mr-4 rounded-xl"
              />
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold text-light">
                  {company.company}
                </h3>
                {company.positions.map((position, positionIndex) => (
                  <div key={positionIndex} className="relative">
                    <div className="w-full justify-between flex">
                      <div className="flex items-center gap-4">
                        <span className="w-2 h-2 shrink-0 bg-tertiary rounded-full relative z-10" />
                        <h4 className="text-xl text-secondary code-font">
                          {position.title}
                        </h4>
                      </div>
                      <h4 className="text-xl font-base font-semibold">
                        {position.period}
                      </h4>
                    </div>
                    <div
                      className={`pb-4 pl-4 ${
                        positionIndex < company.positions.length - 1
                          ? "relative"
                          : ""
                      }`}
                    >
                      {positionIndex < company.positions.length - 1 && (
                        <div
                          className="absolute left-0 top-0 bottom-0 w-0.5 bg-tertiary mb-2"
                          style={{ marginLeft: "3px" }}
                        ></div>
                      )}
                      <ul className="list-disc list-inside text-justify text-light ml-2 mt-2">
                        {position.responsibilities.map(
                          (responsibility, idx) => (
                            <li key={idx} className="mb-2 leading-snug">
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold primary-text uppercase">Education</h2>
        <div className="flex w-full flex-row">
          <img
            src="/umn.jpeg"
            alt="University of Minnesota Seal"
            className="w-16 h-16 mr-4 rounded-xl"
          />
          <div className="flex justify-between w-full">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-light">
                University of Minnesota, Twin Cities
              </h3>
              <p className="text-lg tertiary-text">
                Bachelor of Science in Computer Science
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-base text-light">GPA: 3.94/4.0</h3>
              <p className="text-lg tertiary-text">
                College of Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
