document.addEventListener('DOMContentLoaded', function() {
    console.log("Mentora");

});

// Stats
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 90; // makin kecil makin cepat

  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    const update = () => {
      if (current < target) {
        current += increment;
        counter.innerText = current;
        setTimeout(update, 20);
      } else {
        counter.innerText = target; // pastikan mentok di target
      }
    };

    update();
  }

  // Observer biar trigger pas kelihatan
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); // jalan sekali aja
      }
    });
  }, { threshold: 0.5 }); // 50% elemen muncul baru jalan

  counters.forEach(counter => {
    observer.observe(counter);
  });
});