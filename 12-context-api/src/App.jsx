import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/auth.context";
import { ModalProvider } from "./contexts/modal.context";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/a" element={<PageA />} />
              <Route path="/b" element={<PageB />} />
              <Route path="/c" element={<PageC />} />
            </Route>
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
