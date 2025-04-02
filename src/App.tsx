import { useEffect } from "react";
import "./App.css";
import Test from "./comps/Test";
// import One from "./comps/One";
// import Two from "./comps/Two";
// import Three from "./comps/Three";

function App() {
  useEffect(() => {
    const abortController = new AbortController();
    const elements = document.querySelectorAll("[data-parallax]");

    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;

        elements.forEach((element: any) => {
          const speed = Number(element.getAttribute("data-parallax") / 100);
          element.style.transform = `translateY(${-(y * speed)}px)`;
        });
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  return <Test />;
}

export default App;
