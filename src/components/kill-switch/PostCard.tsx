import { ReactNode } from "react";

interface PostCardProps {
  date: string;
  tags: string[];
  title: string;
  excerpt: string;
  href?: string;
}

export function PostCard({ date, tags, title, excerpt, href = "#" }: PostCardProps) {
  return (
    <a className="ks-post-card" href={href}>
      <div className="ks-post-card-date" dangerouslySetInnerHTML={{ __html: date.replace("\n", "<br/>") }} />
      <div className="ks-post-card-content">
        <div className="ks-post-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="ks-post-card-tag">{tag}</span>
          ))}
        </div>
        <div className="ks-post-card-title">{title}</div>
        <div className="ks-post-card-excerpt">{excerpt}</div>
      </div>
    </a>
  );
}

export function CardStack({ children }: { children: ReactNode }) {
  return <div className="ks-card-stack">{children}</div>;
}
