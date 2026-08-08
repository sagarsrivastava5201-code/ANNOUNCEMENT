document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll("h2");

    counters.forEach(counter => {

        const text = counter.textContent.trim();
        const target = parseInt(text.replace(/\D/g, ""));
        const suffix = text.includes("+") ? "+" : "";

        let start = 1;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function animate(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth animation
            const current = Math.floor(
                start + (target - start) * progress
            );

            counter.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target + suffix;
            }
        }

        requestAnimationFrame(animate);
    });

});