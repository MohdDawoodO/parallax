import { useEffect } from "react";
import "../styles/home.css";
import useParallax from "./useParallax";

export default function Home() {
  useEffect(() => {
    scrollTo(0, 0);
    const controller = useParallax();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <section data-parallax="-40" className="section one">
        <h1 data-parallax="-10">
          I tried to do parallax without any libraries
        </h1>
      </section>
      <section className="section two">
        <h1 data-parallax="20">And I think I succeeded</h1>
      </section>
    </main>
  );
}
