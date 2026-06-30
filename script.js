/*==================================================
KHUSHI MARBLES AND TILES
PREMIUM SCRIPT
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

/*=========================================
NAVBAR SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

if (window.scrollY > 80) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

});

/*=========================================
ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav ul li a");

function activeMenu() {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 180;

const sectionHeight = section.offsetHeight;

if (window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

}

window.addEventListener("scroll", activeMenu);

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

const target = document.querySelector(this.getAttribute("href"));

if (target) {

e.preventDefault();

target.scrollIntoView({

behavior: "smooth",

block: "start"

});

}

});

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(

".stat-card,.about-image,.about-content,.why-card,.category-card,.collection-card,.showroom-content,.showroom-image,.process-card,.testimonial-card,.faq-item,.info-card,.contact-form,.cta-box"

);

const revealAnimation = () => {

revealItems.forEach(item => {

const top = item.getBoundingClientRect().top;

if (top < window.innerHeight - 120) {

item.style.opacity = "1";

item.style.transform = "translateY(0)";

}

});

};

revealItems.forEach(item => {

item.style.opacity = "0";

item.style.transform = "translateY(70px)";

item.style.transition = ".8s ease";

});

revealAnimation();

window.addEventListener("scroll", revealAnimation);

/*=========================================
COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

function runCounter() {

counters.forEach(counter => {

const original = counter.innerText;

const target = parseInt(original.replace(/\D/g, ""));

let count = 0;

const speed = Math.ceil(target / 120);

function update() {

count += speed;

if (count < target) {

counter.innerText = count + "+";

requestAnimationFrame(update);

} else {

counter.innerText = original;

}

}

update();

});

}

window.addEventListener("scroll", () => {

const stats = document.querySelector(".stats");

if (!stats) return;

if (window.scrollY > stats.offsetTop - 350 && !started) {

runCounter();

started = true;

}

});

}); /*==================================================
KHUSHI MARBLES AND TILES
PREMIUM SCRIPT
PART 2
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

/*=========================================
FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");
const answer = item.querySelector(".faq-answer");
const icon = question.querySelector("span");

question.addEventListener("click", () => {

faqItems.forEach(other => {

if (other !== item) {

other.querySelector(".faq-answer").style.display = "none";
other.querySelector(".faq-question span").textContent = "+";

}

});

if (answer.style.display === "block") {

answer.style.display = "none";
icon.textContent = "+";

} else {

answer.style.display = "block";
icon.textContent = "−";

}

});

});

/*=========================================
CONTACT FORM
=========================================*/

const form = document.querySelector(".contact-form form");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

const name =
form.querySelector('input[type="text"]').value;

const phone =
form.querySelector('input[type="tel"]').value;

const product =
form.querySelector("select").value;

const message =
form.querySelector("textarea").value;

const text =

`Hello Khushi Marbles And Tiles,

Name : ${name}

Phone : ${phone}

Requirement : ${product}

Message :

${message}`;

window.open(

"https://wa.me/918087003749?text=" +

encodeURIComponent(text),

"_blank"

);

form.reset();

});

}

/*=========================================
SCROLL TO TOP
=========================================*/

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

scrollBtn.classList.add("show");

} else {

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

}

/*=========================================
FLOATING BUTTON HOVER
=========================================*/

const floatingButtons = document.querySelectorAll(

".call-float,.whatsapp-float"

);

floatingButtons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform = "scale(1.12)";

});

button.addEventListener("mouseleave", () => {

button.style.transform = "scale(1)";

});

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.nav-btn"

);

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transition = ".35s";

});

});

/*=========================================
IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

if (heroImage) {

heroImage.style.transform =
`translateY(${window.pageYOffset * 0.08}px)`;

}

});

/*=========================================
SHOWROOM IMAGE EFFECT
=========================================*/

const showroomImage = document.querySelector(".showroom-image img");

window.addEventListener("mousemove", () => {

if (showroomImage) {

showroomImage.style.transition = ".5s";

}

});

/*=========================================
PRELOADER PLACEHOLDER
=========================================*/

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

/*=========================================
END
=========================================*/

});
