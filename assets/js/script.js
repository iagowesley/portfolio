
/* const menuLinks = document.querySelectorAll('.btns a[href^="#"]');	



function getDistanceFromTheTop(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
	window.scroll({
		top: distanceFromTheTop,
		behavior: 'smooth'
	});
}

function scrollToSection(event) {
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
	nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
	link.addEventListener("click", scrollToSection);
}); */


/*
const observer = new IntersectionObserver(entries => {
	console.log(entries)
	entries[0].target.classList.add('.init-hidden-off')
}, {
	threshold: 1
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
	observer.observe(element)
})*/

const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll() {
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
	target.forEach(function (element) {
		if ((windowTop) > element.offsetTop) {
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
})
}

animeScroll();

if(target.length){
	window.addEventListener('scroll', function () {
		animeScroll();
	});
}

window.addEventListener('scroll', function() {
	animeScroll();
})
