import { ReactNode } from "react";

interface CodeBlockProps {
  language?: string;
  children: ReactNode;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="ks-code-block">
      {language && <span className="ks-code-lang">{language}</span>}
      <pre>{children}</pre>
    </div>
  );
}

/* Syntax span helpers */
export const Kw = ({ children }: { children: ReactNode }) => <span className="kw">{children}</span>;
export const Str = ({ children }: { children: ReactNode }) => <span className="str">{children}</span>;
export const Num = ({ children }: { children: ReactNode }) => <span className="num">{children}</span>;
export const Fn = ({ children }: { children: ReactNode }) => <span className="fn">{children}</span>;
export const Cm = ({ children }: { children: ReactNode }) => <span className="cm">{children}</span>;
