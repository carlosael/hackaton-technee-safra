import "./styles.css";
import Header from "../../components/Header";
import SearchIcon from "../../assets/searchIconBlue.svg";
import Points from "../../assets/points.png";
import Books from "../../assets/books.svg";
import SearchFile from "../../assets/searchFile.svg";
import MoneyIcon from "../../assets/moneyIcon.svg";
import Achievments from "../../assets/achievments.png";
import LockedAchievments from "../../assets/lockedAchievs.png";
import Popup from "../../components/Popup";
import SafraOpenBankingLogo from "../../assets/SOBlogo.png";

function OpenBanking() {
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
        <div className="title">
          <img src={SearchFile} alt="Books icon" />
          <h2>Open Banking</h2>
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
            <img src={LockedAchievments} alt="Achievment progress" />
          </div>
          <div className="right-side">
            <ul>
              <li>1. Nível 1</li>
              <li>2. Nível 2</li>
              <li>3. Nível 3</li>
              <li>4. Nível 4</li>
              <li>5. Nível 5</li>
            </ul>
          </div>
        </div>
        <div className="course">
          <div className="left-side">
            <h1>Módulo Avançado</h1>
            <img src={LockedAchievments} alt="Achievment progress" />
          </div>
          <div className="right-side">
            <ul>
              <li>1. Nível 1</li>
              <li>2. Nível 2</li>
              <li>3. Nível 3</li>
              <li>4. Nível 4</li>
              <li>5. Nível 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="popup">
        <Popup />
      </div>
    </div>
  );
}

export default OpenBanking;
