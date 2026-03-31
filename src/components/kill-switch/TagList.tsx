interface TagListProps {
  tags: { label: string; href?: string }[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="ks-tag-row">
      {tags.map((tag) => (
        <a key={tag.label} className="ks-tag" href={tag.href || "#"}>
          {tag.label}
        </a>
      ))}
    </div>
  );
}
