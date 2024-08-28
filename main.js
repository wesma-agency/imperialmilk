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

	scrollToSEction();
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

function showFixedMenu() {
	const header = document.querySelector('.header-top');
	const products = document.querySelector('.our-products__inner');
	const scrollY = window.scrollY;

	if (scrollY > 154) {
		header.classList.add('fixed');
		products.style.paddingTop = header.clientHeight + 360 + 'px';
	} else {
		header.classList.remove('fixed');
		products.style.paddingTop = 80 + 'px';
	}
}

window.addEventListener('scroll', showFixedMenu);

function scrollToSEction() {
	const links = document.querySelectorAll('.footer-top__links-item');

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const href = link.getAttribute('href');
			const sectionTop = document.querySelector(href).offsetTop - 154;
			console.log(sectionTop);

			scroll({
				top: sectionTop,
				behavior: 'smooth',
			});
		});
	});
}
