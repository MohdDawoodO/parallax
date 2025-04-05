Only works in React (JSX/TSX) 😢

Make a file called `useParallax.jsx` or `useParallax.tsx` paste this code into it:

```
export default function useParallax() {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const elements = document.querySelectorAll("[data-parallax]");

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;

      elements.forEach((element: any) => {
        const speed = Number(element.getAttribute("data-parallax"))/100;
        element.style.transform = `translateY(${-(y * speed)}px)`;
      });
    },
    { signal }
  );

  return abortController;
}

```

Then, add this code to your global CSS file:

```
[data-parallax] {
will-change: transform;
}

```

Import the useParallax function into the component you want to use parallax effect and add this code:

```
useEffect(() => {
    const controller = useParallax();

    return () => {
      controller.abort();
    };
  }, []);

```

Finally, add `data-parallax="speed"` to the element where you want to adjust the speed,
The speed should be a number, for example, '50' means 50%.

Example:

```
<div data-parallax="50">content</div>

```

This project contains some examples, so you can try out how it works. 😃

NOTE: Don't run the `useParallax` function in your root component, as it is always rendered.
If you run this function in the root component, you will have to execute it everytime the pathname changes,
which will cause multiple scroll event listeners to be added, slowing down the website.

If you have an idea on how to fix this without using any libraries, feel free to fork the code. 😀
