import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type SectionLinkProps = {
  label: string;
  href: string;
  className?: string;
  tone?: "default" | "light";
};

export function SectionLink({ label, href, className = "", tone = "default" }: SectionLinkProps) {
  return (
    <a className={`section-link section-link-${tone} ${className}`} href={href}>
      <span className="section-link-label">{label}</span>
      <span className="section-link-fill" aria-hidden="true" />
      <span className="section-link-icon" aria-hidden="true">
        <ArrowRight size={16} weight="bold" />
      </span>
    </a>
  );
}
