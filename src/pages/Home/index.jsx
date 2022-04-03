import "./styles.css";
import { useState } from "react";
import whiteLogo from "../../assets/logo-safra-white.svg";
import Button from "../../components/Button";
import ModalLogin from "../../components/Modals/Login";
import MainPhoto from "../../assets/element.JPG";
import SafraOpenBankingLogo from "../../assets/Safra_Open_Banking_Azul.png";
import AdditionalInfo from "../../assets/complemento2.png";

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
            <img src={SafraOpenBankingLogo} alt="Safra Academy Logo" />
            <strong>
              <h1>
                Plataforma de educação
                {" "}
                <br />
                {" "}
                sobre Open Banking.
              </h1>
            </strong>
            <p>
              Visando promover a cultura de dados abertos no
              {" "}
              <br />
              {" "}
              Brasil, o
              Safra te convida a ser protagonista desse
              {" "}
              <br />
              {" "}
              novo jeito de
              estar no controle da sua vida financeira.
            </p>
          </div>
          <div className="right-card">
            <img src={MainPhoto} alt="Working ppicture" />
          </div>
        </div>
        <div className="second-card">
          <div className="left-text">
            <h1>
              Com o Open Banking,
              {" "}
              <br />
              {" "}
              a sua relação com o banco jamais será a
              mesma.
            </h1>
            <p>
              O
              {" "}
              <strong>Safra | Open Banking</strong>
              {" "}
              é o seu guia virtual sobre
              a cultura de dados abertos pelo Banco Safra e como isso vai mudar
              a sua relação com os bancos.
            </p>
            <p>
              Você no controle! Escolha com quem, quando e como compartilhar os
              seus dados financeiros com segurança e praticidade.
            </p>
            <p>
              O Open Banking é a nova era do sistema financeiro, promovendo
              maior concorrência e melhorando aoferta de produtos e serviços.
            </p>
            <img src={AdditionalInfo} alt="Additional information" />
          </div>
          <div className="right-text">
            <h2>Para quem é o Safra | Open Banking?</h2>
            <p>
              Feito para
              {" "}
              <strong>qualquer pessoa</strong>
              {" "}
              que deseja ter mais
              segurança, versatilidade, controle e agilidade com soluções mais
              eficientes.
            </p>
            <p>
              A
              {" "}
              <strong>Safra | Open Banking</strong>
              {" "}
              oferece conteúdos sobre
              como o
              {" "}
              <strong>Open Finance</strong>
              {" "}
              é benéfico na hora da escolha
              de serviços financeiros.
            </p>
            <p>
              Você é dono dos seus dados.
              {" "}
              <br />
              Nós te ajudamos a fazer escolhas.
            </p>
          </div>
        </div>
      </main>
      {openModalLogin && <ModalLogin setOpenModalLogin={setOpenModalLogin} />}
    </div>
  );
}

export default Home;
