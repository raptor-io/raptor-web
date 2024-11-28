interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 border-t border-border px-6 py-8 lg:border-t ${className ?? ""}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
