// CSS
import styles from "./Post.module.css";
// Hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.postContainer}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.body}>{post.body}</p>
          <h3>Usuário: {post.createdBy}</h3>
          <h2>Este post trata sobre: </h2>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag} className={styles.createdBy}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
