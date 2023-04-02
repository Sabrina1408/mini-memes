// CSS
import styles from "./PostDetail.module.css";
// Hook
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.postDetail}>
      <h2>{post.createdBy}</h2>
      <img src={post.image} alt={post.title} />
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.description}>
        <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
            <p className={styles.createdBy} key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn">Ler</Link>
      </div>
    </div>
  );
};

export default PostDetail;
