import "../App.css";
import { useConsumeData } from "../hooks/useConsumeData";
import MainNews from "../components/SecondPage/MainNews";
import PreFooter from "../components/SecondPage/PreFooter";
import referencesData from "./Pag4Datas/referencesData";
import articleData from "./Pag4Datas/articleData";
import { useOutletContext } from "react-router-dom";

export default function Pag4() {
  let { value } = useOutletContext();
  let data = useConsumeData(articleData);
  let data2 = useConsumeData(referencesData);
  console.log("pagina 4 renderizou");
  return (
    <>
      <div className={value ? "lightMode2" : "darkMode2"}>
        <MainNews myStily={value} myArticleData={data} />
        <div className="myPrefooter">
          <PreFooter myData={data2} />
        </div>
      </div>
    </>
  );
}
