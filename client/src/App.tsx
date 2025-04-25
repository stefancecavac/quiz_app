import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { UseAuthContext } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const { user } = UseAuthContext();
  document.documentElement.setAttribute("data-theme", "light");

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <Navigate to={"/login"} />
            ) : (
              <Layout>
                <HomePage />
              </Layout>
            )
          }
        />

        <Route
          path="/create"
          element={
            <Layout>
              <CreateQuizPage />
            </Layout>
          }
        />

        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
