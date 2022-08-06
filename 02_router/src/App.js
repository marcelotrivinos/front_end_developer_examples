import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { Page } from "./pages/Page";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="page_:id" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
