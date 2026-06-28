//==========================================
// LOADER (SAFE)
//==========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.transition = "opacity .6s ease";

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }, 800);

    }

});



//==========================================
// STICKY NAVBAR
//==========================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(18,18,18,.95)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(30,30,30,.65)";
            navbar.style.boxShadow = "none";

        }

    });

}



//==========================================
// SMOOTH SCROLL
//==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



//==========================================
// COUNTER
//==========================================

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const step = Math.max(1, target / 100);

            const update = () => {

                current += step;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        });

    }, {

        threshold: .5

    });

    counters.forEach(counter => observer.observe(counter));

}



//==========================================
// BACK TO TOP
//==========================================

const topBtn = document.querySelector(".top-btn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}//==========================================
// MOBILE MENU
//==========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}



//==========================================
// FAQ
//==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                const otherAnswer = other.querySelector(".faq-answer");

                if (otherAnswer) {

                    otherAnswer.style.maxHeight = null;

                }

            }

        });

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});



//==========================================
// SCROLL REVEAL
//==========================================

const revealElements = document.querySelectorAll(

".product-card,.service-card,.review-card,.why-card,.stat-box,.gallery-item,.trust-item,.about-image,.about-content"

);

if (revealElements.length) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .15

    });

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style
