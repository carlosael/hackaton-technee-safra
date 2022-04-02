import "./styles.css";
import whiteLogo from "../../assets/logo-safra-white.svg";
import Button from "../../components/Button";
import ModalLogin from "../../components/Modals/Login";

function Home() {
  return (
    <div className="container-home">
      <header className="global-header">
        <div className="global-header-content">
          <div className="header-title-container">
            <img src={whiteLogo} alt="Safra Logo" />
          </div>
          <div className="main-btns">
            <Button>Login</Button>
            <Button color="yellow">Abra sua conta</Button>
          </div>
        </div>
      </header>
      <h1>HOME</h1>
      <ModalLogin></ModalLogin>
    </div>
  );
}

export default Home;
