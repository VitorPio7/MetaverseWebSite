import Head from "../components/FirstPage/Head";
import "../App.css";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag1Datas/referencesData";
import articleData from "./Pag1Datas/articleData";
import Footer from "../components/FirstPage/Footer";
import { useConsumeData } from "../hooks/useConsumeData";
import { useChangeIcon } from "../hooks/useChangeIcon";
export default function Pag1() {
  let [value, changeValue] = useChangeIcon(true);
  let data = useConsumeData(articleData);

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
          <PreFooter myData={referencesData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
