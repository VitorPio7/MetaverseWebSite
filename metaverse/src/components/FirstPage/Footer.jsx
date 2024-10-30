export default function Footer() {
  let data = new Date().getFullYear();
  return (
    <footer>
      <div className="containerRedes">
        <a href="">
          <img src="footerImage/line.svg" alt="" />
        </a>
        <a href="">
          <img src="footerImage/instagram.svg" alt="" />
        </a>
        <a href="">
          <img src="footerImage/discord.svg" alt="" />
        </a>
        <a href="">
          <img src="footerImage/linkedin.svg" alt="" />
        </a>
        <a href="">
          <img src="footerImage/line.svg" alt="" />
        </a>
      </div>
      <p>copyright © {data} Metaverse</p>
      <div className="containerFooter">
        <p>Privacy policy</p>
        <p>Security</p>
        <p>About us</p>
        <p>Manage cookies</p>
      </div>
    </footer>
  );
}
