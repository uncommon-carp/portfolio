import PageLayout from "../components/PageLayout";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/uncommon-carp", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/corysorel", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/sorel.fly", label: "Instagram" },
];

export default function Contact() {
  return (
    <PageLayout>
      <div className="flex flex-col mt-16 md:mt-0">
        <header className="border-b-2 border-black pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">CONTACT</h1>
        </header>

        <a
          href="mailto:csorel.creative@gmail.com"
          className="text-xl md:text-2xl tracking-wide hover:underline mb-12"
        >
          csorel.creative@gmail.com
        </a>

        <div className="flex gap-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hover:opacity-60 transition-opacity"
            >
              <Icon size={28} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
