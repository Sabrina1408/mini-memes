import { Link } from "react-router-dom";
// CSS
import styles from "./Search.module.css";
// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
// Components
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q"); // É do URLSearchParams()

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.searchContainer}>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn">
              Voltar
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <PostDetail key={post.id} post={post}></PostDetail>
          ))}
      </div>
    </div>
  );
};

export default Search;
