/*=========================================
KHUSHI MARBLE AND TILES
PREMIUM SCRIPT.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
      NAVBAR SCROLL
    ==========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /*==========================
      SMOOTH SCROLL
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });



    /*==========================
      ACTIVE NAVIGATION
    ==========================*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function activeMenu(){

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.id;

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",activeMenu);



    /*==========================
      SCROLL REVEAL
    ==========================*/

    const revealItems = document.querySelectorAll(

".section-heading,.about-wrapper,.why-card,.category-card,.collection-item,.showroom-wrapper,.process-card,.testimonial-card,.faq-item,.contact-card,.contact-form-box,.cta-wrapper,.footer-top"

    );

    const reveal = ()=>{

        revealItems.forEach(item=>{

            const top = item.getBoundingClientRect().top;

            if(top < window.innerHeight - 100){

                item.style.opacity = "1";

                item.style.transform = "translateY(0)";

            }

        });

    }

    revealItems.forEach(item=>{

        item.style.opacity = "0";

        item.style.transform = "translateY(60px)";

        item.style.transition = ".8s ease";

    });

    reveal();

    window.addEventListener("scroll",reveal);



    /*==========================
      COUNTER
    ==========================*/

    const counters = document.querySelectorAll(".stat-card h2");

    let counterRun = false;

    function runCounter(){

        counters.forEach(counter=>{

            const original = counter.innerText;

            const target = parseInt(original.replace(/\D/g,""));

            let current = 0;

            const step = Math.max(1,Math.ceil(target/120));

            function update(){

                current += step;

                if(current < target){

                    counter.innerText = current + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = original;

                }

            }

            update();

        });

    }

    window.addEventListener("scroll",()=>{

        const stats = document.querySelector(".stats");

        if(!stats) return;

        if(window.scrollY > stats.offsetTop-350 && !counterRun){

            runCounter();

            counterRun = true;

        }

    });



    /*==========================
      FAQ
    ==========================*/

    document.querySelectorAll(".faq-item").forEach(item=>{

        const btn = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        const icon = btn.querySelector("span");

        btn.addEventListener("click",()=>{

            document.querySelectorAll(".faq-item").forEach(other=>{

                if(other!==item){

                    other.querySelector(".faq-answer").style.display="none";

                    other.querySelector("span").textContent="+";

                }

            });

            if(answer.style.display==="block"){

                answer.style.display="none";

                icon.textContent="+";

            }else{

                answer.style.display="block";

                icon.textContent="−";

            }

        });

    });



    /*==========================
      CONTACT FORM
    ==========================*/

    const form = document.querySelector(".contact-form-box form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const name = form.querySelector('input[type="text"]').value;

            const phone = form.querySelector('input[type="tel"]').value;

            const product = form.querySelector("select").value;

            const message = form.querySelector("textarea").value;

            const text =

`Hello Khushi Marble And Tiles,

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



    /*==========================
      SCROLL TOP
    ==========================*/

    const topBtn = document.querySelector(".scroll-top");

    if(topBtn){

        window.addEventListener("scroll",()=>{

            if(window.scrollY > 500){

                topBtn.classList.add("show");

            }else{

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }



    /*==========================
      CARD HOVER EFFECT
    ==========================*/

    document.querySelectorAll(

".category-card,.collection-item,.why-card,.testimonial-card,.contact-card"

    ).forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".35s";

        });

    });

});
