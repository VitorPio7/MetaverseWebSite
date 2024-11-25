export default function CardIntrodution(props) {
  return (
    <div className="worker">
      <img src={props.mydata?.image} className="arrowImg" alt="person image" />
      <p className="nameWorker">{props.name}</p>
      <p className="course">Ra: {props.ra}</p>
      <a href="" className="moreInfo">
        <img src={props.symbol} alt="symbol" />
      </a>
    </div>
  );
}
