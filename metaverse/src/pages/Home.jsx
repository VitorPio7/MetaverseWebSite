import "../App.css";
import Head from "../components/FirstPage/Head";
import Main from "../components/FirstPage/Main";
import Footer from "../components/FirstPage/Footer";
import myData from "../myData";
import { useChangeIcon } from "../hooks/useChangeIcon";
import { useConsumeData } from "../hooks/useConsumeData";

function App() {
  let [value, changeValue] = useChangeIcon(true);
  let data = useConsumeData(myData);

  return (
    <div className="container">
      <Head
        image={value ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={value}
      />
      <Main myStily={value} myData={data} />
      <Footer />
    </div>
  );
}

export default App;
