interface HelmetProps {
  children?: React.ReactNode;
}

// Page title/meta/JSON-LD now live in head() of each route (src/routes/*),
// so they are rendered on the server. Kept as a no-op so pages compile unchanged.
export function Helmet(_props: HelmetProps) {
  return null;
}

export function HelmetProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
