(function ($) {
    const words = ["Padaria", "Buffet", "Almoço", "Jantar", "Pizzaria"];
    let currentIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 150;  // Velocidade de digitação (ms)
    const deletingSpeed = 100; // Velocidade de apagar (ms)
    const delayBetweenWords = 1000; // Pausa antes de trocar a palavra (ms)

    function typeEffect() {
        const changingText = document.getElementById("changingText");

        if (isDeleting) {
            currentWord = words[currentIndex].substring(0, currentWord.length - 1);
        } else {
            currentWord = words[currentIndex].substring(0, currentWord.length + 1);
        }
        changingText.textContent = currentWord;

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && currentWord === words[currentIndex]) {
            speed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && currentWord === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            speed = typingSpeed;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // // Typed Initiate
    // if ($('.hero .hero-text h2').length == 1) {
    //     var typed_strings = $('.hero .hero-text .typed-text').text();
    //     var typed = new Typed('.hero .hero-text h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }


    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });



    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    document.getElementById("copyEmailBtn").addEventListener("click", function () {
        // Cria um elemento de input temporário
        var tempInput = document.createElement("input");
        var emailText = document.getElementById("emailText").innerText;

        // Atribui o valor do e-mail ao input temporário
        tempInput.value = emailText;
        document.body.appendChild(tempInput);

        // Seleciona e copia o valor
        tempInput.select();
        document.execCommand("copy");

        // Remove o input temporário
        document.body.removeChild(tempInput);

        // Mostra a notificação de sucesso
        var notification = document.getElementById("notification");
        notification.style.display = "block";

        // Oculta a notificação após 3 segundos
        setTimeout(function () {
            notification.style.display = "none";
        }, 3000);
    });
})(jQuery);

