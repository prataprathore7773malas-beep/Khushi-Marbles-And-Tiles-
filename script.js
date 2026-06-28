/*======================================
        LOADER
======================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});



/*======================================
        STICKY NAVBAR
======================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

if(window.scrollY>60){

navbar.classList.add("sticky");

}

else{

navbar.classList.remove("sticky");

}

});



/*======================================
        MOBILE MENU
======================================*/

const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuToggle.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuToggle.classList.remove("active");

});

});

}



/*======================================
        BACK TO TOP
======================================*/

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

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



/*======================================
        SMOOTH SCROLL
======================================*/

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

}); /*======================================
        FAQ ACCORDION
======================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

const icon=question.querySelector("i");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

const otherAnswer=other.querySelector(".faq-answer");

const otherIcon=other.querySelector(".faq-question i");

otherAnswer.style.maxHeight=null;

otherIcon.classList.remove("fa-minus");

otherIcon.classList.add("fa-plus");

}

});

if(answer.style.maxHeight){

answer.style.maxHeight=null;

icon.classList.remove("fa-minus");

icon.classList.add("fa-plus");

}

else{

answer.style.maxHeight=answer.scrollHeight+"px";

icon.classList.remove("fa-plus");

icon.classList.add("fa-minus");

}

});

});



/*======================================
        SCROLL REVEAL
======================================*/

const reveals=document.querySelectorAll(

".trust-card,.about-card,.stat-box,.why-card,.product-card,.gallery-card,.review-card,.contact-card,.business-box"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

reveals.forEach(card=>{

revealObserver.observe(card);

});



/*======================================
        COUNTER
======================================*/

const stats=document.querySelectorAll(".stat-box h2");

let counted=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".stats");

if(!section || counted) return;

const top=section.offsetTop-350;

if(window.scrollY>top){

counted=true;

stats.forEach(counter=>{

const text=counter.innerText;

const target=parseInt(text);

if(isNaN(target)) return;

let count=0;

const speed=Math.ceil(target/80);

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

});

}

});



/*======================================
        HERO FLOATING EFFECT
======================================*/

const boxes=document.querySelectorAll(".glass-box");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

boxes.forEach(box=>{

box.style.transform=`translate(${x}px,${y}px)`;

});

});
/*======================================
        PARALLAX HERO
======================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

hero.style.backgroundPositionY=window.pageYOffset*0.3+"px";

});



/*======================================
        BUTTON RIPPLE
======================================*/

document.querySelectorAll(
".primary-btn,.secondary-btn,.call-btn"
).forEach(button=>{

button.style.position="relative";
button.style.overflow="hidden";

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



/*======================================
        ACTIVE MENU
======================================*/

const sections=document.querySelectorAll("section[id]");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



/*======================================
        CARD HOVER EFFECT
======================================*/

document.querySelectorAll(

".product-card,.review-card,.about-card,.why-card,.gallery-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(200,161,77,.10),
var(--card) 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="var(--card)";

});

});



/*======================================
        IMAGE FADE
======================================*/

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.style.transition=".8s";

img.onload=()=>{

img.style.opacity="1";

};

});



/*======================================
        RIPPLE KEYFRAME
======================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

0%{

transform:scale(0);

opacity:.6;

}

100%{

transform:scale(4);

opacity:0;

}

}

.nav-links a.active{

color:#C8A14D;

}

`;

document.head.appendChild(style); /*======================================
        PARALLAX HERO
======================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

hero.style.backgroundPositionY=window.pageYOffset*0.3+"px";

});



/*======================================
        BUTTON RIPPLE
======================================*/

document.querySelectorAll(
".primary-btn,.secondary-btn,.call-btn"
).forEach(button=>{

button.style.position="relative";
button.style.overflow="hidden";

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



/*======================================
        ACTIVE MENU
======================================*/

const sections=document.querySelectorAll("section[id]");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



/*======================================
        CARD HOVER EFFECT
======================================*/

document.querySelectorAll(

".product-card,.review-card,.about-card,.why-card,.gallery-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(200,161,77,.10),
var(--card) 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="var(--card)";

});

});



/*======================================
        IMAGE FADE
======================================*/

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.style.transition=".8s";

img.onload=()=>{

img.style.opacity="1";

};

});



/*======================================
        RIPPLE KEYFRAME
======================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

0%{

transform:scale(0);

opacity:.6;

}

100%{

transform:scale(4);

opacity:0;

}

}

.nav-links a.active{

color:#C8A14D;

}

`;

document.head.appendChild(style); /*======================================
        CURSOR GLOW EFFECT
======================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



/*======================================
        FLOATING ANIMATION
======================================*/

document.querySelectorAll(".glass-box").forEach((box,index)=>{

box.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000+(index*400),

iterations:Infinity,

easing:"ease-in-out"

});

});



/*======================================
        FADE IN SECTIONS
======================================*/

const allSections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.10

});

allSections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s ease";

sectionObserver.observe(section);

});



/*======================================
        BUTTON HOVER SCALE
======================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});



/*======================================
        PREVENT IMAGE DRAG
======================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});



/*======================================
        SCROLL PROGRESS BAR
======================================*/

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#C8A14D";

progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});



/*======================================
        CONSOLE BRANDING
======================================*/

console.clear();

console.log(

"%cKhushi Marble & Tiles",

"font-size:28px;color:#C8A14D;font-weight:bold;"

);

console.log(

"%cPremium Website Developed Successfully",

"font-size:15px;color:white;"

);



/*======================================
        PAGE LOADED
======================================*/

window.addEventListener("load",()=>{

console.log("Website Loaded Successfully");

});



/*======================================
        PERFORMANCE
======================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},250);

});
