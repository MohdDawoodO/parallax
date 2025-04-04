import two1 from "../assets/two-svgs/two-1.svg";
import two2 from "../assets/two-svgs/two-2.svg";
import two3 from "../assets/two-svgs/two-3.svg";
import two4 from "../assets/two-svgs/two-4.svg";
import two5 from "../assets/two-svgs/two-5.svg";
import two6 from "../assets/two-svgs/two-6.svg";
import two7 from "../assets/two-svgs/two-7.svg";
import sun from "../assets/two-svgs/two-sun.svg";
import clouds from "../assets/two-svgs/two-clouds.svg";
import twobg from "../assets/two-svgs/two-bg.svg";
import "../styles/two.css";
import useParallax from "./useParallax";
import { useEffect } from "react";

export default function Two() {
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
        <img data-parallax="100" className={`image image-three-7`} src={two7} />
        ;
        <img data-parallax="81" className={`image image-three-6`} src={two6} />;
        <img data-parallax="68" className={`image image-three-5`} src={two5} />;
        <img data-parallax="54" className={`image image-three-4`} src={two4} />;
        <img data-parallax="41" className={`image image-three-3`} src={two3} />;
        <img data-parallax="30" className={`image image-three-2`} src={two2} />;
        <img data-parallax="13" className={`image image-three-1`} src={two1} />;
        <img data-parallax="5" className={`image image-three-8`} src={clouds} />
        ;
        <img className={`image image-three-9`} src={sun} />;
        <img className={`image image-three-10`} src={twobg} />;
      </section>
      <section className="special special-three">
        <h1>Content</h1>
      </section>
    </main>
  );
}
