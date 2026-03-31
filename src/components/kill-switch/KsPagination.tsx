interface KsPaginationProps {
  current: number;
  total: number;
  onPageChange?: (page: number) => void;
}

export function KsPagination({ current, total, onPageChange }: KsPaginationProps) {
  const pages: (number | "ellipsis")[] = [];

  for (let i = 1; i <= total; i++) {
    if (i <= 3 || i === total || Math.abs(i - current) <= 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  const handleClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange?.(page);
  };

  return (
    <nav className="ks-pagination" aria-label="Page navigation">
      <a
        className="ks-page-btn"
        href="#"
        aria-disabled={current === 1 ? "true" : undefined}
        aria-label="Previous page"
        onClick={current > 1 ? handleClick(current - 1) : (e) => e.preventDefault()}
      >
        ← Prev
      </a>
      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="ks-page-ellipsis">…</span>
        ) : (
          <a
            key={p}
            className={`ks-page-btn${p === current ? " active" : ""}`}
            href="#"
            aria-current={p === current ? "page" : undefined}
            onClick={handleClick(p)}
          >
            {p}
          </a>
        )
      )}
      <a
        className="ks-page-btn"
        href="#"
        aria-disabled={current === total ? "true" : undefined}
        aria-label="Next page"
        onClick={current < total ? handleClick(current + 1) : (e) => e.preventDefault()}
      >
        Next →
      </a>
    </nav>
  );
}
