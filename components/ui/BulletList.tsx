import type { ReactNode, LiHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BulletListProps = {
  children: ReactNode;
  className?: string;
};

type BulletListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export function BulletList({ children, className }: BulletListProps) {
  return (
    <ul role="list" className={cn("list-none space-y-1.5", className)}>
      {children}
    </ul>
  );
}

export function BulletListItem({ children, className, ...props }: BulletListItemProps) {
  return (
    <li
      className={cn(
        "relative pl-5 before:absolute before:left-0 before:top-2 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[var(--color-accent)]",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}
