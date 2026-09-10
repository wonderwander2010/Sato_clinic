(() => {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let activeIndex = 0;
  window.setInterval(() => {
    slides[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('is-active');
  }, 5000);
})();

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const groups = [
    '.hours',
    '.news',
    '.greeting',
    '.services',
    '.about',
    '.staff',
    '.access'
  ];

  if (reduceMotion) return;

  groups.forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) section.classList.add('is-reveal');
  });

  document.querySelectorAll('.service-card, .staff-card').forEach((card) => {
    card.classList.add('is-reveal');
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.is-reveal').forEach((element) => observer.observe(element));
})();
