import { ReactNode } from "react";
import { KillSwitchLike } from "./KillSwitchLike";

interface PostCardProps {
  date: string;
  tags: string[];
  title: string;
  excerpt: string;
  href?: string;
  likes?: number;
}

export function PostCard({ date, tags, title, excerpt, href = "#", likes = 0 }: PostCardProps) {
  const dateParts = date.split("\n");

  return (
    <div className="ks-post-card-wrapper">
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
      <div className="ks-post-card-actions">
        <KillSwitchLike initialCount={likes} />
      </div>
    </div>
  );
}

export function CardStack({ children }: { children: ReactNode }) {
  return <div className="ks-card-stack">{children}</div>;
}
