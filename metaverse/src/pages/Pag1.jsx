import "../App.css";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag1Datas/referencesData";
import articleData from "./Pag1Datas/articleData";
import { useConsumeData } from "../hooks/useConsumeData";
import { useOutletContext } from "react-router-dom";
export default function Pag1() {
  let { value } = useOutletContext();
  let data = useConsumeData(articleData);
  console.log("pagina 1 renderizou");
  return (
    <>
      <div className={value ? "lightMode2" : "darkMode2"}>
        <MainNews myStily={value} myArticleData={data} />
        <div className="myPrefooter">
          <PreFooter myData={referencesData} />
        </div>
      </div>
    </>
  );
}
