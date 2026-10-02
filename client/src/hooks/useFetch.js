import { useEffect, useState } from "react";

const useFetch = (serviceFunc, args) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await serviceFunc(...args);
        setData(response);
      } catch (error) {
        setError("Something went wrong");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [serviceFunc, ...args]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;