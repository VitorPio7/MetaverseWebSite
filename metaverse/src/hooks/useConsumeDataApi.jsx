import { useEffect, useState } from "react";

export function useConsumeDataApi(link) {
  let [data, setData] = useState([]);
  console.log("Api chamada");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error("Error fetching data from API");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error("It's not working your request.", error);
      }
    };
    fetchData();
  }, []);
  return data;
}
