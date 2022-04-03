import "./style.css";

export default function Button({
  children, action, color, classes,
}) {
  function handleClick(event) {
    event.preventDefault();
    action(event);
  }
  return (
    <button
      type="button"
      className={`${color || "main-btn"} ${classes || ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
