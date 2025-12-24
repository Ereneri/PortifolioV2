import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { projectsList } from "../data/projects";

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
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Projects
        </button>

        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold text-light code-font uppercase">
            {project.name}
          </h1>

          <div className="bg-tertiary rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold primary-text uppercase mb-4">
                Overview
              </h2>
              <p className="text-xl text-light">{project.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold primary-text uppercase mb-4">
                About This Project
              </h2>
              <p className="text-lg text-light leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold primary-text uppercase mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-lg text-light font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-opacity-80 text-light px-6 py-3 rounded-xl font-semibold transition-all uppercase"
                >
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-opacity-80 text-light px-6 py-3 rounded-xl font-semibold transition-all uppercase"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
