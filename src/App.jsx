import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Landing from "../Pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/map" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
