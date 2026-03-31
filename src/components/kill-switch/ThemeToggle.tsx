import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button className="ks-theme-toggle" onClick={toggle} aria-label="Toggle light/dark theme">
      <span className={`ks-theme-toggle-opt ${theme === "light" ? "active" : ""}`}>Light</span>
      <span className={`ks-theme-toggle-opt ${theme === "dark" ? "active" : ""}`}>Dark</span>
    </button>
  );
}
