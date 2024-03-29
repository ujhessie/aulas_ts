import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";


export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/entrar" element={<Login/>} />
        <Route path="/pagina-inicial/*" element={<Dashboard/>} />

        {/* Rota de fallback para página não encontrada */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
};
