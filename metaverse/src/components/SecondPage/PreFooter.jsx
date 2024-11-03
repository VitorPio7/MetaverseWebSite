export default function PreFooter({ myData }) {
  return (
    <div className="allMyReferences">
      <h3>References</h3>
      <ul className=" ">
        {myData.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
