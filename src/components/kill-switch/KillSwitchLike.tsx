import { useState } from "react";

interface KillSwitchLikeProps {
  initialCount?: number;
}

export function KillSwitchLike({ initialCount = 0 }: KillSwitchLikeProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [pressing, setPressing] = useState(false);

  const toggle = () => {
    setLiked((prev) => {
      setCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <button
      className={`ks-kill-like ${liked ? "ks-kill-like--active" : ""} ${pressing ? "ks-kill-like--pressing" : ""}`}
      onClick={toggle}
      onPointerDown={() => setPressing(true)}
      onPointerUp={() => setPressing(false)}
      onPointerLeave={() => setPressing(false)}
      aria-label={liked ? "Unlike this switch" : "Like this switch"}
      type="button"
    >
      {/* Button housing */}
      <span className="ks-kill-like-housing">
        {/* Safety cover */}
        <span className="ks-kill-like-cover" />
        {/* The button */}
        <span className="ks-kill-like-btn" />
        {/* Hazard stripes */}
        <span className="ks-kill-like-stripes" />
      </span>
      <span className="ks-kill-like-count">{count}</span>
    </button>
  );
}
