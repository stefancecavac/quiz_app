import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { UseAuthContext } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { CreateQuestionsPage } from "./pages/CreateQustionsPage";
import { CreateQuizLayout } from "./components/layout/CreateQuizLayout";
import { StartQuizPage } from "./pages/StartQuizPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { ShopPage } from "./pages/ShopPage";

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
        <Route
          path="/create-quiz"
          element={
            <CreateQuizLayout>
              <CreateQuizPage />
            </CreateQuizLayout>
          }
        />

        <Route
          path="/create-quiz/:quizId/add-question"
          element={
            !user ? (
              <Navigate to={"/login"} />
            ) : (
              <CreateQuizLayout>
                <CreateQuestionsPage />
              </CreateQuizLayout>
            )
          }
        />

        <Route
          path="/leaderboard"
          element={
            !user ? (
              <Navigate to={"/login"} />
            ) : (
              <Layout>
                <LeaderBoardPage />
              </Layout>
            )
          }
        />

        <Route
          path="/shop"
          element={
            !user ? (
              <Navigate to={"/login"} />
            ) : (
              <Layout>
                <ShopPage />
              </Layout>
            )
          }
        />

        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/start" element={<StartQuizPage />} />

        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> : <RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
