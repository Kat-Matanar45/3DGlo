(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let c,o;const r=()=>{let c=(()=>{let e=(new Date("30 october 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();c.hours<10?e.textContent="0"+c.hours:e.textContent=c.hours,c.minutes<10?t.textContent="0"+c.minutes:t.textContent=c.minutes,c.seconds<10?n.textContent="0"+c.seconds:n.textContent=c.seconds,o=c.timeRemaining};r(),o>0&&(c=setInterval(r,1e3)),(0===o||o<0)&&(clearInterval(c),e.textContent="00",t.textContent="00",n.textContent="00")})(),(()=>{const e=document.querySelector("menu");let t;document.body.addEventListener("click",(n=>{n.target.closest(".menu")&&e.classList.add("active-menu"),(n.target.classList.contains("close-btn")||!n.target.closest("menu")&&!n.target.closest(".menu"))&&e.classList.remove("active-menu"),"A"===n.target.tagName&&n.target.closest("menu")&&(n.preventDefault(),t=n.target.getAttribute("href"),e.classList.remove("active-menu"),"#close"!==t&&document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content");let c,o=0,r=!1;const a=document.documentElement.clientWidth,s=()=>{o+=.01,c=requestAnimationFrame(s),o<1?n.style.opacity=o:cancelAnimationFrame(c)};t.forEach((t=>{t.addEventListener("click",(()=>{r=!r,e.style.display="block",a>768&&s()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",o=0)}))})(),document.querySelector("main>a").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"start"})})),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-square"),n=e.querySelector(".calc-count"),c=e.querySelector(".calc-day"),o=e=>{e.target.value=e.target.value.replace(/\D+/,"")};t.addEventListener("input",o),n.addEventListener("input",o),c.addEventListener("input",o)})(),(()=>{const e=document.querySelectorAll("input[type=tel]"),t=document.querySelector('input[placeholder="Ваше сообщение"]'),n=document.querySelectorAll("input[type=email]"),c=document.querySelectorAll("input[type=text]"),o=Array.from(c),r=[o[0],o[o.length-2],o[o.length-1]],a=e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]+/,"")};e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\-\(\)]+/,"")}))})),t.addEventListener("input",a),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']+/,"")}))})),r.forEach((e=>{e.addEventListener("input",a)}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(n=>{if(n.target.closest(".service-header-tab")){const c=n.target.closest(".service-header-tab");t.forEach(((t,n)=>{t===c?(t.classList.add("active"),e[n].classList.remove("d-none")):(t.classList.remove("active"),e[n].classList.add("d-none"))}))}}))})()})();