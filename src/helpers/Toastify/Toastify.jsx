import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deniedToast from "../../assets/deniedToast.svg";

export default function DeniedToastify(text) {
  return toast.success(text, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { color: "#AE1100", backgroundColor: "#F2D6D0", fontSize: "1rem" },
    icon: <img src={deniedToast} alt="" />,
  });
}
