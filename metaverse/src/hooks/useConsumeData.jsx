import { useEffect, useState } from "react";

export function useConsumeData(myData) {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData(myData);
  }, [myData]);
  return data;
}
