import "./App.css";
import FeedBackButton from "./components/FeedBackButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() { 

  return (
    <div className="">
      <Router>
        <Header />
        <FeedBackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
