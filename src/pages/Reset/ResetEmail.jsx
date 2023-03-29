// CSS
import styles from './ResetEmail.module.css';
// Hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

const ResetEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Firebase
  const {emailReset, error: authError, loading} = useAuthentication();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email
    }

    const res = await emailReset(user);
    console.log(res);

    !error && (
      <p className={styles.success}>Email enviado com sucesso!</p>
    );
  }

  // Mapear error
  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);


  return (
    <div className={styles.resetEmail}>
      <h1>Informe um email para fazer o reset da senha.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Enviar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default ResetEmail;