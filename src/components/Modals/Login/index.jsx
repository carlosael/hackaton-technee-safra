import "./style.css";
import CloseBtn from "../../../assets/closeBtn.svg";
import { useState } from "react";
import Button from "../../Button";
import InputErrorMessage from "../../InputErrorMessage";
import SafraLogo from "../../../assets/logo-safra.svg";
import { useHistory } from "react-router-dom";

const defaultValuesForm = {
  email: "",
  senha: "",
};

function LoginModal({ setOpenModalLogin }) {
  const history = useHistory();

  const [form, setForm] = useState(defaultValuesForm);
  const [noPasswordError, setNoPasswordError] = useState(false);
  const [noEmailError, setNoEmailError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  function handleCloseModal() {
    setOpenModalLogin(false);
  }

  function handleChange(target) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function handleSubmitForm() {
    let error = false;
    if (!form.email) {
      setNoEmailError(true);
      error = true;
    } else {
      setNoEmailError(false);
    }

    if (!form.senha) {
      setNoPasswordError(true);
      error = true;
    } else {
      setNoPasswordError(false);
    }

    const emailValidation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValidation.test(form.email)) {
      setNoEmailError(false);
      setInvalidEmail(false);
    } else {
      setNoEmailError(false);
      setInvalidEmail(true);
      error = true;
      return;
    }

    if (error) return;

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
            <label htmlFor="email">E-mail*</label>
            <input
              type="text"
              placeholder="Digite o email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e.target)}
              className={noEmailError || invalidEmail ? "error" : ""}
            />
            {noEmailError && <InputErrorMessage />}
            {invalidEmail && (
              <InputErrorMessage>E-mail inválido</InputErrorMessage>
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
          <p>Ainda não tem cadastro?</p>
          <a href="#">
            <strong>Faça a sua conta</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
