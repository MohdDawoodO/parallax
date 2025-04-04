import { Route, Routes } from "react-router-dom";
import "./styles/Global.css";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/one" Component={One} />
        <Route path="/two" Component={Two} />
        <Route path="/three" Component={Three} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
