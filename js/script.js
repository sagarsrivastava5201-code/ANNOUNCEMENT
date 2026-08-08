document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-num");

  counters.forEach(counter => {
    const finalText = counter.textContent; // 30+, 25000+, 10000+
    const target = parseInt(finalText.replace(/\D/g, "")); // sirf number nikalega

    let count = 0;
    counter.textContent = "0";

    const duration = 2000;
    const increment = Math.max(1, Math.ceil(target / (duration / 16)));

    function updateCounter() {
      count += increment;

      if (count >= target) {
        counter.textContent = finalText; // final text wahi jo pehle tha
      } else {
        counter.textContent = count;
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
});





// faq

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
        const btn = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");

        answer.style.maxHeight = "0px";
        answer.style.overflow = "hidden";

        btn.addEventListener("click", () => {
            const isOpen = faq.classList.contains("active");

            // सभी FAQ बंद करो
            faqs.forEach((item) => {
                item.classList.remove("active");
                item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
                item.querySelector(".faq-answer").style.maxHeight = "0px";
            });

            // अगर बंद था तो खोलो
            if (!isOpen) {
                faq.classList.add("active");
                btn.setAttribute("aria-expanded", "true");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});


// navbar selector button on off 
document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const expanded =
            navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute("aria-expanded", !expanded);

        // Hamburger Animation
        navToggle.classList.toggle("open");

    });

});
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");

    });

});