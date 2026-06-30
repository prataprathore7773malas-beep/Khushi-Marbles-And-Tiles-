/*==========================================
            LOADER
==========================================*/

window.addEventListener("load", () => {

document.body.classList.add("loaded");

const loader = document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},800);

}

});



/*==========================================
            STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(15,15,15,.95)";
navbar.style.backdropFilter="blur(20px)";
navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";
navbar.style.marginTop="10px";

}else{

navbar.style.background="rgba(18,18,18,.82)";
navbar.style.backdropFilter="blur(20px)";
navbar.style.boxShadow="none";
navbar.style.marginTop="18px";

}

});



/*==========================================
            MOBILE MENU
==========================================*/

const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});



/*==========================================
            BACK TO TOP
==========================================*/

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



/*==========================================
        ACTIVE NAV LINK
==========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

}); /*==========================================
            FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");
const answer=item.querySelector(".faq-answer");
const icon=item.querySelector("i");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.maxHeight=null;
other.querySelector("i").classList.remove("fa-minus");
other.querySelector("i").classList.add("fa-plus");

}

});

if(answer.style.maxHeight){

answer.style.maxHeight=null;

icon.classList.remove("fa-minus");
icon.classList.add("fa-plus");

}else{

answer.style.maxHeight=answer.scrollHeight+"px";

icon.classList.remove("fa-plus");
icon.classList.add("fa-minus");

}

});

});



/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const updateCounter=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{

threshold:.5

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});



/*==========================================
        SCROLL REVEAL
==========================================*/

const revealElements=document.querySelectorAll(

".about-content,.about-image,.why-card,.product-card,.gallery-card,.business-content,.business-image,.review-card,.contact-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});



/*==========================================
        IMAGE FADE EFFECT
==========================================*/

const allImages=document.querySelectorAll("img");

allImages.forEach(img=>{

img.style.opacity="0";
img.style.transition="opacity .8s ease";

img.onload=()=>{

img.style.opacity="1";

};

});



/*==========================================
        GALLERY HOVER EFFECT
==========================================*/

const galleryCards=document.querySelectorAll(".gallery-card");

galleryCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});



/*==========================================
        PARALLAX HERO
==========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

hero.style.backgroundPositionY=
window.pageYOffset*0.35+"px";

}

});/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



/*==========================================
        HERO IMAGE FLOAT
==========================================*/

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});

window.addEventListener("mouseleave",()=>{

heroImage.style.transform="translate(0,0)";

});

}



/*==========================================
        PRODUCT CARD TILT
==========================================*/

const productCards=document.querySelectorAll(".product-card");

productCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*8;

const rotateY=((x/rect.width)-0.5)*-8;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});



/*==========================================
        GALLERY IMAGE ZOOM
==========================================*/

document.querySelectorAll(".gallery-card img")

.forEach(image=>{

image.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="image-popup";

popup.innerHTML=`

<div class="popup-bg">

<img src="${image.src}">

</div>

`;

document.body.appendChild(popup);

popup.addEventListener("click",()=>{

popup.remove();

});

});

});



/*==========================================
        NAVBAR LINK HOVER
==========================================*/

document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.letterSpacing="1px";

});

link.addEventListener("mouseleave",()=>{

link.style.letterSpacing="0";

});

});



/*==========================================
        FLOATING BUTTON ANIMATION
==========================================*/

const floats=document.querySelectorAll(

".whatsapp-float,.call-float"

);

floats.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.15)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});



/*==========================================
        DISABLE IMAGE DRAG
==========================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});



/*==========================================
        PAGE FADE IN
==========================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

}); /*==========================================
        LAZY LOADING IMAGES
==========================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.classList.add("loaded");

observer.unobserve(img);

}

});

},{
threshold:0.1
});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});



/*==========================================
        WINDOW RESIZE
==========================================*/

window.addEventListener("resize",()=>{

clearTimeout(window.resizeTimer);

window.resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},200);

});



/*==========================================
        PRELOAD HERO IMAGE
==========================================*/

const preloadImage=new Image();

preloadImage.src="hero.png";



/*==========================================
        SMOOTH BUTTON HOVER
==========================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".35s";

});

});



/*==========================================
        PREVENT DOUBLE CLICK
==========================================*/

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("dblclick",(e)=>{

e.preventDefault();

});

});



/*==========================================
        SCROLL PROGRESS BAR
==========================================*/

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progressHeight=

(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});



/*==========================================
        CONSOLE BRANDING
==========================================*/

console.clear();

console.log(

"%cKhushi Marble & Tiles",

"font-size:26px;color:#C9A227;font-weight:bold;"

);

console.log(

"%cPremium Marble • Granite • Designer Tiles",

"font-size:14px;color:#ffffff;"

);

console.log(

"%cDesigned & Developed By Marwar Infotech",

"font-size:14px;color:#C9A227;"

);



/*==========================================
        WEBSITE READY
==========================================*/

window.addEventListener("load",()=>{

console.log("Website Loaded Successfully");

});



/*==========================================
        END OF SCRIPT
==========================================*/
