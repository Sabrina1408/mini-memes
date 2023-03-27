// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        Sobre o Mini <span>Memes</span>
      </h1>
      <p>
        Este projeto consiste em uma rede social de Memes feita com React no Front-end e Firebase no Back-end.
      </p>
      <p>
        Com uma coleção atualizada regularmente de memes e conteúdo humorístico,
        temos certeza de que você encontrará algo que lhe agrade. Se você está
        procurando um meme para compartilhar com seus amigos, uma imagem
        engraçada para enviar para sua família ou simplesmente um motivo para
        sorrir no meio de um dia difícil, você veio ao lugar certo.
      </p>
      <p>
        Temos uma ampla variedade de categorias para atender a todos os gostos,
        desde memes de animais adoráveis até piadas inteligentes sobre política
        e cultura pop. E, se você tiver um meme ou vídeo engraçado que acha que
        deveria estar no nosso site, não hesite em compartilhá-lo conosco!
      </p>
      <p>
        Então, junte-se a nós nesta jornada para encontrar a alegria nas coisas
        simples da vida. Siga-nos em nossas redes sociais para atualizações
        diárias, e não se esqueça de compartilhar nossos memes com seus amigos e
        familiares. Afinal, a felicidade é ainda melhor quando é compartilhada!
      </p>
      <Link to="/posts/create" className="btn">Criar post</Link>
    </div>
  );
};

export default About;
