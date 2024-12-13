import Home from "./pages/Home";
import Pag1 from "./pages/Pag1";
import Pag2 from "./pages/Pag2";
import Pag3 from "./pages/Pag3";
import Pag4 from "./pages/Pag4";
import Pag5 from "./pages/Pag5";
import TeamPage from "./pages/TeamPage";
import Layout from "./components/Layout";
import ErrorPage from "./Error-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="metaverse" element={<Pag1 />} />
          <Route path="challenges" element={<Pag2 />} />
          <Route path="BlockChainIa" element={<Pag3 />} />
          <Route path="BlockMetaverse" element={<Pag4 />} />
          <Route path="metaverseMain" element={<Pag5 />} />
          <Route path="about" element={<TeamPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
