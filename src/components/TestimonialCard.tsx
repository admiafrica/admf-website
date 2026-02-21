import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  programme: string;
  imageUrl?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  programme,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="card-light p-6 md:p-8 flex flex-col">
      <div className="text-primary text-3xl mb-4">&ldquo;</div>
      <p className="text-foreground text-base leading-relaxed mb-6 flex-1">
        {quote}
      </p>
      <div className="border-t border-divider-light pt-4">
        <div className="flex items-center gap-3">
          {imageUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                width={40}
                height={40}
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted">
              {role} &middot; {programme}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
