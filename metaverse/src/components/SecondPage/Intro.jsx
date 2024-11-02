export default function Intro({ img, title }) {
  return (
    <div className="containerIntro">
      <a href="/" className="return">
        <img src="ImgSecondPage/doubleArrow.svg" alt="arrow" />
        <p>Return</p>
      </a>
      <h1>{title}</h1>
      <img src={img} alt="oi" />
    </div>
  );
}
