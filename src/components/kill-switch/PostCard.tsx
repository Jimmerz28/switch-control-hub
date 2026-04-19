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
    <article className="ks-post-card">
      <div className="ks-post-card-rail">
        <div className="ks-post-card-date">
          {dateParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < dateParts.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
      <div className="ks-post-card-content">
        <div className="ks-post-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="ks-post-card-tag">{tag}</span>
          ))}
        </div>
        <a className="ks-post-card-title-link" href={href}>
          <h3 className="ks-post-card-title">{title}</h3>
          <p className="ks-post-card-excerpt">{excerpt}</p>
        </a>
        <div className="ks-post-card-footer">
          <a className="ks-post-card-readmore" href={href}>
            Read switch
          </a>
          <KillSwitchLike initialCount={likes} />
        </div>
      </div>
    </article>
  );
}

export function CardStack({ children }: { children: ReactNode }) {
  return <div className="ks-card-stack">{children}</div>;
}
