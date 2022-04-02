import "./style.css";

export default function Button({ children, action, color, classes }) {
  function handleClick(event) {
    event.preventDefault();
    action(event);
  }
  return (
    <button
      className={`${color ? color : "main-btn"} ${classes ? classes : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
