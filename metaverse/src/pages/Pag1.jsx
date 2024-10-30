import Head from "../components/FirstPage/Head";
import "../App.css";
import { useState } from "react";
import MainNews from "../components/SecondPage/MainNews";

export default function Pag1() {
  let [firstIcon, setIcon] = useState(true);

  function changeValue() {
    setIcon((prevValue) => !prevValue);
  }
  return (
    <>
      <Head
        image={firstIcon ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={firstIcon}
      />
      <MainNews myStily={firstIcon} />
    </>
  );
}
