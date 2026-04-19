import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface KillSwitchLikeProps {
  initialCount?: number;
}

export function KillSwitchLike({ initialCount = 0 }: KillSwitchLikeProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => {
      setCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <button
      className={`ks-upvote ${liked ? "ks-upvote--active" : ""}`}
      onClick={toggle}
      aria-label={liked ? "Remove upvote" : "Upvote this switch"}
      aria-pressed={liked}
      type="button"
    >
      <ArrowUp size={12} strokeWidth={2.5} aria-hidden="true" />
      <span className="ks-upvote-sep">//</span>
      <span className="ks-upvote-count">{count}</span>
    </button>
  );
}
