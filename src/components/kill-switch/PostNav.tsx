interface PostNavItem {
  title: string;
  href?: string;
}

interface PostNavProps {
  prev?: PostNavItem;
  next?: PostNavItem;
}

export function PostNav({ prev, next }: PostNavProps) {
  return (
    <nav className="ks-post-nav" aria-label="Post navigation">
      {prev ? (
        <a className="ks-post-nav-item" href={prev.href || "#"}>
          <div className="ks-post-nav-dir">
            <span className="ks-post-nav-arrow">←</span> Previous
          </div>
          <div className="ks-post-nav-title">{prev.title}</div>
        </a>
      ) : <span />}
      {next ? (
        <a className="ks-post-nav-item next" href={next.href || "#"}>
          <div className="ks-post-nav-dir">
            Next <span className="ks-post-nav-arrow">→</span>
          </div>
          <div className="ks-post-nav-title">{next.title}</div>
        </a>
      ) : <span />}
    </nav>
  );
}
