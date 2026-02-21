import Link from "next/link";

interface ProgrammeCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
  href: string;
}

export function ProgrammeCard({
  icon,
  badge,
  title,
  description,
  href,
}: ProgrammeCardProps) {
  return (
    <Link href={href} className="card-light p-6 md:p-8 hover:shadow-lg transition-shadow group block">
      <div className="text-4xl mb-4">{icon}</div>
      <span className="badge badge-teal mb-4">{badge}</span>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
