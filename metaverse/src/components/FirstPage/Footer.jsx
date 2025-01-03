import { NavLink } from "react-router-dom";
export default function Footer() {
  let data = new Date().getFullYear();
  return (
    <footer>
      <div className="containerRedes">
        <a href="https://github.com/VitorPio7" target="blank">
          <img src="footerImage/discord.svg" alt="" />
        </a>
        <a href="https://github.com/VitorPio7" target="blank">
          <img src="footerImage/linkedin.svg" alt="" />
        </a>
      </div>
      <p>copyright © {data} Metaverse</p>
      <div className="containerFooter">
        <p>Privacy policy</p>
        <p>Security</p>
        <NavLink to="/about">
          <p>About us</p>
        </NavLink>
        <p>Manage cookies</p>
      </div>
    </footer>
  );
}
