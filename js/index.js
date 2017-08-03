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
  $('#modal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget); // Button that triggered the modal
    var index = a.data('index'); // Extract info from data-* attributes
    var port = portfolioArray[index];
    var modal = $(this);
    modal.find('.modal-title').text(port.title);
    var img = '<img src="' + port.img + '" alt="' + port.title + '" class="img-responsive" onload="thumbLoaded(this)">';
    modal.find('.modal-body').html(port.desc + img);
    $("#appButton").off();
    $("#appButton").on("click", function () {
      window.open(port.appUrl, "_blank");
    });
    $("#codeButton").off();
    $("#codeButton").on("click", function () {
      window.open(port.codeUrl, "_blank");
    });
  });


}

function buildPortfolio() {
  var portfolioHtml = "";

  for (var i = 0; i < portfolioArray.length; i++) {
    var entry = portfolioArray[i];
    if (i % 2 === 0) portfolioHtml += '<div class="row text-center">';
    portfolioHtml += '<div class="col-sm-6 text-center">' +
      // '<a href="' + entry.href + '" target="_blank" class="thumbnail" data-toggle:"modal">' +
      '<a href="#modal" class="thumbnail" data-toggle="modal" data-index="' + i + '">' +
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
  appUrl: "https://codepen.io/kganguly/full/OWKYqL/",
  codeUrl: "https://codepen.io/kganguly/pen/OWKYqL",
  img: "https://www.kganguly.com/img/LocalWeather_Thumb_Zoom.png",
  desc: "A Local Weather app using Google Maps and Weather Underground APIs.  An early exploration into composing with multiple APIs and responsive web design."
}, {
  title: "Wikipedia Search",
  appUrl: "http://codepen.io/kganguly/full/ZeeEgr/",
  codeUrl: "http://codepen.io/kganguly/pen/ZeeEgr/",
  img: "https://www.kganguly.com/img/WikiSearch_Thumb.png",
  desc: "A Wikipedia search interface with 'Load more...' options.  An Exploration into incremental loading and bootstrap with responsive web design."
}, {
  title: "Twitch Stream Tracker",
  appUrl: "http://codepen.io/kganguly/full/QvLzpe/",
  codeUrl: "http://codepen.io/kganguly/pen/QvLzpe/",
  img: "https://www.kganguly.com/img/Twitch_Thumb.png",
  desc: "An app that uses the Twitch API to get the current status of users.  I used this as an eploration into Promises and asynchronous coding.  While not necessary at this scale, it would scale well.  Responsive web design baked in."
}, {
  title: "Calculator",
  appUrl: "https://kganguly.github.io/FCC-Calculator/",
  codeUrl: "https://github.com/kganguly/FCC-Calculator",
  img: "https://www.kganguly.com/img/Calculator_Thumb.png",
  desc: "A Calculator with operator precedence.  This became an exploration into thorough unit testing with Jasmine and Karma."
}, {
  title: "Pomodoro Clock",
  appUrl: "https://kganguly.github.io/FCC-Pomodoro/",
  codeUrl: "https://github.com/kganguly/FCC-Pomodoro",
  img: "https://www.kganguly.com/img/Pomodoro_Thumb.png",
  desc: "This app is a configurable timer to schedule regular breaks.  This lead to exploring linear gradients and audio on mobile browsers.  Responsive web design baked in as usual."
}, {
  title: "Tic-Tac-Toe",
  appUrl: "https://kganguly.github.io/FCC-Tic-Tac-Toe/",
  codeUrl: "https://github.com/kganguly/FCC-Tic-Tac-Toe",
  img: "https://www.kganguly.com/img/Tic-Tac-Toe_Thumb.png",
  desc: "Tic-Tac-Toe against a simple computer opponent."
}, {
  title: "Random Quote Generator",
  appUrl: "http://codepen.io/kganguly/full/dNegKb/",
  codeUrl: "http://codepen.io/kganguly/pen/dNegKb/",
  img: "https://www.kganguly.com/img/RandomQuote_Thumb_Zoom.png",
  desc: "A simple random quote generator.  An early exploration into composing with APIs and responsive web design."
}];