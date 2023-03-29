// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        Sobre a NOSSA <span>Rede</span>
      </h1>
      <p>
        Este projeto consiste em uma rede social para os meus amigos feita com React no Front-end e Firebase no Back-end.
      </p>
      <p>Já que é um projeto para portfolio peço que não postem nada mais 18 ou que infrinja alguma lei! Seu post será retirado do ar caso faço.</p>
      <p>
        Sabe quando você quer compartilhar algo com seus amigos, mas não quer que todo mundo na internet veja? É aí que entra uma rede social para amigos privados. É tipo uma plataforma online só para aqueles amigos que você realmente conhece e confia.
      </p>
      <p>
        Nessa rede social, você cria seu perfil com as informações básicas e pode compartilhar coisas como fotos, textos e o que mais quiser.
      </p>
      <p>
        Se você está se perguntando se suas informações de login são seguras, saiba que estão. Este site utiliza o banco de dados do Google e eu apenas tenho acesso ao seu e-mail e posts. Você pode vir compartilhar suas ideias. Confia!
      </p>
      <Link to="/posts/create" className="btn">Criar post</Link>
    </div>
  );
};

export default About;
