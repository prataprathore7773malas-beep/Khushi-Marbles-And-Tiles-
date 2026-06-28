//==========================================
// LOADER
//==========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});



//==========================================
// STICKY NAVBAR
//==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(18,18,18,.95)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";
        navbar.style.marginTop = "10px";

    } else {

        navbar.style.background = "rgba(30,30,30,.65)";
        navbar.style.boxShadow = "none";
        navbar.style.marginTop = "18px";

    }

});



//==========================================
// BACK TO TOP BUTTON
//==========================================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 500) {

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



//==========================================
// SMOOTH NAVIGATION
//==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



//==========================================
// COUNTER ANIMATION
//==========================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

}); //==========================================
// LOADER
//==========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});



//==========================================
// STICKY NAVBAR
//==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(18,18,18,.95)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";
        navbar.style.marginTop = "10px";

    } else {

        navbar.style.background = "rgba(30,30,30,.65)";
        navbar.style.boxShadow = "none";
        navbar.style.marginTop = "18px";

    }

});



//==========================================
// BACK TO TOP BUTTON
//==========================================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 500) {

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



//==========================================
// SMOOTH NAVIGATION
//==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



//==========================================
// COUNTER ANIMATION
//==========================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});/*==========================================
        PARALLAX HERO EFFECT
==========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (hero) {

        hero.style.backgroundPositionY = window.pageYOffset * 0.4 + "px";

    }

});



/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size/2 + "px";
        ripple.style.top = e.clientY - rect.top - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});



/*==========================================
        LAZY IMAGE FADE
==========================================*/

const images = document.querySelectorAll("img");

images.forEach(img=>{

    img.onload=()=>{

        img.style.opacity="1";

    };

    img.style.opacity="0";

    img.style.transition=".8s";

});



/*==========================================
        NAVBAR SHADOW
==========================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        navbar.style.borderColor="rgba(201,162,39,.25)";

    }

    else{

        navbar.style.borderColor="rgba(255,255,255,.08)";

    }

});



/*==========================================
        DISABLE RIGHT CLICK
==========================================*/

// Uncomment if needed

/*
document.addEventListener("contextmenu",function(e){

e.preventDefault();

});
*/



/*==========================================
        PREVENT IMAGE DRAG
==========================================*/

images.forEach(image=>{

image.setAttribute("draggable","false");

});



/*==========================================
        PAGE FADE-IN
==========================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

});



/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log(

"%cKhushi Marble & Tiles",

"color:#C9A227;font-size:24px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed with ❤️",

"color:#ffffff;font-size:14px;"

);



/*==========================================
        PERFORMANCE
==========================================*/

window.addEventListener("resize",()=>{

clearTimeout(window.resizeTimer);

window.resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},200);

});



/*==========================================
        END OF SCRIPT
==========================================*/ 
