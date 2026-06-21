import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "full";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  maxWidth?: ContainerMaxWidth;
};

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[76rem]",
  xl: "max-w-[90rem]",
  full: "max-w-none",
};

export function Container({ children, className, as: Component = "div", maxWidth = "lg" }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", maxWidthClasses[maxWidth], className)}>
      {children}
    </Component>
  );
}
