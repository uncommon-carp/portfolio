import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  isLast?: boolean;
}

export default function ProjectCard({ title, description, tags, href, isLast = false }: ProjectCardProps) {
  return (
    <article className={`py-8 ${!isLast ? "border-b-2 border-black" : ""}`}>
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live`}
            className="hover:opacity-60 transition-opacity"
          >
            <FiExternalLink size={20} strokeWidth={1.5} />
          </a>
        )}
      </div>
      <p className="text-justify hyphens-auto mb-4 max-w-xl">{description}</p>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <span key={tag} className="tracking-widest text-sm">{tag}</span>
        ))}
      </div>
    </article>
  );
}
