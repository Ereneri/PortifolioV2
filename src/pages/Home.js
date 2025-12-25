import projectsList from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col gap-8 md:max-w-[1100px] mx-auto py-8 pt-16 md:px-0 px-4"
    >
      <div className="flex flex-col p-4 gap-4 justify-center items-center">
        <h1 className="md:text-9xl font-extrabold text-light leading-none text-7xl">
          Eren Erisgen
        </h1>
        <h2 className="text-2xl secondary-text font-semibold code-font uppercase">
          Software Engineer && Computer Scientist
        </h2>
      </div>

      <div className="mx-auto md:max-w-full py-16">
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <div className="basis-1/3">
            <img
              src="/profilepicture.jpeg"
              alt="Profile"
              className="md:rounded-full rounded-lg"
            />
          </div>
          <div className="basis-2/3 flex flex-col gap-4">
            <h3 className="text-2xl text-left font-bold primary-text uppercase">
              Welcome
            </h3>
            <p className="md:text-xl text-light md:text-justify text-left">
              Howdy! I'm Eren Erisgen—a Software Engineer and Computer Scientist
              based in beautiful Minnesota. I proudly graduated from the {" "}
              <a
                className="primary-text hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twin-cities.umn.edu/"
              >
                 University of Minnesota
              </a>
              {" "} with a B.S. in Computer Science and
              currently work as an Associate Software Engineer at{" "}
              <a
                className="primary-text hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://thebernardgroup.com/"
              >
                The Bernard Group
              </a>
              . During my time at university, I explored everything from
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
    </div>
  );
}

export default Home;
