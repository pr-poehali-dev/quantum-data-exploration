import { useEffect } from "react";

interface HelmetProps {
  children?: React.ReactNode;
}

export function Helmet({ children }: HelmetProps) {
  useEffect(() => {
    if (!children) return;
    const items = Array.isArray(children) ? children : [children];
    items.forEach((child) => {
      if (!child || typeof child !== "object" || !("type" in child)) return;
      const el = child as React.ReactElement<Record<string, string>>;
      if (el.type === "title") {
        document.title = el.props.children ?? "";
      } else if (el.type === "meta" && el.props.name === "description") {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement("meta");
          (meta as HTMLMetaElement).name = "description";
          document.head.appendChild(meta);
        }
        (meta as HTMLMetaElement).content = el.props.content ?? "";
      }
    });
  });
  return null;
}

export function HelmetProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
