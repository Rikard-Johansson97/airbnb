import { useState, useEffect } from "react";

export function useQuery(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url) return setLoading(false);
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`https://airbnb-eta-inky.vercel.app/${url}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return [data, loading];
}
