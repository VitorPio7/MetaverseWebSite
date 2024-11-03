import Head from "../components/FirstPage/Head";
import "../App.css";
import { useState } from "react";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag2Datas/referencesData";
import articleData from "./Pag2Datas/articleData";
import Footer from "../components/FirstPage/Footer";
export default function Pag2() {
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
      <div className={firstIcon ? "lightMode2" : "darkMode2"}>
        <MainNews myStily={firstIcon} myArticleData={articleData} />
        <div className="myPrefooter">
          <PreFooter myData={referencesData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
