/* eslint-disable jsx-a11y/anchor-is-valid */

import CloseBtn from "../../../assets/closeBtn.svg";
import SafraOpenBankingLogo from "../../../assets/Safra_Open_Banking_Azul.png";
import Button from "../../Button";
import "./style.css";

function OpenBankingModal({ setOpenSOBModal }) {
  function handleCloseModal() {
    setOpenSOBModal(false);
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="register-title">
          <img src={SafraOpenBankingLogo} alt="Safra OB Logo" />
          <img
            src={CloseBtn}
            alt="Close button"
            className="close-icon"
            onClick={handleCloseModal}
          />
        </div>
        <p>
          Agora que você já terminou o módulo introdutório
          <br /> ao open banking, você gostaria de se tornar
          <br /> correntista e trazer seus dados de outros bancos?
        </p>

        <div className="buttons">
          <Button color="yellow" action={handleCloseModal}>
            Abra sua conta
          </Button>
          <Button color="blue" action={handleCloseModal}>
            Importar dados
          </Button>
        </div>
        <div className="sub-buttons">
          <p>Para não correntistas</p>
          <p>Para correntistas</p>
        </div>

        <p>
          <strong>
            Vamos utilizar essas informações para te oferecer
            <br /> soluções mais aderentes ao seu perfil,
            <br /> de forma segura e sigilosa.
          </strong>
        </p>
      </div>
    </div>
  );
}

export default OpenBankingModal;
