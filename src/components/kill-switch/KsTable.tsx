import { ReactNode } from "react";

interface KsTableProps {
  children: ReactNode;
}

export function KsTable({ children }: KsTableProps) {
  return (
    <div className="ks-table-wrap">
      <table>{children}</table>
    </div>
  );
}

export function TdMono({ children }: { children: ReactNode }) {
  return <span className="ks-td-mono">{children}</span>;
}

export function TdChip({ children, dim }: { children: ReactNode; dim?: boolean }) {
  return <span className="ks-td-chip" style={dim ? { opacity: 0.4 } : undefined}>{children}</span>;
}
