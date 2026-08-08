// =====================================================
// CONTACT FORM SCRIPT
// =====================================================



const bookingForm = document.getElementById("bookingForm");



if(bookingForm){


bookingForm.addEventListener("submit", function(e){


e.preventDefault();



let name = document.querySelector("[name='name']").value;

let phone = document.querySelector("[name='phone']").value;

let service = document.querySelector("[name='service']").value;

let date = document.querySelector("[name='date']").value;

let message = document.querySelector("[name='message']").value;



// PHONE VALIDATION


if(phone.length !== 10){

alert("कृपया सही Mobile Number डालें");

return;

}




// WHATSAPP MESSAGE


let whatsappText =

`Hello Gopal Music,

Name: ${name}

Mobile: ${phone}

Service: ${service}

Booking Date: ${date}

Message:
${message}

Thank You`;





let whatsappURL =

"https://wa.me/919999999999?text="

+

encodeURIComponent(whatsappText);





window.open(
whatsappURL,
"_blank"
);



bookingForm.reset();



});



}









// =====================================================
// FAQ ACCORDION
// =====================================================



const faqButtons = document.querySelectorAll(".faq-question");



faqButtons.forEach(button=>{


button.addEventListener("click",()=>{



let answer = button.nextElementSibling;



answer.classList.toggle("active");



let symbol = button.querySelector("span");



if(answer.classList.contains("active")){

symbol.innerHTML="-";

}

else{

symbol.innerHTML="+";

}



});



});










// =====================================================
// DISABLE OLD DATES
// =====================================================



let dateInput = document.querySelector(
"input[type='date']"
);



if(dateInput){


let today = new Date()
.toISOString()
.split("T")[0];


dateInput.setAttribute(
"min",
today
);


}










// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================



const revealElements =
document.querySelectorAll(
".contact-card,.social-card,.detail-box"
);



window.addEventListener(
"scroll",
()=>{


revealElements.forEach(item=>{


let position =
item.getBoundingClientRect()
.top;



if(position < window.innerHeight - 100){


item.style.opacity="1";

item.style.transform="translateY(0)";


}



});


});





revealElements.forEach(item=>{


item.style.opacity="0";

item.style.transform=
"translateY(40px)";


item.style.transition=
"all .6s ease";


});



// menu button //

const menu = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

menu.onclick = function () {
    nav.classList.toggle("active");
    menu.innerHTML = nav.classList.contains("active") ? "✕" : "☰";
};

document.querySelectorAll("#navMenu a").forEach(link=>{
    link.onclick=()=>{
        nav.classList.remove("active");
        menu.innerHTML="☰";
    }
});
