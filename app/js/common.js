$(function () {

	var offset = 100;

	$(window).scroll(function () {
		if ($(this).scrollTop() > 30) {
			$(".top-line").addClass("on");
		} else {
			$(".top-line").removeClass("on");
		}

		$('.anchor').each(function () {
			var element = $(this).attr("href");
			var element_offset = Math.floor($(element).offset().top);
			var scrollTop = $(window).scrollTop() + offset;
			var heightAndOffset = element_offset + $(element).height();
			if (scrollTop >= element_offset && scrollTop < heightAndOffset) {
				$('.anchor').removeClass("on");
				$(this).addClass("on");
			}
		});

	});

	$('.anchor, .tellMore').click(function () {
		elementClick = $(this).attr("href");
		destination = Math.ceil($(elementClick).offset().top) + 20;
		$('html, body').animate({ scrollTop: destination }, 700);
	});

	$(".section-header").each(function () {
		$(this).animated("fadeInRight");
	});

	$(".section_3 .right").each(function () {
		$(this).animated("fadeInLeft");
	});

	$(".section_3 .left").each(function () {
		$(this).animated("fadeInRight");
	});

	$(".item-right").animated("fadeInRight");

	$(".item-left").animated("fadeInLeft");

	$(".section_1").waypoint(function () {
		$(".section_1 .s1-item").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass("on");
			}, 200 * index);
		});
	}, {
		offset: "40%"
	});

	$(".section_2").waypoint(function () {

		$(".section_2 .item").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("item-off").addClass("item-on");
			}, 200 * index);
		});

	}, {
		offset: "20%"
	});

	$(".section_3 .item").each(function (index) {
		var ths = $(this);
		ths.waypoint(function () {
			ths.removeClass("item-off").addClass("item-on");
		}, {
			offset: "60%"
		});
	});

	$(".section_4").waypoint(function () {
		$(".section_4 .item").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("item-off").addClass("item-on");
			}, 400 * index);
		});
	}, {
		offset: "20%"
	});

	$(".toggle-menu").click(function () {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false
	});

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".form").submit(function () { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$(".send-email").fadeIn(function () {
				setTimeout(function () {
					$(".send-email").fadeOut();
					th.trigger("reset");
				}, 1000);
			});
		});
		return false;
	});

	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

	$(".preloader").fadeOut();
});
