import React, { useEffect, useState } from "react";

export function useConsumeDataApi(link) {
  let [data, setData] = useState([]);
  console.log("Api chamada");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        const result = await response.json();
        if (!ignore) {
          setData(result.results);
        }
      } catch (error) {
        console.err("Error fetching data:", error);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return data;
}
