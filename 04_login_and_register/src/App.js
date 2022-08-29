import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import { useToken } from "./hooks/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token || !(Object.keys(token).length > 0)) {
    return <Login setToken={setToken[0]} />;
  }

  const deleteToken = () => {
    setToken[1]("token");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage deleteToken={deleteToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
