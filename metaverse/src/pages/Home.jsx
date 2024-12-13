import "../App.css";
import Main from "../components/FirstPage/Main";
import myData from "../myData";
import { useConsumeData } from "../hooks/useConsumeData";
import { useOutletContext } from "react-router-dom";
function Home() {
  let { value } = useOutletContext();
  let data = useConsumeData(myData);

  return (
    <div className="container">
      <Main myStily={value} myData={data} />
    </div>
  );
}

export default Home;
