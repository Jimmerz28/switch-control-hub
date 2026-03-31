import { ThemeToggle } from "./ThemeToggle";

interface MastheadProps {
  links?: { label: string; href: string }[];
}

export function Masthead({ links }: MastheadProps) {
  return (
    <header className="ks-masthead">
      <a href="/" className="ks-masthead-logo">
        KILL<span className="ks-accent">//</span>SWITCH
      </a>
      <nav className="ks-masthead-nav">
        {links?.map((link) => (
          <a key={link.href} href={link.href} className="ks-masthead-link">
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
