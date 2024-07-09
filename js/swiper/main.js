const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
	centeredSlides: true,
  loop: true,
	speed: 1000,
	effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	/* Автоматическое перелистывание слайдов */
	autoplay: {
		delay: 5000,
	}

});
