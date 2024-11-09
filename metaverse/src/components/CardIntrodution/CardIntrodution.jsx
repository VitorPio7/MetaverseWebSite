export default function CardIntrodution(props) {
  console.log(props.mydata);
  return (
    <div className="worker">
      <img src={props.mydata?.image} className="arrowImg" alt="person image" />
      <p className="nameWorker">{props.name}</p>
      <p className="course">Ra: {props.ra}</p>
      <p className="course">{props.course}</p>
      <a href="" className="moreInfo">
        <img src={props.symbol} alt="symbol" />
      </a>
    </div>
  );
}
