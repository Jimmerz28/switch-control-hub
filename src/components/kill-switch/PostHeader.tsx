import { ReactNode } from "react";

interface PostHeaderProps {
  tag?: string;
  tagHref?: string;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
}

export function PostHeader({ tag, tagHref = "#", title, subtitle, meta }: PostHeaderProps) {
  return (
    <header className="ks-post-header">
      {tag && <a className="ks-post-header-tag" href={tagHref}>{tag}</a>}
      <h1 className="ks-post-header-title">{title}</h1>
      {subtitle && <p className="ks-post-header-subtitle">{subtitle}</p>}
      {meta && <div className="ks-post-header-meta">{meta}</div>}
    </header>
  );
}
