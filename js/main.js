"use strict";document.querySelector(".nav>.navCont");var e=document.querySelector(".navItems"),o=document.querySelector(".burger"),l=document.querySelector(".burger>span");window.onclick=function(t){$(".navCont").hasClass("active")?t.target!=e&&t.target!=e&&($(".navCont").toggleClass("active"),$(".burger").toggleClass("active"),$("body").toggleClass("scrollLock")):t.target!=o&&t.target!=l||($(".navCont").toggleClass("active"),$(".burger").toggleClass("active"),$("body").toggleClass("scrollLock"))};var t=$(".promo").css("height"),i=parseInt(t,10);window.onscroll=function(){i-65<=pageYOffset?($(".nav").addClass("navBlack"),$(".logo-inner").addClass("logoWhite")):($(".nav").removeClass("navBlack"),$(".logo-inner").removeClass("logoWhite"))},window.onload=function(){var t,e;t=function(t){1==t&&document.querySelector("body").classList.add("webp")},(e=new Image).onload=e.onerror=function(){t(2==e.height)},e.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},window.onload=function(){for(var t=document.querySelectorAll(".yearCont"),e=0;e<t.length;e++)if(e%2==0){t.item(e).classList.add("yearCont-left"),t.item(e).querySelector(".circle").classList.add("circle-left");var o=t.item(e).querySelector(".textCont");o.classList.add("textCont-left"),o.querySelector(".title").classList.add("title-right"),o.querySelector(".subtitle").classList.add("subtitle-right")}else{t.item(e).classList.add("yearCont-right"),t.item(e).querySelector(".circle").classList.add("circle-right");var l=t.item(e).querySelector(".textCont");l.classList.add("textCont-right"),l.querySelector(".title").classList.add("title-left"),l.querySelector(".subtitle").classList.add("subtitle-left")}function i(){for(var t=document.querySelectorAll(".person"),e=0;e<t.length;e++)e%3==1?(t.item(e).classList.remove("lower"),t.item(t.length-1).classList.add("lower")):t.item(e).classList.add("lower")}function n(t){t.matches?($(".person").removeClass("lower"),$(".person:first").css("margin-top","0")):i()}var a=window.matchMedia("(max-width: 960px)");i(),n(a),a.addListener(n),$(document).ready(function(){$(".fa-angle-down, .aboutus-link").click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body,html").animate({scrollTop:destination},800)})}),$(".home-link").click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body,html").animate({scrollTop:destination},800)}),$(".stats-link").click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body,html").animate({scrollTop:destination},800)}),$(".contact-link").click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body,html").animate({scrollTop:destination},800)}),$(".team-link").click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body,html").animate({scrollTop:destination},800)})},$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}});
//# sourceMappingURL=main.js.map
