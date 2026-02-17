interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  dark?: boolean;
}

export function StatsBar({ stats, dark = false }: StatsBarProps) {
  return (
    <section className={dark ? "bg-admf-green" : "bg-warm"}>
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 ${
                  dark ? "text-primary" : "text-admf-green"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  dark ? "text-white/60" : "text-muted"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
