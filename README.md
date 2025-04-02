Add this code into your javascript or typescript file

```
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
```

Then add this code into your CSS file:

```
[data-parallax] {
  will-change: transform;
}
```

Now add `data-parallax="speed"` to the element you want to use parallax
the speed is a number in '%' value

eg

```
<div data-parallax="50">content<div>
```

This project contain some examples, you can try out how it works 😃
