import { Layout } from "./components/layout/Layout";

function App() {
  document.documentElement.setAttribute("data-theme", "light");

  return (
    <Layout>
      <p>Hello</p>
    </Layout>
  );
}

export default App;
