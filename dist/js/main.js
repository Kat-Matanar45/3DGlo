(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let o,c;const l=()=>{let o=(()=>{let e=(new Date("16 october 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();o.hours<10?e.textContent="0"+o.hours:e.textContent=o.hours,o.minutes<10?t.textContent="0"+o.minutes:t.textContent=o.minutes,o.seconds<10?n.textContent="0"+o.seconds:n.textContent=o.seconds,c=o.timeRemaining};l(),c>0&&(o=setInterval(l,1e3)),(0===c||c<0)&&(clearInterval(o),e.textContent="00",t.textContent="00",n.textContent="00")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a");let c;const l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",(()=>{c=e.getAttribute("href"),document.querySelector(c).scrollIntoView({behavior:"smooth",block:"start"}),l()}))))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let c,l=0,r=!1;const s=document.documentElement.clientWidth,i=()=>{l++,c=requestAnimationFrame(i),l<100?(o.style.top=2*l+"px",o.style.left=8*l+"px"):cancelAnimationFrame(c)};t.forEach((t=>{t.addEventListener("click",(()=>{r=!r,e.style.display="block",s>768&&i()}))})),n.addEventListener("click",(()=>{e.style.display="none",l=0}))})(),(()=>{const e=document.querySelector("main>a");console.log(e),e.addEventListener("click",(()=>{document.querySelector("#service-block").scrollIntoView({behavior:"auto",block:"center"})}))})()})();