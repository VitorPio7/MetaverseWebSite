import Head from "../components/FirstPage/Head";
import "../App.css";
import { useChangeIcon } from "../hooks/useChangeIcon";
import { useConsumeData } from "../hooks/useConsumeData";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag2Datas/referencesData";
import articleData from "./Pag2Datas/articleData";
import Footer from "../components/FirstPage/Footer";
export default function Pag2() {
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
