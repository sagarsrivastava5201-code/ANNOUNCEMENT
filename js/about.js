const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = ()=>{
    navLinks.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("h2");

  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/\D/g, ""));
    const suffix = counter.textContent.replace(/[0-9]/g, ""); // + आदि

    let count = 1;
    const duration = 2000; // 2 सेकंड
    const increment = Math.max(1, Math.ceil(target / (duration / 16)));

    counter.textContent = count + suffix;

    const updateCounter = () => {
      count += increment;

      if (count >= target) {
        counter.textContent = target + suffix;
      } else {
        counter.textContent = count + suffix;
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  });
});