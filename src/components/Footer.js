import "../assets/css/footer.css";

import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragraph">
        Made with <AiFillHeart/> by 
         <a
          className="footer__link"
          href="https://www.linkedin.com/in/william-ancizar-toro-benavides"
          target="_blanck"
        >
          {" "}
          William Toro
        </a>
      </p>
    </footer>
  );
}

export default Footer;
