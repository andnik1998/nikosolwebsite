// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
});

// ===== Smooth Scroll =====
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// Cookie consent

window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000000",
        "text": "#ffffff"
      },
      "button": {
        "background": "#919191",
        "text": "#ffffff"
      }
    },
    "content": {
      "message": "Our website uses cookies to ensure that we give you the best experience possible. If you continue to use our website, we assume that you accept the use of cookies for an optimal experience.",
      "dismiss": "Close",
      "link": "",
      "href": ""
    }
  });
