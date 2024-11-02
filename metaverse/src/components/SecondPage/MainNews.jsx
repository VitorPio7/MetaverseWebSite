import Intro from "./Intro";

import Element from "./Element";
export default function MainNews(props) {
  console.log("hello:" + props.myArticleData);
  return (
    <>
      <Intro
        title={props.myArticleData[0].introText}
        img={props.myArticleData[0].introImg}
      />
      {props.myArticleData.map((el, index) => {
        return (
          <Element
            key={index}
            title={el.titleElement}
            text={el.bodyElement}
            list={el.myList ? el.myList : null}
          />
        );
      })}
    </>
  );
}
