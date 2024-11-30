import Image from "next/image";
import { cn } from "@/lib/utils";

interface Image2Props {
  className?: string;
}

export function Image2({ className }: Image2Props) {
  return (
    <Image
      alt="SaaS Dashboard"
      src="/images/RaptorSwap.png"
      width={1000}
      height={698}
      priority
      className={cn("rounded-xl border border-border shadow-lg", className)}
    />
  );
}
