export default function useParallax() {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const elements = document.querySelectorAll("[data-parallax]");

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;

      elements.forEach((element: any) => {
        const speed = Number(element.getAttribute("data-parallax")) / 100;
        element.style.transform = `translateY(${-(y * speed)}px)`;
      });
    },
    { signal }
  );

  return abortController;
}
