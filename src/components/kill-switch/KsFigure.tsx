import { ReactNode } from "react";

interface KsFigureProps {
  caption?: ReactNode;
  children?: ReactNode;
  placeholder?: string;
}

export function KsFigure({ caption, children, placeholder }: KsFigureProps) {
  return (
    <div className="ks-figure">
      <figure>
        {children || (
          <div className="ks-figure-placeholder">
            <span className="ks-figure-placeholder-label">
              {placeholder || "Image — 16:9 · full column width"}
            </span>
          </div>
        )}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}
