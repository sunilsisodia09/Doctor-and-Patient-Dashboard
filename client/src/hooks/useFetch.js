import { useEffect, useState } from "react";

const useFetch = (apiFunction) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response =
        await apiFunction();

      setData(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useFetch;