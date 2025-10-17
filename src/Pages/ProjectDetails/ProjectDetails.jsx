import React from "react";
import { useParams, Link } from "react-router";
import projectsData from "../../../public/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) return <div>Project not found</div>;

  return (
    <section className="min-h-screen bg-white dark:bg-[#1E2939] px-6 md:px-20 py-16 mt-10 sm:mt-20">
      <div className="flex flex-col items-center mb-12">
        <img
          src={document.documentElement.classList.contains("dark") ? project.logoDark : project.logoLight}
          alt={project.name}
          className="w-50  mb-4"
        />
        <h2 className="text-4xl font-bold text-primary mb-4">{project.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl">
          {project.shortDescription}
        </p>
      </div>

      <div className="bg-[#F8F8F8] dark:bg-[#2B3443] rounded-2xl p-6 shadow-lg max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold text-primary">Main Technology Stack</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {project.technologies.map((tech, idx) => (
            <li key={idx} className="font-bold">{tech}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-primary mt-4">Project Links</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-white bg-primary px-4 py-2 rounded font-bold text-center hover:bg-secondary transition"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-white bg-secondary px-4 py-2 rounded font-bold text-center hover:bg-primary transition"
          >
            GitHub (Client)
          </a>
        </div>

        <h3 className="text-2xl font-semibold text-primary mt-4">Challenges Faced</h3>
        <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>

        <h3 className="text-2xl font-semibold text-primary mt-4">Potential Improvements</h3>
        <p className="text-gray-700 dark:text-gray-300">{project.futureImprovements}</p>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/#projects"
          className="text-primary font-bold hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
