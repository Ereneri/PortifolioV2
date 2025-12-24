import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { projectsList } from "../data/projects";

function Projects() {
  return (
    <div className="min-h-screen max-w-[1100px] mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-extrabold text-light">My Projects</h1>
        <p className="text-xl text-light">
          Here are some of my favorite projects that showcase what I've learned
          both in school and in industry.
        </p>

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
  );
}

export default Projects;
