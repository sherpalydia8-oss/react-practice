import { Routes, Route } from "react-router-dom";
import Users from "./Components/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;