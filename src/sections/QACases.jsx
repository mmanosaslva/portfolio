import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { qaCases } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const QACases = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".qa-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section
      id="qa"
      ref={sectionRef}
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="QA Testing & Evaluations"
          sub="🔍 Quality Assurance Deliverables"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {qaCases.map((qa) => (
            <div
              key={qa.title}
              className="qa-card card-border rounded-xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {qa.title}
                  </h3>
                  <p className="text-blue-50 text-sm italic mt-1">
                    {qa.subtitle}
                  </p>
                </div>
              </div>

              <div className="ml-16">
                <span className="inline-block bg-green-500/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Entregable completado
                </span>
                <p className="text-white-50 text-lg leading-relaxed">
                  {qa.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QACases;
