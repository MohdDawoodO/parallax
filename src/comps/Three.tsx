import three1 from "../three-svgs/three-1.svg";
import three2 from "../three-svgs/three-2.svg";
import three3 from "../three-svgs/three-3.svg";
import three4 from "../three-svgs/three-4.svg";
import three5 from "../three-svgs/three-5.svg";
import three6 from "../three-svgs/three-6.svg";
import three7 from "../three-svgs/three-7.svg";
import three8 from "../three-svgs/three-8.svg";
import three9 from "../three-svgs/three-9.svg";
import three10 from "../three-svgs/three-10.svg";
import threeBg from "../three-svgs/three-bg.svg";

export default function Three() {
  return (
    <main>
      <section className="section">
        <img className={`image image-10`} src={three10} />;
        <img data-parallax="90" className={`image image-9`} src={three9} />;
        <img data-parallax="80" className={`image image-8`} src={three8} />;
        <img data-parallax="70" className={`image image-7`} src={three7} />;
        <img data-parallax="30" className={`image image-6`} src={three6} />;
        <img data-parallax="50" className={`image image-5`} src={three5} />;
        <img data-parallax="40" className={`image image-4`} src={three4} />;
        <img data-parallax="30" className={`image image-3`} src={three3} />;
        <img data-parallax="20" className={`image image-2`} src={three2} />;
        <img data-parallax="10" className={`image image-1`} src={three1} />;
        <img data-parallax="0" className={`image image-bg`} src={threeBg} />;
      </section>
      <section className="special">
        <h1>Content</h1>
      </section>
    </main>
  );
}
