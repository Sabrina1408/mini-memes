// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Firebase
import { onAuthStateChanged } from "firebase/auth";
// Css
import "./App.css";
// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
// Context
import { AuthContextProvider } from "./context/AuthContext";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Perfil from "./pages/Perfil/Perfil";
import CreatePost from "./pages/CreatePost/CreatePost";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";
import EditPost from "./pages/EditPost/EditPost";
import ResetEmail from "./pages/Reset/ResetEmail";
import FixedButton from "./components/FixedButton";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  // Lógica pra saber se o user está autenticado
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <FixedButton></FixedButton>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/posts/:id" element={<Post />}></Route>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/reset/email"
                element={!user ? <ResetEmail /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/" />}
              />
              <Route
                path="/perfil"
                element={user ? <Perfil /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
