
export function setupScrollAnimation() {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => observer.observe(element));
  
  return () => {
    animatedElements.forEach((element) => observer.unobserve(element));
  };
}
