// filepath: d:\myportfolio\src\app\components\Projects.tsx
import { projects } from '@/lib/data/projects';

type Project = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  demo?: string;
  github?: string;
};

export default function Projects() {
  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project: Project, idx: number) => (
          <div
            key={idx}
            className="bg-neutral-900/60 backdrop-blur rounded-2xl shadow-xl border border-neutral-800 p-6 flex flex-col hover:shadow-blue-400/40 transition-all duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover border border-blue-800/30"
              />
            )}
            <h3 className="text-xl font-bold text-blue-200 mb-2">{project.title}</h3>
            <p className="text-neutral-300 mb-4">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-800/40 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-auto flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-sm shadow hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all duration-300 border border-blue-400/40"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg border border-blue-400 text-blue-300 font-semibold text-sm hover:bg-blue-900/30 hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}