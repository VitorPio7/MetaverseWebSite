import Footer from "../components/FirstPage/Footer";
import Head from "../components/FirstPage/Head";
import teamData from "./TeamMenbersData/teamData";
import { useConsumeData } from "../hooks/useConsumeData";
import { useChangeIcon } from "../hooks/useChangeIcon";
import { useConsumeDataApi } from "../hooks/useConsumeDataApi";
import CardIntrodution from "../components/CardIntrodution/CardIntrodution";
import HeadTeam from "../components/TeamPage/HeadTeam";

export default function TeamPage() {
  let data = useConsumeDataApi("https://rickandmortyapi.com/api/character");
  let data2 = useConsumeData(teamData);
  let [value, changeValue] = useChangeIcon(true);

  return (
    <>
      <Head
        image={value ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={value}
      />
      <div className={value ? "lightMode2" : "darkMode2"}>
        <HeadTeam title={"Metaverse Team"} />
      </div>
      <div className={value ? "lightMode2" : "darkMode2"} id="myTeam">
        {data2.map((el, index) => {
          return (
            <>
              <CardIntrodution
                key={index}
                mydata={data?.[Math.ceil(Math.random() * data?.length)]}
                name={el.name}
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
