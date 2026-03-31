interface KsFooterProps {
  links?: { label: string; href: string }[];
}

export function KsFooter({ links }: KsFooterProps) {
  return (
    <footer className="ks-footer">
      <span className="ks-footer-text">© {new Date().getFullYear()} kill//switch</span>
      {links && (
        <nav className="ks-footer-links" aria-label="Footer navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
      )}
    </footer>
  );
}
