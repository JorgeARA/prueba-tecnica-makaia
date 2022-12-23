import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import { AuthProvider } from "./authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
