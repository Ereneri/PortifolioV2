import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";
import projectsList from "../data/projects.json";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsList.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen max-w-[1100px] mx-auto py-8 px-4">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-6xl font-extrabold text-light">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-xl primary-text hover:underline flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-[1100px] mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        <button
          onClick={() => navigate("/projects")}
          className="text-xl primary-text hover:underline flex items-center gap-2 w-fit transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Back to Projects
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 flex-wrap items-center">
            {project.githubUrl && (
              <button
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="cursor-pointer bg-secondary text-light px-4 py-2 rounded-xl font-semibold transition-all uppercase hover:bg-[var(--clr-info-a0)] text-sm flex items-center gap-2"
              >
                <img src="/github-mark-white.svg" className="w-4 h-4"/>
                Github
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-opacity-80 text-light px-6 py-3 rounded-xl font-semibold transition-all uppercase"
              >
                View Live Demo
              </a>
            )}
            <div>
              <span className="text-md text-light">
                Last Updated: <strong>{project.updatedAt}</strong>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <img
              src={`/${project.image}`}
              alt={`${project.name} Screenshot`}
              className="w-20 h-20 object-cover rounded-xl mr-6"
            />
            <h1 className="md:text-7xl text-4xl font-extrabold text-light code-font uppercase text-left">
              {project.name}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary px-2 py-1 text-sm rounded-lg text-light bg-tertiary cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <p className="md:text-lg text-light leading-relaxed text-left">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
