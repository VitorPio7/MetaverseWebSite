export default function PreFooter({ myData }) {
  return (
    <div className="allMyReferences">
      <h3>References</h3>
      <ul className="myListRef">
        {myData.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </div>
  );
}
