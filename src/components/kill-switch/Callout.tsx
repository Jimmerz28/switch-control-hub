import { ReactNode } from "react";

interface CalloutProps {
  variant?: "note" | "warning" | "tip";
  label?: string;
  children: ReactNode;
}

export function Callout({ variant = "note", label, children }: CalloutProps) {
  const displayLabel = label || variant.charAt(0).toUpperCase() + variant.slice(1);
  const variantClass = variant === "note" ? "" : ` ${variant}`;

  return (
    <div className={`ks-callout${variantClass}`}>
      <span className="ks-callout-label">{displayLabel}</span>
      <div className="ks-callout-body">
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </div>
  );
}
