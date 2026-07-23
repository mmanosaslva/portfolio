import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
            <div className="text-content">
              <div className="badges">
                <span className="bg-yellow-500/20 text-yellow-300 text-sm font-medium px-3 py-1 rounded-full">
                  {projects[0].badge}
                </span>
              </div>
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
              <p className="text-blue-50 text-sm mt-2">
                {projects[0].roles}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {projects[0].tech.map((t) => (
                  <span
                    key={t}
                    className="bg-black-200 text-white-50 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={projects[0].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-50 hover:text-white underline transition-colors"
              >
                View Repository →
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project, idx) => (
              <div
                key={project.title}
                ref={(el) => (cardRefs.current[idx + 1] = el)}
                className="project"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="badges mt-3">
                  <span className="bg-yellow-500/20 text-yellow-300 text-sm font-medium px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>
                <h2>{project.title}</h2>
                <p className="text-white-50 text-sm mt-1">{project.description}</p>
                <p className="text-blue-50 text-xs mt-1">{project.roles}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-black-200 text-white-50 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-50 hover:text-white underline text-sm transition-colors"
                  >
                    Repository →
                  </a>
                  {project.demoNote && (
                    <span className="text-white-50 text-xs italic">
                      {project.demoNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
