import Card from "./Card";

export default function Main({ myStily, myData }) {
  console.log("todos main:" + myData);
  return (
    <div className={myStily ? "lightMode" : "darkMode"}>
      {myData.map((el, index) => {
        return (
          <Card
            key={index}
            id={index}
            image={el.image}
            title={el.title}
            date={el.data}
            text={el.text}
            reference={el.place}
            city={el.place}
            url={el.url}
          />
        );
      })}
    </div>
  );
}
