$(document).ready(function($) {
    var $overlay = $('#overlay');

    // Modal Logic
    $overlay.click(function() {
        // $('.m-active').removeClass('m-active');
        $('.b-sticky').fadeOut('fast');
        $(this).removeClass('m-active');
    });


    //Logic for Sticky
    $('.b-sticky').click(function(){
        // activate overlay only if b-sticky exists on page
        $(this).addClass('m-active');
        $overlay.addClass('m-active');
    });

    $('.js-close-sticky').click(function() {
        $('.b-sticky').fadeOut('fast');
    });


    // Main nav logic
    $('.js-nav-trigger').click(function() {
        $('.b-main-menu').addClass('m-active');
        $overlay.addClass('m-active');
    });


    // Search Field Toggle Logic
    $('.js-search-trigger').click(function() {
        $(this).parent().addClass('m-active');
        $overlay.addClass('m-active');
    });


    // Search Field Functionality
    $('.js-search-submit').click(function(event) {
        var param = $('.js-search-value').val();
        event.preventDefault();
        if (param != '') {
            window.location.href = "http://thegovlab.org/?s=" + param;
        }
    });


    // Logic for Accordion Component
    $('.js-open-accordion').click(function() {
        $(this).siblings().removeClass('m-active');
        $(this).addClass('m-active');
    });


    // Modal Logic
    $(".js-open-modal").click(function() {
        $(".b-modal").addClass("m-active");
        $overlay.addClass('m-active');
    });

    $(".js-close-modal").click(function() {
        $(".b-modal").removeClass("m-active");
        $overlay.removeClass('m-active');
    });


    // Slider Config (Sticky)
    $('.b-slider').slick({
        arrows: true,
        draggable: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
            }
        }
        ]
    });

// Resources Page - Tiles and Modals pulled from Smarterstate
    $('.js-tooltip-trigger-resources').click(function(e) {
        e.preventDefault();
        $($(this).attr('data-open')).addClass('m-active');
        $overlay.addClass('m-active');
    });

    $overlay.click(function() {
        $('.b-modal').removeClass('m-active');
        $overlay.removeClass('m-active');
    });

    $('.js-close-modal').click (function (e) {
        e.preventDefault();
        $('.b-modal').removeClass('m-active');
        $overlay.removeClass('m-active');
    });



    // Tooltip Logic
    $('.js-tooltip-trigger').click(function() {
        $(this).addClass('m-active');
        $overlay.addClass('m-active');
    });

    $('.js-bio-toggle').click(function() {
        $(this).parent().toggleClass('m-active');
    });


    // Events Page
    $('.e-list-selector .e-show-passed').click(function() {
        $('.e-show-upcoming').removeClass('m-active');
        $(this).addClass('m-active');
        $('.e-show-upcoming').parent().removeClass('m-upcoming');
        $(this).parent().addClass('m-passed');

        $('.b-event-list .e-event-upcoming').hide();
        $('.b-event-list .e-event-passed').show();
    });

    $('.e-list-selector .e-show-upcoming').click(function() {
        $('.e-show-passed').removeClass('m-active');
        $(this).addClass('m-active');
        $('.e-show-passed').parent().removeClass('m-passed');
        $(this).parent().addClass('m-upcoming');

        $('.b-event-list .e-event-passed').hide();
        $('.b-event-list .e-event-upcoming').show();
    });


    $('.js-event-trigger').click(function() {
        $(this).parent().parent().parent().parent().addClass('m-active');
        $overlay.addClass('m-active');
    });

    $('.js-close').click(function() {
        $('.e-event-item').removeClass('m-active');
        // $(this).removeClass('m-active');
    });

    // Projects Grid/List View Logic
    $('.js-view-list-trigger').click(function() {
        // Switch Classes for the Project Listing
        $('.b-project-view').addClass('m-list');
        $('.b-project-view').removeClass('m-grid');

        // Adds 'active' state to the button
        $(this).addClass('m-active');
        $('.js-view-grid-trigger').removeClass('m-active');
    });

    $('.js-view-grid-trigger').click(function() {
        // Switch Classes for the Project Listing
        $('.b-project-view').addClass('m-grid');
        $('.b-project-view').removeClass('m-list');

        // Adds 'active' state to the button
        $(this).addClass('m-active');
        $('.js-view-list-trigger').removeClass('m-active');
    });

    $('.e-banner-container').slick({
        arrows: false,
        draggable: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
            }
        }
        ]
    });

    $('.m-prev').click(function() {
        $(this).closest('.e-banner-container').slick('slickPrev');
    });

    $('.m-next').click(function() {
        $(this).closest('.e-banner-container').slick('slickNext');
    });

    $('.b-project-slider').slick({
        arrows: false,
        infinite: false,
        draggable: false,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
                slidesToShow: 1,
            }
        }
        ]
    });
});

function stripHTML(dirtyString) {
    var container = document.createElement('div');

    container.innerHTML = dirtyString;

    return container.textContent || container.innerText;
}

var render = function(posts) {
    posts.feed.entries.forEach(function (element, index) {
        var title = element.title,
        content = stripHTML(element.content);

        if (title.length > 100) {
            title = title.substr(0, 100) + '...';
        }

        if (content.length > 500) {
            content = content.substr(0, 500) + '...';
        }

        $('.js-article-' + (index + 1) + '-title').text(title);
        $('.js-article-' + (index + 1) + '-author').text(element.author);
        $('.js-article-' + (index + 1) + '-content').html(content);
        $('.js-article-' + (index + 1) + '-link').attr('href', element.link);
    });

    $('.e-banner-container').each(function() {
        var $wraps = $(this).find('.b-featured-content > div.e-wrap'),
        max = Math.max.apply(
            null,
            $wraps.map(function() {
                return $(this).outerHeight(true);
            }).get()
            );

        $wraps.height(max);
    });
};

window.Feed({
    url: 'http://thegovlab.org/category/featured-website/feed/',
    number: 3,
    callback: render
});

// functions for the effect on the homepage main banner

(function() {
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    if (document.getElementById('homepage-banner')) {
        initHeader();
        initAnimation();
        addListeners();
    }

    function initHeader() {
        width = window.innerWidth;
        height = $('#homepage-banner').outerHeight(true);
        target = {x: width / 2, y: height / 2};

        largeHeader = document.getElementById('homepage-banner');
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];

        for (var x = 0; x < width; x = x + width / 20) {
            for (var y = 0; y < height; y = y + height / 20) {
                var px = x + Math.random() * width / 20,
                py = y + Math.random() * height / 20,
                p = {x: px, originX: px, y: py, originY: py};

                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
            var p1 = points[i],
            closest = [];

            for(var j = 0; j < points.length; j++) {
                var p2 = points[j];

                if (p1 != p2) {
                    var placed = false;

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                placed = true;
                                closest[k] = p2;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                placed = true;
                                closest[k] = p2;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (var i in points) {
            var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.4)');

            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }

        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = 0,
        posy = 0;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }

        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) {
            animateHeader = false;

        } else {
            animateHeader = true;
        }
    }

    function resize() {
        width = window.innerWidth;
        height = $('#homepage-banner').outerHeight(true);
        canvas.width = width;
        canvas.height = height;
        largeHeader.style.height = height + 'px';
    }

    // animation
    function initAnimation() {
        animate();

        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);

            for(var i in points) {
                // detect points in range
                if (Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.2;

                } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;

                } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;

                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }

        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random()*3, {
            x: p.originX - 50 + Math.random()*100,
            y: p.originY - 50 + Math.random()*100,
            ease:Circ.easeInOut,
            onComplete: function() { shiftPoint(p); }
        });
    }

    // Canvas manipulation
    function drawLines(p) {
        if (!p.active) return;

        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if (!_this.active) return;

            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // http://stackoverflow.com/a/7768006

    // var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    // var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    // var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    // var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    // var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

    // if ((is_chrome)&&(is_safari)) {is_safari=false;}
    // if ((is_chrome)&&(is_opera)) {is_chrome=false;}

    // if (is_safari) {
    //     $('main').addClass('temp-browser-is-safari');
    // }


    // $('.temp-browser-is-safari .temp-hide-for-safari').hide();

})();


