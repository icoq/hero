"use strict";document.querySelector(".nav>.navCont");var t=document.querySelector(".navItems"),o=document.querySelector(".burger"),a=document.querySelector(".burger>span");window.onclick=function(e){$(".navCont").hasClass("active")?e.target!=t&&e.target!=t&&($(".navCont").toggleClass("active"),$(".burger").toggleClass("active"),$("body").toggleClass("scrollLock")):e.target!=o&&e.target!=a||($(".navCont").toggleClass("active"),$(".burger").toggleClass("active"),$("body").toggleClass("scrollLock"))};var e=$(".promo").css("height"),s=parseInt(e,10);window.onscroll=function(){s-65<=pageYOffset?($(".nav").addClass("navBlack"),$(".logo-inner").addClass("logoWhite"),$(".navItems__item-inner").addClass("whiteHover")):($(".nav").removeClass("navBlack"),$(".logo-inner").removeClass("logoWhite"),$(".navItems__item-inner").removeClass("whiteHover"))},window.onload=function(){var e,t;e=function(e){1==e&&document.querySelector("body").classList.add("webp")},(t=new Image).onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},window.onload=function(){for(var e=document.querySelectorAll(".yearCont"),t=0;t<e.length;t++)if(t%2==0){e.item(t).classList.add("yearCont-left"),e.item(t).querySelector(".circle").classList.add("circle-left");var o=e.item(t).querySelector(".textCont");o.classList.add("textCont-left"),o.querySelector(".title").classList.add("title-right"),o.querySelector(".subtitle").classList.add("subtitle-right")}else{e.item(t).classList.add("yearCont-right"),e.item(t).querySelector(".circle").classList.add("circle-right");var a=e.item(t).querySelector(".textCont");a.classList.add("textCont-right"),a.querySelector(".title").classList.add("title-left"),a.querySelector(".subtitle").classList.add("subtitle-left")}function s(){for(var e=document.querySelectorAll(".person"),t=0;t<e.length;t++)t%3==1?(e.item(t).classList.remove("lower"),e.item(e.length-1).classList.add("lower")):e.item(t).classList.add("lower")}function l(e){e.matches?($(".person").removeClass("lower"),$(".person:first").css("margin-top","0")):s()}var r=window.matchMedia("(max-width: 960px)");s(),l(r),r.addListener(l)},$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});
//# sourceMappingURL=main.js.map
