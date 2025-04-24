import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";

function App() {
  document.documentElement.setAttribute("data-theme", "light");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
