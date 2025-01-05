(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
   <iframe
                src="https://calendar.google.com/calendar/embed?src=bc234570fe90c52be37a0c38dbfb1d10aa8fd2ca64a26e686693963523823ad8%40group.calendar.google.com&ctz=Asia%2FDhaka"
                style="border: 0; border-radius:16px"
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
            ></iframe>
`;setupCounter(document.querySelector("#counter"));
