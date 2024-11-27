import Head from "../components/FirstPage/Head";
import "../App.css";
import { useConsumeData } from "../hooks/useConsumeData";
import { useChangeIcon } from "../hooks/useChangeIcon";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag4Datas/referencesData";
import articleData from "./Pag4Datas/articleData";
import Footer from "../components/FirstPage/Footer";

export default function Pag3() {
  let [value, changeValue] = useChangeIcon(true);
  let data = useConsumeData(articleData);
  let data2 = useConsumeData(referencesData);
  return (
    <>
      <Head
        image={value ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={value}
      />
      <div className={value ? "lightMode2" : "darkMode2"}>
        <MainNews myStily={value} myArticleData={data} />
        <div className="myPrefooter">
          <PreFooter myData={data2} />
        </div>
      </div>
      <Footer />
    </>
  );
}
