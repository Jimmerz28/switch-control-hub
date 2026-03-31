import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm";

interface KsButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

type KsButtonProps = KsButtonBaseProps &
  (
    | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export function KsButton(props: KsButtonProps) {
  const { variant = "primary", size = "default", children, ...rest } = props;
  const cls = [
    "ks-btn",
    `ks-btn-${variant}`,
    size === "sm" ? "ks-btn-sm" : "",
  ].filter(Boolean).join(" ");

  if ("as" in props && props.as === "a") {
    const { as, variant: _v, size: _s, ...aProps } = props as any;
    return <a className={cls} {...aProps}>{children}</a>;
  }

  const { as, variant: _v, size: _s, ...bProps } = rest as any;
  return <button className={cls} {...bProps}>{children}</button>;
}
