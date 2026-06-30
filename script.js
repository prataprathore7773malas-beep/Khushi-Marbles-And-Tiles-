/*========================================
KHUSHI MARBLE AND TILES
script.js
========================================*/



/*========================================
NAVBAR SCROLL
========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/*========================================
ACTIVE MENU
========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



/*========================================
SMOOTH SCROLL
========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/*========================================
COUNTER
========================================*/

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounter(){

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText.replace(/\D/g,""));

        let count = 0;

        const increment = Math.ceil(target / 100);

        function update(){

            count += increment;

            if(count < target){

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        }

        update();

    });

}

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    if(window.scrollY > stats.offsetTop - 300 && !counterStarted){

        startCounter();

        counterStarted = true;

    }

});



/*========================================
SCROLL REVEAL
========================================*/

const revealElements = document.querySelectorAll(

".about-wrapper,.why-card,.category-card,.collection-item,.showroom-wrapper,.process-card,.testimonial-card,.faq-item,.contact-wrapper"

);

const reveal = ()=>{

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();



/*========================================
FAQ
========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const btn = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){

                i.querySelector(".faq-answer").style.display="none";

                i.querySelector(".faq-question span").innerText="+";

            }

        });

        if(answer.style.display==="block"){

            answer.style.display="none";

            btn.querySelector("span").innerText="+";

        }else{

            answer.style.display="block";

            btn.querySelector("span").innerText="-";

        }

    });

});



/*========================================
CONTACT FORM
========================================*/

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]').value;

const phone = form.querySelector('input[type="tel"]').value;

const requirement = form.querySelector("select").value;

const message = form.querySelector("textarea").value;

const whatsappMessage =

`Hello Khushi Marble And Tiles,

Name : ${name}

Phone : ${phone}

Requirement : ${requirement}

Message :

${message}`;

window.open(

`https://wa.me/918087003749?text=${encodeURIComponent(whatsappMessage)}`,

"_blank"

);

form.reset();

});

}



/*========================================
SCROLL TOP
========================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.opacity="1";

scrollBtn.style.visibility="visible";

}else{

scrollBtn.style.opacity="0";

scrollBtn.style.visibility="hidden";

}

});



/*========================================
PRELOADER PLACEHOLDER
========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
