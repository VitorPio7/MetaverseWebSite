import teamData from "./TeamMenbersData/teamData";
import { useConsumeData } from "../hooks/useConsumeData";
import { useConsumeDataApi } from "../hooks/useConsumeDataApi";
import CardIntrodution from "../components/CardIntrodution/CardIntrodution";
import HeadTeam from "../components/TeamPage/HeadTeam";
import { useOutletContext } from "react-router-dom";

export default function TeamPage() {
  let data = useConsumeDataApi("https://rickandmortyapi.com/api/character");
  let data2 = useConsumeData(teamData);
  let { value } = useOutletContext();
  console.log("Team page renderizou novamente");
  return (
    <>
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
    </>
  );
}
