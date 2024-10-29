import { NavLink } from "react-router-dom";
export default function Card({
  image,
  title,
  date,
  text,
  reference,
  city,
  id,
}) {
  return (
    <div className="containerCard" style={{ backgroudColor: "black" }}>
      {id % 2 === 0 ? (
        <div className="myImage">
          <img src={image} alt="my_image" className="imgCard" />
        </div>
      ) : null}
      <div className="contentDiv">
        <h1>{title}</h1>
        <div className="myInfo">
          <p>{date}</p>
          <img className="locationSymbol" src="location.svg" alt="myMainPage" />
          <h4>{city}</h4>
        </div>
        <p className="myMainText">{text}</p>
        <p className="referenceLink">
          <NavLink to="/myPag1">Click Here to see</NavLink>
        </p>
      </div>
      {id % 2 !== 0 ? (
        <div className="myImage">
          <img src={image} alt="my_image" className="imgCard" />
        </div>
      ) : null}
    </div>
  );
}
