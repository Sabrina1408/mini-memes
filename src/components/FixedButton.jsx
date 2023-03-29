// CSS
import styles from "./FixedButton.module.css";
// IMG
import img from "../assets/img/up-icon.png";
// React Router
import { Link } from "react-router-dom";

const FixedButton = () => {
  return (
    <div className={styles.fixedButton}>
      <Link to="/"><img src={img} alt="Ícone de subir" /></Link>
    </div>
  );
};

export default FixedButton;
