import three1 from "../assets/three-svgs/three-1.svg";
import three2 from "../assets/three-svgs/three-2.svg";
import three3 from "../assets/three-svgs/three-3.svg";
import three4 from "../assets/three-svgs/three-4.svg";
import three5 from "../assets/three-svgs/three-5.svg";
import three6 from "../assets/three-svgs/three-6.svg";
import three7 from "../assets/three-svgs/three-7.svg";
import three8 from "../assets/three-svgs/three-8.svg";
import three9 from "../assets/three-svgs/three-9.svg";
import three10 from "../assets/three-svgs/three-10.svg";
import threeBg from "../assets/three-svgs/three-bg.svg";
import "../styles/three.css";
import { useEffect } from "react";
import useParallax from "./useParallax";

export default function Four() {
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
        <img className={`image image-four-10`} src={three10} />;
        <img data-parallax="90" className={`image image-four-9`} src={three9} />
        <img data-parallax="80" className={`image image-four-8`} src={three8} />
        <img data-parallax="70" className={`image image-four-7`} src={three7} />
        <img data-parallax="30" className={`image image-four-6`} src={three6} />
        <img data-parallax="50" className={`image image-four-5`} src={three5} />
        <img data-parallax="40" className={`image image-four-4`} src={three4} />
        <img data-parallax="30" className={`image image-four-3`} src={three3} />
        <img data-parallax="20" className={`image image-four-2`} src={three2} />
        <img data-parallax="10" className={`image image-four-1`} src={three1} />
        <img data-parallax="0" className={`image image-bg`} src={threeBg} />
      </section>
      <section className="special special-four">
        <h1>Content</h1>
      </section>
    </main>
  );
}
