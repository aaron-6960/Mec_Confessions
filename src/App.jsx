import "./App.css";
import Feed from '../src/pages/Feed/Feed'
import Navbar from "./components/Navbar/Navbar";
import AddConfessions from "./pages/AddConfessions/AddConfessions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" Component={Feed} />
          <Route path="/add" Component={AddConfessions} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
