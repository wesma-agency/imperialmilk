import './src/scss/style.scss';
import Swiper from 'swiper/bundle';

window.addEventListener('DOMContentLoaded', () => {
	createSlider('.swiper', {
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
			clickable: true,
		},
	});
});

// const slider = new Swiper('.swiper', {
// 	// loop: true,
// 	// autoplay: {
// 	// 	delay: 8000,
// 	// },
// 	// keyboard: {
// 	// 	enable: true,
// 	// },
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// });

function createSlider(slider, options = {}) {
	return new Swiper(`${slider}`, options);
}
