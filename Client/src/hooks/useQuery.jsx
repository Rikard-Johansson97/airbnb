import { useState, useEffect } from "react";

export function useQuery(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`http://localhost:3000${url}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return [data, loading];
}
