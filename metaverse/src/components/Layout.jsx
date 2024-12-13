import Head from "./FirstPage/Head";
import Footer from "./FirstPage/Footer";
import { Outlet } from "react-router-dom";
import { useChangeIcon } from "../hooks/useChangeIcon";

export default function HeadAndFooter() {
  let [value, changeValue] = useChangeIcon(true);
  console.log("Head e Footer renderizou");

  return (
    <>
      <Head
        image={value ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={value}
      />
      <Outlet context={{ value }} />
      <Footer />
    </>
  );
}
