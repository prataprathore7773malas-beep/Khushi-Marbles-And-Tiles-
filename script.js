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
