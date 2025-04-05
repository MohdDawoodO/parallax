import one1 from "../assets/one-svgs/one-1.svg";
import one2 from "../assets/one-svgs/one-2.svg";
import one3 from "../assets/one-svgs/one-3.svg";
import one4 from "../assets/one-svgs/one-4.svg";
import one5 from "../assets/one-svgs/one-5.svg";
import one6 from "../assets/one-svgs/one-6.svg";
import one7 from "../assets/one-svgs/one-7.svg";
import one8 from "../assets/one-svgs/one-8.svg";
import one9 from "../assets/one-svgs/one-9.svg";
import one10 from "../assets/one-svgs/one-10.svg";
import "../styles/one.css";
import { useEffect } from "react";
import useParallax from "./useParallax";

export default function One() {
  useEffect(() => {
    scrollTo(0, 0);
    const controller = useParallax();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <section className="section">
        <img data-parallax="50" className={`image image-two-1`} src={one1} />
        <img className={`image abs image-two-2`} src={one2} />
        <img data-parallax="80" className={`image image-two-3`} src={one3} />
        <img data-parallax="60" className={`image image-two-4`} src={one4} />
        <img data-parallax="40" className={`image image-two-5`} src={one5} />
        <img data-parallax="20" className={`image image-two-6`} src={one6} />
        <img data-parallax="5" className={`image image-two-7`} src={one7} />
        <img data-parallax="3" className={`image image-two-8`} src={one8} />
        <img data-parallax="1" className={`image image-two-9`} src={one9} />
        <img className={`image image-two-10`} src={one10} />;
      </section>
      <section className="special special-two">
        <h1>Content</h1>
      </section>
    </main>
  );
}
