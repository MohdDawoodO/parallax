import nextIcon from "../assets/next.svg";
import "../styles/nav.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const paths = ["/", "/one", "/two", "/three"];

  function nextExample() {
    const currentPath = paths.indexOf(pathname);
    const nextPath = paths[(currentPath + 1) % 4];
    navigate(nextPath);
  }

  return (
    <nav
      onClick={nextExample}
      style={{
        borderRadius: 1000,
        border: "2px solid white",
      }}
    >
      <h1>next example</h1>
      <img src={nextIcon} />
    </nav>
  );
}
