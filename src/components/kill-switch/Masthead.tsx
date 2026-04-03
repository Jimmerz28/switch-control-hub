import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/kill-switch-logo.png";

interface MastheadProps {
  links?: { label: string; href: string }[];
}

export function Masthead({ links }: MastheadProps) {
  return (
    <header className="ks-masthead">
      <a href="/" className="ks-masthead-logo" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={logo} alt="Kill Switch logo" style={{ height: 44, width: 44, objectFit: "contain" }} />
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
