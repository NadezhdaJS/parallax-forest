window.addEventListener("scroll", function () {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

//для плавной прокрутки обязательно нужна обертка wrapper

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
