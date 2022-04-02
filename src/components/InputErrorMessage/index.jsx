import "./style.css";

export default function InputErrorMessage({ children }) {
  return (
    <span className="input-error-message corpo-minusculo">
      {children ? children : "Este campo deve ser preenchido"}
    </span>
  );
}
