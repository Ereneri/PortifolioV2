import React from "react";
import { projectsList } from "../data/projects";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col gap-8 max-w-[1100px] mx-auto py-8 pt-16"
    >
      <div className="flex flex-col p-4 gap-4 justify-center items-center">
        <h1 className="text-9xl font-extrabold text-light leading-none">
          Eren Erisgen
        </h1>
        <h2 className="text-2xl secondary-text code-font uppercase pl-1">
          Software Engineer && Computer Scientist
        </h2>
      </div>

      <div className="mx-auto max-w-[200px] md:max-w-full py-16">
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <div className="basis-1/3">
            <img
              src="/profilepicture.jpeg"
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div className="basis-2/3 flex flex-col gap-4">
            <h3 className="text-2xl text-left font-bold primary-text uppercase">
              Welcome
            </h3>
            <p className="text-xl text-light text-justify">
              Howdy! I'm Eren Erisgen—a Software Engineer and Computer Scientist
              living in the beautiful state of Minnesota. I proudly graduated
              from the University of Minnesota with a B.S. in Computer Science
              and currently work as an Associate Software Engineer at{" "}
              <a href="https://thebernardgroup.com/">The Bernard Group</a>.
              During my time at university, I explored everything from
              graduate-level algorithms to software engineering and event-driven
              architecture. I love working with Java, C, and JavaScript. On this
              site, you'll find some of my favorite projects and links to the
              source code—they showcase what I've learned both in school and in
              industry.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold primary-text uppercase items-center pt-24 pb-8">
            Featured Projects
          </h3>
          <div className="gap-8 grid-cols-1 md:grid-cols-2 grid">
            {projectsList.map(({ id, name, description }) => (
              <Link
                key={id}
                to={`/projects/${id}`}
                className="mx-auto rounded-3xl bg-tertiary p-8 gap-8 flex flex-col text-light transition-all cursor-pointer duration-300 group hover:scale-105 hover:bg-[var(--clr-info-a0)]"
              >
                <div className="text-left flex flex-col gap-4">
                  <span className="text-4xl code-font font-bold transition-colors leading-6 uppercase">
                    {name}
                  </span>
                  <span className="text-base">{description}</span>
                </div>
                <button className="rounded-xl text-base gap-2 flex justify-between transition-colors duration-300">
                  <span className="uppercase whitespace-nowrap">
                    View Project
                  </span>
                  <ArrowRightIcon className="inline secondary-text w-5 h-5 mr-4 group-hover:mr-0 transition-all duration-300" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
