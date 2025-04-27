import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { UseAuthContext } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { CreateQuestionsPage } from "./pages/CreateQustionsPage";

function App() {
  const { user, userLoading } = UseAuthContext();
  document.documentElement.setAttribute("data-theme", "light");

  if (userLoading) return null;
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
        <Route path="/create" element={<CreateQuizPage />} />

        <Route path="/create/:quizId" element={!user ? <Navigate to={"/login"} /> : <CreateQuestionsPage />} />

        <Route path="/welcome" element={<LandingPage />} />

        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
