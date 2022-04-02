import "./styles.css";
import whiteLogo from "../../assets/logo-safra-white.svg";
import Button from "../../components/Button";
import ModalLogin from "../../components/Modals/Login";
import MainPhoto from "../../assets/element.JPG";
import { useState } from "react";
import SafraAcademyLogo from "../../assets/SafraAcademyFinal.png";
import AdditionalInfo from "../../assets/complemento.png";

function Home() {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  function handleModalLogin() {
    setOpenModalLogin(true);
  }

  return (
    <div className="container-home">
      <header className="global-header">
        <div className="global-header-content">
          <div className="header-title-container">
            <img src={whiteLogo} alt="Safra Logo" />
          </div>
          <div className="main-btns">
            <Button action={handleModalLogin}>Login</Button>
            <Button color="yellow">Abra sua conta</Button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="first-card">
          <div className="left-card">
            <img src={SafraAcademyLogo} alt="Safra Academy Logo" />
            <strong>
              <h1>
                Plataforma de educação <br /> para empreendedores.
              </h1>
            </strong>
            <p>
              Aqui você encontra todas as informações <br /> relevantes sobre
              como o Open Banking pode <br /> alavancar o seu negócio.
            </p>
          </div>
          <div className="right-card">
            <img src={MainPhoto} alt="Working ppicture" />
          </div>
        </div>
        <div className="second-card">
          <div className="left-text">
            <h1>
              Safra Academy feito para quem quer empreender, <br /> feito para
              você.
            </h1>
            <p>
              O <strong>Safra Academy</strong> é o seu gui virtal de{" "}
              <strong>empreendodorismo</strong> pelo Banco Safra.
            </p>
            <p>
              Aprenda a como tornar o seu negócio maiseficiente e rentável com
              aulas feitas porespacialistas do Banco Safra e parceiros.
            </p>
            <p>
              Um verdadeiro centro de educação para quemquer aprender a
              empreender com quem sabe doassunto.
            </p>
            <img src={AdditionalInfo} alt="Additional information" />
          </div>
          <div className="right-text">
            <h2>Para quem é o Safra Academy?</h2>
            <p>
              Feito especialmente para pequenos e microempresários que desejam
              abrir o seu negócio deforma rápida e com soluções eficientes.
            </p>
            <p>
              A <strong>Safra Academy</strong> oferece cursos sobre como o Open
              Finance é benéfico na hora da escolha deserviços financeiros.
            </p>
            <p>Você é dono dos seus dados. Nós te ajudamos a fazer escolhas.</p>
          </div>
        </div>
      </main>
      {openModalLogin && <ModalLogin setOpenModalLogin={setOpenModalLogin} />}
    </div>
  );
}

export default Home;
