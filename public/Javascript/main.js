document.addEventListener("DOMContentLoaded", () => {
  // 1. Set up the observer
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible"); // Trigger animation
        obs.unobserve(entry.target);              // Stop watching (runs once)
      }
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the element is visible
  });

  // 2. Attach it to every element with the 'fade-in' class
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});