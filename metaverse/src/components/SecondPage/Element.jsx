export default function Element({ title, text, list }) {
  let mylist = function (list) {
    return list.map((el, index) => {
      return (
        <ul key={index}>
          <li>{el}</li>
        </ul>
      );
    });
  };
  return (
    <div className="containerElement">
      <h3>{title}</h3>
      <p>{text}</p>
      {list && mylist(list)}
    </div>
  );
}
