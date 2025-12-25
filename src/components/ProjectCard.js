import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function ProjectCard({ id, name, description }) {
  return (
    <Link
      to={`/projects/${id}`}
      className="mx-auto rounded-3xl bg-tertiary p-8 gap-8 flex flex-col text-light transition-all cursor-pointer duration-300 group hover:scale-105 hover:bg-[var(--clr-info-a0)] justify-between"
    >
      <div className="text-left flex flex-col gap-4">
        <span className="text-4xl code-font font-bold transition-colors uppercase">
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
  );
}

export default ProjectCard;
