import "./style.css";
import CloseBtn from "../../../assets/closeBtn.svg";
import { useState } from "react";
import Button from "../../Button";
import InputErrorMessage from "../../InputErrorMessage";
import InputMask from "react-input-mask";
import SafraLogo from "../../../assets/logo-safra.svg";
import { useHistory } from "react-router-dom";

const defaultValuesForm = {
  cnpj: "",
  senha: "",
};

function LoginModal({ setOpenModalLogin }) {
  const history = useHistory();

  const [form, setForm] = useState(defaultValuesForm);
  const [noPasswordError, setNoPasswordError] = useState(false);
  const [noCNPJError, setNoCNPJError] = useState(false);
  const [invalidCNPJ, setInvalidCNPJ] = useState(false);

  function handleCloseModal() {
    setOpenModalLogin(false);
  }

  function handleChange(target) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function handleSubmitForm() {
    let error = false;
    if (!form.cnpj) {
      setNoCNPJError(true);
      error = true;
    } else {
      setNoCNPJError(false);
    }

    if (!form.senha) {
      setNoPasswordError(true);
      error = true;
    } else {
      setNoPasswordError(false);
    }

    if (form.cnpj.includes("_")) {
      setInvalidCNPJ(true);
      error = true;
    } else {
      setInvalidCNPJ(false);
    }

    if (error) return;
    console.log("foi");
    history.push("/academy");
    setOpenModalLogin(false);
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="login-title">
          <img src={SafraLogo} alt="Safra Logo" />
          <img
            src={CloseBtn}
            alt="Close button"
            className="close-icon"
            onClick={handleCloseModal}
          />
        </div>
        <form className="inputs">
          <div className="input-container">
            <label htmlFor="CPF">CNPJ*</label>
            <InputMask
              mask="99.999.999/9999-99"
              type="text"
              placeholder="Digite o CNPJ"
              name="cnpj"
              value={form.cnpj}
              onChange={(e) => handleChange(e.target)}
              className={noCNPJError || invalidCNPJ ? "error" : ""}
            />
            {noCNPJError && <InputErrorMessage />}
            {invalidCNPJ && (
              <InputErrorMessage>CNPJ inválido</InputErrorMessage>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="Senha">Senha*</label>
            <input
              type="password"
              placeholder="Digite a senha"
              name="senha"
              value={form.senha}
              onChange={(e) => handleChange(e.target)}
              className={noPasswordError ? "error" : ""}
            />
            {noPasswordError && <InputErrorMessage />}
          </div>
        </form>
        <div className="buttons">
          <Button color="blue" action={handleSubmitForm}>
            Login
          </Button>
        </div>
        <div className="new-acc">
          <p>Ainda não é cliente?</p>
          <a href="#">
            <strong>Abra sua conta</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
