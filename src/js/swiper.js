import Swiper, {Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.swiper', {
	centeredSlides: true,
	loop: true,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		820: {
			slidesPerView: 2,
			spaceBetween: 30,
		}

	}
});


