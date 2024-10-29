import Head from "../components/Head";
import { useState } from "react";

export default function Pag1() {
  function changeValue() {
    setIcon((prevValue) => !prevValue);
  }
  let [firstIcon, setIcon] = useState(true);
  return (
    <>
      <Head
        image={firstIcon ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={firstIcon}
      />
      <div className="container"></div>
    </>
  );
}
