import one1 from "../one-svgs/one-1.svg";
import one2 from "../one-svgs/one-2.svg";
import one3 from "../one-svgs/one-3.svg";
import one4 from "../one-svgs/one-4.svg";
import one5 from "../one-svgs/one-5.svg";
import one6 from "../one-svgs/one-6.svg";
import one7 from "../one-svgs/one-7.svg";
import one8 from "../one-svgs/one-8.svg";
import one9 from "../one-svgs/one-9.svg";
import one10 from "../one-svgs/one-10.svg";

export default function One() {
  return (
    <main>
      <section className="section">
        <img data-parallax="50" className={`image image-1`} src={one1} />;
        <img data-parallax="100" className={`image image-2`} src={one2} />;
        <img data-parallax="80" className={`image image-3`} src={one3} />;
        <img data-parallax="60" className={`image image-4`} src={one4} />;
        <img data-parallax="40" className={`image image-5`} src={one5} />;
        <img data-parallax="20" className={`image image-6`} src={one6} />;
        <img data-parallax="5" className={`image image-7`} src={one7} />;
        <img data-parallax="3" className={`image image-8`} src={one8} />;
        <img data-parallax="1" className={`image image-9`} src={one9} />;
        <img className={`image image-10`} src={one10} />;
      </section>
      <section className="special">
        <h1>Content</h1>
      </section>
    </main>
  );
}
