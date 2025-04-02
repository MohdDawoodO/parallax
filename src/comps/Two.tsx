import two1 from "../two-svgs/two-1.svg";
import two2 from "../two-svgs/two-2.svg";
import two3 from "../two-svgs/two-3.svg";
import two4 from "../two-svgs/two-4.svg";
import two5 from "../two-svgs/two-5.svg";
import two6 from "../two-svgs/two-6.svg";
import two7 from "../two-svgs/two-7.svg";
import sun from "../two-svgs/two-sun.svg";
import clouds from "../two-svgs/two-clouds.svg";
import twobg from "../two-svgs/two-bg.svg";

export default function Two() {
  return (
    <main>
      <section className="section">
        <img data-parallax="100" className={`image image-7`} src={two7} />;
        <img data-parallax="81" className={`image image-6`} src={two6} />;
        <img data-parallax="68" className={`image image-5`} src={two5} />;
        <img data-parallax="54" className={`image image-4`} src={two4} />;
        <img data-parallax="41" className={`image image-3`} src={two3} />;
        <img data-parallax="30" className={`image image-2`} src={two2} />;
        <img data-parallax="13" className={`image image-1`} src={two1} />;
        <img data-parallax="5" className={`image image-8`} src={clouds} />;
        <img className={`image image-9`} src={sun} />;
        <img className={`image image-10`} src={twobg} />;
      </section>
      <section className="special">
        <h1>Content</h1>
      </section>
    </main>
  );
}
