import { useState } from "react";
import Achievments from "../../assets/achievments.png";
import Books from "../../assets/books.svg";
import LockedAchievments from "../../assets/lockedAchievs.png";
import MoneyIcon from "../../assets/moneyIcon.svg";
import Points from "../../assets/points.png";
import SearchFile from "../../assets/searchFile.svg";
import SearchIcon from "../../assets/searchIconBlue.svg";
import SafraOpenBankingLogo from "../../assets/SOBlogo.png";
import UnlockedAchiecments from "../../assets/unlockedAchievs.png";
import Header from "../../components/Header";
import OpenBankingModal from "../../components/Modals/OpenBankingModal";
import Popup from "../../components/Popup";
import "./styles.css";
import { toast, ToastContainer } from "react-toastify";
import DeniedToastify from "../../helpers/Toastify/Toastify";
function OpenBanking() {
  const [openSOBModal, setOpenSOBModal] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  function handleOpenModal() {
    if (!authorized) {
      setAuthorized(true);
      setOpenSOBModal(true);
    } else {
      return;
    }
  }

  function handleToast() {
    DeniedToastify(
      "Opa, parece que você ainda não concluiu o módulo intermediário"
    );
    toast.clearWaitingQueue();
  }
  return (
    <div className="container-academy">
      <Header />
      <div className="main-container">
        <div className="search-input">
          <img src={SafraOpenBankingLogo} alt="search icon" />
          <input
            type="text"
            placeholder="O que você está procurando ?"
            className="search-input"
          />
          <img className="search-icon" src={SearchIcon} alt="search icon" />
        </div>
        <div className="points">
          <img src={Points} alt="Actual points" />
        </div>
      </div>
      <div className="container-titles">
        <div className="title">
          <img src={Books} alt="Books icon" />
          <h2>Meu Curso</h2>
        </div>
        <div className="title" onClick={() => setOpenSOBModal(true)}>
          <img src={SearchFile} alt="Books icon" />
          <h2>Importar dados</h2>
        </div>
        <div className="title">
          <img src={MoneyIcon} alt="Books icon" />
          <h2>Opções de crédito</h2>
        </div>
      </div>
      <div className="courses-modules">
        <div className="course">
          <div className="left-side">
            <h1>Módulo Básico</h1>
            <img src={Achievments} alt="Achievment progress" />
          </div>
          <div className="right-side">
            <ul>
              <li>1. Introdução ao Open Banking;</li>
              <li>2. Segurança de dados no Open Banking;</li>
              <li>3. Benefícios do compartilhamento de dados;</li>
            </ul>
          </div>
        </div>
        <div className="course">
          <div className="left-side">
            <h1>Módulo Intermediário</h1>
            <img
              src={authorized ? UnlockedAchiecments : LockedAchievments}
              alt="Achievment progress"
              onClick={handleOpenModal}
            />
          </div>
          <div className="right-side">
            <ul onClick={handleOpenModal}>
              <li>
                1.{" "}
                {authorized
                  ? "O que e quais são as fases de implementação do Open Banking?"
                  : "Nível 1"}
              </li>
              <li>
                2.{" "}
                {authorized
                  ? "Fase 1 - Open Data padronizado das instituições financeiras"
                  : "Nível 1"}
              </li>
              <li>
                3.{" "}
                {authorized
                  ? "Fase 2 - Compartilhamento de dados do consumidor"
                  : "Nível 2"}
              </li>
              <li>
                4.{" "}
                {authorized
                  ? "Fase 3 - Serviços à escolha do consumidor"
                  : "Nível 3"}
              </li>
              <li>
                5.{" "}
                {authorized
                  ? "Fase 4 - Ampliação de dados, produtos e serviços"
                  : "Nível 4"}
              </li>
            </ul>
          </div>
        </div>
        <div className="course">
          <div className="left-side">
            <h1>Módulo Avançado</h1>
            <img
              src={LockedAchievments}
              alt="Achievment progress"
              onClick={handleToast}
            />
          </div>
          <div className="right-side">
            <ul onClick={handleToast}>
              <li>1. Nível 1</li>
              <li>2. Nível 2</li>
              <li>3. Nível 3</li>
              <li>4. Nível 4</li>
              <li>5. Nível 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="services-popup">
        <Popup />
      </div>
      {openSOBModal && <OpenBankingModal setOpenSOBModal={setOpenSOBModal} />}
      <ToastContainer limit={1} />
    </div>
  );
}

export default OpenBanking;
