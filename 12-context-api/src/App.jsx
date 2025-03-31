import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/a" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
