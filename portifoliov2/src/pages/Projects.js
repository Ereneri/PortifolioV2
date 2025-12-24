import React from "react";
import projectsList from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="min-h-screen max-w-[1100px] mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        <h1 className="md:text-6xl text-4xl font-extrabold text-light">My Projects</h1>

        <div className="gap-8 grid-cols-1 md:grid-cols-2 grid">
          {projectsList.map(({ id, name, description }) => (
            <ProjectCard
              key={id}
              id={id}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
