import PageLayout from "../components/PageLayout";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "PESCADOR",
    description:
      "A dashboard with weather and water information for anglers and hunters.",
    tags: ["NODE", "GRAPHQL", "NEXT.JS", "AWS CDK"],
    href: "https://pescador.io",
  },
  {
    title: "FIPS API",
    description:
      "A REST API for retrieving Federal Information Processing System county codes.",
    tags: ["NODE", "REST API", "NEXT.JS", "SERVERLESS FRAMEWORK"],
    href: "https://fips.codes",
  },
];

export default function Work() {
  return (
    <PageLayout>
      <div className="flex flex-col mt-16 md:mt-0 w-full max-w-xl">
        <header className="border-b-2 border-black pb-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">WORK</h1>
        </header>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.href}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </PageLayout>
  );
}
