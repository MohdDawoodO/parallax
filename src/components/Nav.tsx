import { useState } from "react";
import nextIcon from "../assets/next.svg";
import "../styles/nav.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
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
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && <h1>view next example</h1>}
      <img src={nextIcon} />
    </nav>
  );
}
