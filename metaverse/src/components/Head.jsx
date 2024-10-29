export default function Head({ image, event }) {
  return (
    <header>
      <div className="simbol_icon">
        <img className="infinity_icon" src="/vite.svg" alt="Metaverse icon" />
        <h1>Metaverse</h1>
      </div>
      <button className="ChangeMyButton" onClick={event}>
        {" "}
        <img className="sum_icon" src={image} alt="sun icon" />
      </button>
    </header>
  );
}
