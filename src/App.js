// Aqui no App.js vamos construir as rotas da nossa aplicação
// Basicamente: Tal componente tem que ser renderizado na rota tal

// Ele vai envolver todas as rotas
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import {MyCompletedTask} from "./pages/MyCompletedTask"
import { TaskPage } from "./pages/TaskPage"
import {NotFound} from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mycompletedtasks" element={<MyCompletedTask />} />
      <Route path="/task/:taskName" element={<TaskPage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>
  )

}

export default App;


