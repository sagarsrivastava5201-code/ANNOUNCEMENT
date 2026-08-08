// ===============================
// WHATSAPP BOOKING SYSTEM
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            // Get Form Values
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const city = document.getElementById("city").value.trim();
            const type = document.getElementById("type").value;
            const delivery = document.getElementById("delivery").value;
            const script = document.getElementById("script").value.trim();

            // Validation
            if (
                name === "" ||
                phone === "" ||
                city === "" ||
                type === "" ||
                script === ""
            ) {
                alert("कृपया सभी जरूरी जानकारी भरें");
                return;
            }

            // Mobile validation
            if (!/^[0-9]{10}$/.test(phone)) {
                alert("कृपया सही 10 अंकों का मोबाइल नंबर डालें");
                return;
            }

            // Button
            const button = document.querySelector(".book-btn");

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> भेजा जा रहा है...';

            button.disabled = true;

            // WhatsApp Number
            const whatsappNumber = "919336771353";

            // WhatsApp Message
            const message =
`📢 *नई Announcement Booking*

━━━━━━━━━━━━━━

👤 *नाम*
${name}

📱 *मोबाइल नंबर*
${phone}

📍 *शहर*
${city}

📢 *Announcement Type*
${type}

🎧 *Delivery*
${delivery}

📝 *Message*

${script}

━━━━━━━━━━━━━━

धन्यवाद 🙏`;

            // WhatsApp URL
            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);

            // Open WhatsApp
            setTimeout(function () {

                window.open(whatsappURL, "_blank");

                button.innerHTML =
                    '<i class="fa-brands fa-whatsapp"></i> Booking करें';

                button.disabled = false;

            }, 500);

        });
    }


    // ===============================
    // ONLY NUMBER INPUT
    // ===============================

    const phoneInput = document.getElementById("phone");

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            this.value = this.value.replace(/[^0-9]/g, "");

        });

    }


    // ===============================
    // INPUT ANIMATION
    // ===============================

    const inputs = document.querySelectorAll(
        ".input-group input, .input-group textarea"
    );

    inputs.forEach(function (input) {

        input.addEventListener("focus", function () {
            input.parentElement.classList.add("active");
        });

        input.addEventListener("blur", function () {

            if (input.value === "") {
                input.parentElement.classList.remove("active");
            }

        });

    });


    // ===============================
    // MOBILE MENU
    // ===============================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

    }

});