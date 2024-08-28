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

function showFixeMenu() {
	const header = document.querySelector('.header-top');
	const products = document.querySelector('.our-products__inner');
	const scrollY = window.scrollY;

	if (scrollY > header.clientHeight) {
		header.classList.add('fixed');
		products.style.paddingTop = header.clientHeight + 360 + 'px';
	} else {
		header.classList.remove('fixed');
		products.style.paddingTop = 80 + 'px';
	}
}

window.addEventListener('scroll', showFixeMenu);
