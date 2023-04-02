// CSS
import styles from "./Perfil.module.css";
// React Router
import { Link } from "react-router-dom";
// Hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Perfil = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Posts do usuário
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.perfil}>
      <h1>Perfil</h1>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noPosts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.postHeader}>
            <span>Postagens</span>
            <span>Ações</span>
          </div>
          <div className={styles.postContent}>
            {posts &&
              posts.map((post) => (
                <div key={post.id} className={styles.postRow}>
                  <img src={post.image} alt={post.title} />
                  <div className={styles.divBtn}>
                    <Link to={`/posts/${post.id}`} className="btn">
                      Ver
                    </Link>
                    <Link to={`/posts/edit/${post.id}`} className="btn">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteDocument(post.id)}
                      className="btn btnDanger"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Perfil;
