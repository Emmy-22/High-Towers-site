document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-3");
  const elements = section.querySelectorAll("img, h4, p, .now");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add("animate"));
        observer.unobserve(section); // run once only
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});