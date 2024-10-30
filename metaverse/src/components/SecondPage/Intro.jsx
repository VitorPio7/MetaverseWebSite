export default function Intro({ img, title }) {
  return (
    <div className="containerIntro">
      <a href="/">
        <p>👈 Return</p>
      </a>
      <h1>{title}</h1>
      <img src={img} alt="oi" />
    </div>
  );
}
