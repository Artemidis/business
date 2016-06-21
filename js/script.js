$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($("header"), 800, {
			offset: -90
		});
	});

	

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

$(function(){ // tabs
	function tabs(section){
		var tab = $('a', $('.tabs', section));
		var tabContent = $('.row', $('.tabs-content', section));

		tab.click(function(){
			var that = $(this);

			tab.removeClass('active');
			that.addClass('active');

			tabContent.hide().eq(that.index()).show();
		});
	}

	tabs('#golden-ball');
	tabs('#about-congress');
});
$(document).ready(function(){
	$(".carousel").owlCarousel({
		loop: true,
		items: 1,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
	$(".partners-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items: 1,
				nav: false,
				dots: true
			},
			480:{
				items: 2,
				nav: false,
				dots: true
			},
			680:{
				items: 3,
				nav: false
			},
			992:{
				items: 4
			}
		},
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

$(document).ready(function(){
	if($('div').is('#ymap')){
		ymaps.ready(init);

		function init () {
			var myMap = new ymaps.Map("ymap", {
				center: [43.118221, 131.888656],
				zoom: 15
			}, {
				searchControlProvider: 'yandex#search'
			});
			myMap.behaviors.disable('scrollZoom');

		  myMap.geoObjects
		  .add(new ymaps.Placemark([43.118221, 131.888656], {
		  	balloonContent: 'ул. Семеновская, 29',
		  	hintContent: "ул. Семеновская, 29"
		  }, {
		  	preset: 'islands#dotIcon',
		  	iconColor: '#ed4543'
		  }))
		  .add(new ymaps.Placemark([43.120241, 131.89021], {
		  	balloonContent: 'Пологая улица, 66А',
		  	hintContent: "Пологая улица, 66А"
		  }, {
		  	preset: 'islands#circleDotIcon',
		  	iconColor: '#1e98ff'
		  }))
		  .add(new ymaps.Placemark([55.687086, 37.529789], {
		  	balloonContent: 'цвет <strong>влюбленной жабы</strong>'
		  }, {
		  	preset: 'islands#circleIcon',
		  	iconColor: '#3caa3c'
		  }))
		  .add(new ymaps.Placemark([55.782392, 37.614924], {
		  	balloonContent: 'цвет <strong>детской неожиданности</strong>'
		  }, {
		  	preset: 'islands#circleDotIcon',
		  	iconColor: 'yellow'
		  }))
		  .add(new ymaps.Placemark([55.642063, 37.656123], {
		  	balloonContent: 'цвет <strong>бисмарк-фуриозо</strong>'
		  }, {
		  	preset: 'islands#icon',
		  	iconColor: '#a5260a'
		  }))
		  .add(new ymaps.Placemark([55.826479, 37.487208], {
		  	balloonContent: 'цвет <strong>фэйсбука</strong>'
		  }, {
		  	preset: 'islands#dotIcon',
		  	iconColor: '#3b5998'
		  }))
		  .add(new ymaps.Placemark([55.694843, 37.435023], {
		  	balloonContent: 'цвет <strong>вконтакте</strong>'
		  }, {
		  	preset: 'islands#circleIcon',
		  	iconColor: '#4d7198'
		  }))
		  .add(new ymaps.Placemark([55.790139, 37.814052], {
		  	balloonContent: 'цвет <strong>твиттера</strong>'
		  }, {
		  	preset: 'islands#circleDotIcon',
		  	iconColor: '#1faee9'
		  }));
		}
	}

});

$(function() { // up button
    $(document).scroll(function() {
        if ($(window).scrollTop() >= 600) {
            $('.up-button').stop().fadeIn(200);
        } else if ($(window).scrollTop() < 600) {
            $('.up-button').stop().fadeOut(200);
        }
    });

    $('.up-button').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });

});

$(function(){ // добавление суммы в попап
	var orderBtn = $('.order-btn', $('.price'));
	var popupSum = $('input[name=sum]', $('#callback'));
	var sum;

	orderBtn.click(function(){
		sum = $(this).siblings('.sum').text();
		popupSum.val(sum);
	});
});

$(function() {
	var popup = $('.popup'), hiddenText;

	window.onkeydown = function(e) {
		if (e.keyCode === 27) { //escape
			popup.fadeOut('fast');
		}
	};
	$('body').click(function (e) {
		if (e.target.className === 'popup-shadow') {
			popup.fadeOut('fast');
		}
	});
	$('.close').click(function() {
		popup.fadeOut('fast');
	});

	var speaker = $('.item', $('.speakers'));
	var that, oPhoto, oName, oPost, oCompany, oTheme, oText;
	var iPhoto, iName, iPost, iCompany, iTheme, iText;
	var popSpeakers = $('.popup-speakers');
	speaker.click(function() {
		that = $(this);

		oPhoto = that.find('.photo').attr('src');
		oName = that.find('.name').text();
		oPost = that.find('.post').text();
		oCompany = that.find('.company').text();
		oTheme = that.find('.theme').text();
		oText = that.find('.text').html();

		iPhoto = popSpeakers.find('.photo').attr('src', oPhoto);
		iName = popSpeakers.find('.name').text(oName);
		iPost = popSpeakers.find('.post').text(oPost);
		iCompany = popSpeakers.find('.company').text(oCompany);
		iTheme = popSpeakers.find('.theme').text(oTheme);
		iText = popSpeakers.find('.text').html(oText);

		popSpeakers.fadeIn('fast')
			.find('.popup-content')
			.css('top', parseInt($(window).scrollTop()) - 30 + 'px')
	});
});