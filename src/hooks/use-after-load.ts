import { useEffect, useState } from "react";

// true once the window "load" event has fired: lets slow third-party
// decorative images start loading without delaying the page load itself.
export function useAfterLoad() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return loaded;
}
