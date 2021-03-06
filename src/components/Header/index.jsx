import "./styles.css";
import { useHistory } from "react-router-dom";
import whiteLogo from "../../assets/logo-safra-white.svg";
import logoutIcon from "../../assets/logoutIcon.svg";
import messageIcon from "../../assets/messageIcon.svg";
import lockIcon from "../../assets/lockIcon.svg";
import cogIcon from "../../assets/cog.svg";

export default function Header() {
  const history = useHistory();

  return (
    <header className="global-header">
      <div className="global-header-content">
        <div className="header-title-container">
          <img src={whiteLogo} alt="Safra Logo" />
        </div>
        <div className="header-name">
          <div className="client-details">
            <p className="name">Carlos Alberto</p>
          </div>
          <div className="client-icons">
            <img src={cogIcon} alt="Cog Icon" />
            <img src={lockIcon} alt="Lock Icon" />
            <img src={messageIcon} alt="Message Icon" />
          </div>
          <div className="logout" onClick={() => history.push("/")}>
            <img src={logoutIcon} alt="Logout Icon" />
            <p>Sair</p>
          </div>
        </div>
      </div>
    </header>
  );
}
