// ===============================
// WHATSAPP BOOKING SYSTEM
// ===============================


document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();


    // Get Form Values

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("city").value.trim();
    let type = document.getElementById("type").value;
    let delivery = document.getElementById("delivery").value;
    let script = document.getElementById("script").value.trim();



    // Validation

    if(
        name === "" ||
        phone === "" ||
        city === "" ||
        type === "" ||
        script === ""
    ){

        alert("कृपया सभी जरूरी जानकारी भरें");

        return;

    }



    if(phone.length !== 10){

        alert("कृपया सही मोबाइल नंबर डालें");

        return;

    }



    // Button Loading

    let button = document.querySelector(".book-btn");


    button.innerHTML =
    `<i class="fa-solid fa-spinner fa-spin"></i> भेजा जा रहा है...`;


    button.disabled = true;



    // Your WhatsApp Number

    let whatsappNumber = "919336771353";



    // Message

    let message = 
`
📢 *नई Announcement Booking*

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

धन्यवाद 🙏
`;



    let whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);



    setTimeout(()=>{


        window.open(
            whatsappURL,
            "_blank"
        );


        button.innerHTML =
        `<i class="fa-brands fa-whatsapp"></i> Booking करें`;


        button.disabled=false;


    },800);



});





// ===============================
// ONLY NUMBER INPUT
// ===============================


let phoneInput = document.getElementById("phone");


phoneInput.addEventListener("input",function(){


    this.value =
    this.value.replace(/[^0-9]/g,'');


});






// ===============================
// INPUT ANIMATION
// ===============================


let inputs = document.querySelectorAll(
".input-group input, .input-group textarea"
);


inputs.forEach(input=>{


    input.addEventListener("focus",()=>{

        input.parentElement.classList.add("active");

    });


    input.addEventListener("blur",()=>{


        if(input.value===""){

            input.parentElement.classList.remove("active");

        }


    });


});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});