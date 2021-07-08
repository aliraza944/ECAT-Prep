import { useState, useEffect, useCallback } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();

  const getProducts = useCallback(async () => {
    const res = await axios(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setResponse(res.data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, response };
};
