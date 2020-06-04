const modal = document.querySelector(".nav>.navCont");
const modalFix = document.querySelector(".navItems");
const burger = document.querySelector(".burger");
const burgerFix = document.querySelector(".burger>span");

window.onclick = function (event) {
  if ($(".navCont").hasClass("active")) {
    if (event.target != modalFix && event.target != modalFix) {
      $(".navCont").toggleClass("active");
      $(".burger").toggleClass("active");
      $("body").toggleClass("scrollLock");
    }
  } else if (event.target == burger || event.target == burgerFix) {
    $(".navCont").toggleClass("active");
    $(".burger").toggleClass("active");
    $("body").toggleClass("scrollLock");
  }
};

let imgPromoHeight = $(".promo").css("height");
let imgPromoY = parseInt(imgPromoHeight, 10);

window.onscroll = function () {
  //this.console.log(imgPromoY);
  if (imgPromoY - 65 <= pageYOffset) {
    $(".nav").addClass("navBlack");
    $(".logo-inner").addClass("logoWhite");
  } else {
    $(".nav").removeClass("navBlack");
    $(".logo-inner").removeClass("logoWhite");
  }
};




window.onload = function () {
  let years = document.querySelectorAll(".yearCont");
  // let a = years.indexOf(0);
  // console.log(years.item(0));

  for (let i = 0; i < years.length; i++) {
    if (i % 2 == 0) {
      //console.log(years.item(i));
      years.item(i).classList.add("yearCont-left");

      let circle = years.item(i).querySelector(".circle");
      circle.classList.add("circle-left");

      let textCont = years.item(i).querySelector(".textCont");
      textCont.classList.add("textCont-left");

      let title = textCont.querySelector(".title");
      title.classList.add("title-right");

      let subtitle = textCont.querySelector(".subtitle");
      subtitle.classList.add("subtitle-right");

      // console.log(years.item(i).querySelector(".textCont"));
    } else {
      years.item(i).classList.add("yearCont-right");

      let circle = years.item(i).querySelector(".circle");
      circle.classList.add("circle-right");

      let textCont = years.item(i).querySelector(".textCont");
      textCont.classList.add("textCont-right");

      let title = textCont.querySelector(".title");
      title.classList.add("title-left");

      let subtitle = textCont.querySelector(".subtitle");
      subtitle.classList.add("subtitle-left");
    }
    //console.log(years.item(i));

    //console.log(year);
  }

  function lowerPersons() {
    let persons = document.querySelectorAll(".person");
    for (let j = 0; j < persons.length; j++) {
      if (j % 3 == 1) {
        persons.item(j).classList.remove("lower");
        persons.item(persons.length - 1).classList.add("lower");
      } else {
        persons.item(j).classList.add("lower");
      }
    }
  }

  function myFunction(x) {
    if (x.matches) {
      $(".person").removeClass("lower");
      $(".person:first").css("margin-top", "0");
    } else {
      lowerPersons();
    }
  }

  var x = window.matchMedia("(max-width: 960px)");
  lowerPersons();
  myFunction(x);
  x.addListener(myFunction);

  $(document).ready(function () {
    $(".fa-angle-down, .aboutus-link").click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
      $("body,html").animate({ scrollTop: destination }, 800);
    });
  });

  $(".home-link").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });

  $(".stats-link").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });

  $(".contact-link").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });

  $(".team-link").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
};

//# sourceMappingURL=main.js.map
