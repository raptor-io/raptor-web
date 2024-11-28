import { FeatureCard } from "./feature-card";
export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Build Fast and Stay Flexible
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        On-Chain Acceleration and User-Friendly{" "}
      </p>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon="Frame"
          title="Visual Builder"
          description="Edit HTML, Tailwind & React components visually."
          className="lg:border-l"
        />
        <FeatureCard
          icon="Gauge"
          title="Ease of use"
          description="No new mental models to learn. It feels like magic."
        />
        <FeatureCard
          icon="Download"
          title="Code Export"
          description="Export your website to a Next.js & Tailwind app."
        />
        <FeatureCard
          icon="Globe"
          title="No lock-in"
          description="Customize without limitations and host anywhere."
        />
        <FeatureCard
          icon="Sparkles"
          title="Modern tech stack"
          description="Works with Next.js, Tailwind and Shadcn UI."
          className="lg:border-l lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureCard
          icon="LayoutDashboard"
          title="Pre-made templates"
          description="Get started quickly with ready templates and sections."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureCard
          icon="Palette"
          title="AI Theme Generation"
          description="Generate beautiful themes and color palettes with AI."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureCard
          icon="CodeXml"
          title="Built for developers"
          description="Reweb is built by developers for developers."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
      </div>
    </section>
  );
}
