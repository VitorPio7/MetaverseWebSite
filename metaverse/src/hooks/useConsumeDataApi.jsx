import { useEffect, useState } from "react";

export function useConsumeDataApi(link) {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return data;
}
