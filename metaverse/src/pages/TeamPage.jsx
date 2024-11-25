import Footer from "../components/FirstPage/Footer";
import Head from "../components/FirstPage/Head";
import teamData from "./TeamMenbersData/teamData";
import { useState, useEffect } from "react";
import CardIntrodution from "../components/CardIntrodution/CardIntrodution";
import HeadTeam from "../components/TeamPage/HeadTeam";
export default function TeamPage() {
  let [firstIcon, setIcon] = useState(true);
  let [data, setData] = useState();
  function changeValue() {
    setIcon((prevValue) => !prevValue);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(teamData);

  return (
    <>
      <Head
        image={firstIcon ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={firstIcon}
      />
      <div className={firstIcon ? "lightMode2" : "darkMode2"}>
        <HeadTeam title={"Metaverse Team"} />
      </div>
      <div className={firstIcon ? "lightMode2" : "darkMode2"} id="myTeam">
        {teamData.map((el, index) => {
          return (
            <>
              <CardIntrodution
                key={index}
                name={el.name}
                img={"esesese"}
                mydata={data?.[Math.ceil(Math.random() * data?.length)]}
                course={el.course}
                symbol={"openInAnew.svg"}
                ra={el.ra}
              />
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
