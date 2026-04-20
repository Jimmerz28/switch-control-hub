import { ReactNode } from "react";

interface PostCardProps {
  date: string;
  tags: string[];
  title: string;
  excerpt: string;
  href?: string;
}

export function PostCard({ date, tags, title, excerpt, href = "#" }: PostCardProps) {
  const dateParts = date.split("\n");

  return (
    <a className="ks-post-card" href={href}>
      <div className="ks-post-card-date">
        {dateParts.map((part, i) => (
          <span key={i}>
            {part}
            {i < dateParts.length - 1 && <br />}
          </span>
        ))}
      </div>
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
