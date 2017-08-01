var contentOffset;
var portfolioArray;

$(document).ready(function () {
  buildPortfolio();
  contentOffset = parseInt($("#about").css("padding-top").slice(0, -2)) + parseInt(+$("#about").css("margin-top").slice(0, -2));
  console.log("Offset: " + contentOffset);
  setListeners();
  $('body').scrollspy({
    target: '.navbar',
    offset: contentOffset + 5
  });
});

function setListeners() {
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  $("a.scrollable").click(function () {
    event.preventDefault();
    scrollToElement($($(this).attr("href")));
  });

  $("#toTop").click(function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    scrollToTop();
  });
}

function buildPortfolio() {
  var portfolioHtml = "";

  for (var i = 0; i < portfolioArray.length; i++) {
    var entry = portfolioArray[i];
    if (i % 2 === 0) portfolioHtml += '<div class="row text-center">';
    portfolioHtml += '<div class="col-sm-6 text-center">' +
      '<a href="' + entry.href + '" target="_blank" class="thumbnail">' +
      '<img src="' + entry.img + '" alt="' + entry.title + '" class="img-responsive" onload="thumbLoaded(this)">' +
      '</a>' +
      '</div>';
    if (i % 2 === 1) portfolioHtml += "</div>";
  }
  $("#portfolio > hr").after(portfolioHtml);
}

function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 'slow', 'swing');
}

function scrollToElement(element) {
  $('html, body').animate({
    scrollTop: element.offset().top - contentOffset
  }, 'slow', 'swing');
}

portfolioArray = [{
  title: "Local Weather",
  href: "https://codepen.io/kganguly/full/OWKYqL/",
  img: "https://www.kganguly.com/img/LocalWeather_Thumb_Zoom.png"
}, {
  title: "Wikipedia Search",
  href: "http://codepen.io/kganguly/full/ZeeEgr/",
  img: "https://www.kganguly.com/img/WikiSearch_Thumb.png"
}, {
  title: "Twitch Stream Tracker",
  href: "http://codepen.io/kganguly/full/QvLzpe/",
  img: "https://www.kganguly.com/img/Twitch_Thumb.png"
}, {
  title: "Random Quote Generator",
  href: "http://codepen.io/kganguly/full/dNegKb/",
  img: "https://www.kganguly.com/img/RandomQuote_Thumb_Zoom.png"
}, {
  title: "Pomodoro Clock",
  href: "https://kganguly.github.io/FCC-Pomodoro/",
  img: "https://www.kganguly.com/img/Pomodoro_Thumb.png"
}, {
  title: "Calculator",
  href: "https://kganguly.github.io/FCC-Calculator/",
  img: "https://www.kganguly.com/img/Calculator_Thumb.png"
}];;