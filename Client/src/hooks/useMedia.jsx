import { useState, useEffect } from "react";

export function useMedia(query) {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setIsMatching(mediaQuery.matches);
    const handleQueryChange = () => setIsMatching(mediaQuery.matches);
    mediaQuery.addListener(handleQueryChange);
    return () => mediaQuery.removeListener(handleQueryChange);
  }, [query]);

  return isMatching;
}
