import './src/scss/style.scss';
import Swiper from 'swiper/bundle';

const slider = new Swiper('.swiper', {
	// loop: true,
	// autoplay: {
	// 	delay: 8000,
	// },
	// keyboard: {
	// 	enable: true,
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
});
