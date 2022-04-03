import "./style.css";
import LinkedinIcon from "../../assets/icon-linkedin.svg";
import InstagramIcon from "../../assets/instagram-safra.svg";
import YoutubeIcon from "../../assets/Youtube.svg";
import FacebookIcon from "../../assets/icon-facebook.svg";
import TelegramIcon from "../../assets/telegram.svg";
import TwitterIcon from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer>
      <div class="links">
        <div class="logo-nav">
          <ul>
            <li>Serviços</li>
            <li>Relacionamento</li>
            <li>Sobre</li>
            <li>Atendimento</li>
            <li>Investimentos</li>
          </ul>
        </div>
        <div class="ul-social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/safra-banco/?originalSubdomain=br">
                <img src={LinkedinIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bancosafra/?hl=pt-br">
                <img src={InstagramIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC_eA5WnJz2rQ2iJ9cF97adw">
                <img src={YoutubeIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/safrainvestimentos">
                <img src={FacebookIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://t.me/safraconteudo">
                <img src={TelegramIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bancosafra">
                <img src={TwitterIcon} alt="Linkedin Icon"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
