import PageLayout from "../components/PageLayout";
import { FiDownload } from "react-icons/fi";

const workHistory = [
  {
    role: "Software Engineer",
    company: "NinjaOne",
    period: "JUN 2025 — PRESENT",
    description: "Agentic AI for vulnerability, data research, and lead acquisition. Built a CI/CD pipeline for an OVAL scanner, increasing developer speed and confidence.",
  },
  {
    role: "Cloud Software Engineer",
    company: "Allegion (Yonomi)",
    period: "AUG 2022 — APR 2025",
    description: "GraphQL API development in the IOT space. Constructed a single-use signed url service for credential uploads, reduced unit and integration testing times by half by removing Docker in favor of mocks.",
  },
  {
    role: "Instructor Associate",
    company: "General Assembly",
    period: "JAN 2022 — AUG 2022",
    description: "Assisted with and led lessons in the Software Engineering Immersive, focused on Javascript, Python, and React",
  },
];

export default function Resume() {
  return (
    <PageLayout>
      <div className="flex flex-col mt-16 md:mt-0 w-full max-w-xl">
        <header className="border-b-2 border-black pb-4 mb-4 flex items-end justify-between">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">RESUME</h1>
          <a
            href="/Cory Sorel Resume.pdf"
            download
            className="flex items-center gap-2 text-sm tracking-widest hover:opacity-60 transition-opacity"
          >
            <FiDownload size={18} strokeWidth={1.5} />
            PDF
          </a>
        </header>

        {workHistory.map((job, index) => (
          <article
            key={index}
            className={`py-8 ${index < workHistory.length - 1 ? "border-b-2 border-black" : ""}`}
          >
            <p className="text-sm tracking-widest mb-2">{job.period}</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{job.role}</h2>
            <p className="tracking-wide mb-3">{job.company}</p>
            <p className="text-justify hyphens-auto max-w-xl">{job.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
