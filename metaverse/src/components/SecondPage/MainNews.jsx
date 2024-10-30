import Intro from "./Intro";
import articleData from "../../articleData";
import Element from "./Element";
export default function MainNews({ myStily }) {
  console.log("hello:" + articleData);
  return (
    <div className={myStily ? "lightMode2" : "darkMode2"}>
      <Intro title={articleData[0].introText} img={articleData[0].introImg} />
      {articleData.map((el, index) => {
        return (
          <Element
            key={index}
            title={el.titleElement}
            text={el.bodyElement}
            list={el.myList ? el.myList : null}
          />
        );
      })}
    </div>
  );
}
