import "../App.css";
import Head from "../components/FirstPage/Head";
import { useState, useEffect } from "react";
import Main from "../components/FirstPage/Main";
import Footer from "../components/FirstPage/Footer";
import myData from "../myData";

function App() {
  let [firstIcon, setIcon] = useState(true);
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(myData);
  }, []);
  function changeValue() {
    setIcon((prevValue) => !prevValue);
  }
  console.log("todos head:" + todos);
  return (
    <div className="container">
      <Head
        image={firstIcon ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={firstIcon}
      />
      <Main myStily={firstIcon} myData={todos} />
      <Footer />
    </div>
  );
}

export default App;
