export default function Intro({ img, title }) {
  return (
    <div className="containerIntro">
      <a href="/" className="myreturn">
        <img src="imgFourPage/arrow.svg" alt="arrow" />
        <p>Return</p>
      </a>
      <p className="mytitleMagazine">{title}</p>
      <img className="newsImg" src={img} alt="oi" />
    </div>
  );
}
