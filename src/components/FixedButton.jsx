// CSS
import styles from "./FixedButton.module.css";
// IMG
import img from "../assets/img/up-icon.png";
// React-scroll
import { animateScroll as scroll } from 'react-scroll';

const FixedButton = () => {
  return (
    <div className={styles.fixedButton}>
      <button onClick={() => scroll.scrollToTop()}><img src={img} alt="Ícone de subir" /></button>
    </div>
  );
};

export default FixedButton;
