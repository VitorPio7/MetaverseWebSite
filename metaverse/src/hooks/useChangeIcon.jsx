import { useState } from "react";

export function useChangeIcon(initialValue) {
  const [value, setValue] = useState(initialValue);

  function changeValue() {
    setValue((prevValue) => !prevValue);
  }
  return [value, changeValue];
}
