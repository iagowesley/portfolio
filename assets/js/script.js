
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


$(document).ready(function () {
	$(".back-to-top").css("display", "none");
  $("body").scroll(function() {
	  if($(this).scrollTop() == 0){
		$(".back-to-top").css("display", "none");
	  } else {
		$(".back-to-top").css("display", "block");
	  }
	});
  $(".back-to-top").click(function() {
	  $("html, body").animate({scrollTop: 0}, 800);
	 });
  });

  const resultBtn = document.querySelector('.resultBtn');
const output = document.querySelector('.output-code');

resultBtn.style.backgroundPosition = `top left,top center,top right,center right, bottom right,bottom center,bottom left,center left`;
resultBtn.style.backgroundRepeat = "no-repeat";

drawBtn();

function drawBtn() {
    const width = Number(document.querySelector('[name="width"]').value);
    const radius = Number(document.querySelector('[name="radius"]').value);

    const color = [
        document.querySelector('[name="colorA"]').value,
        document.querySelector('[name="colorB"]').value,
        document.querySelector('[name="colorC"]').value,
        document.querySelector('[name="colorD"]').value
    ]

    resultBtn.style.backgroundImage = `
        radial-gradient(circle at 100% 100%, transparent ${radius - width}px, ${color[0]} ${radius - width}px, ${color[0]} ${radius}px, transparent ${radius}px),
        linear-gradient(to right, ${color[0]}, ${color[1]}),
        radial-gradient(circle at 0% 100%, transparent ${radius - width}px, ${color[1]} ${radius - width}px, ${color[1]} ${radius}px, transparent ${radius}px),
        linear-gradient(to bottom, ${color[1]}, ${color[2]}),
        radial-gradient(circle at 0% 0%, transparent ${radius - width}px, ${color[2]} ${radius - width}px, ${color[2]} ${radius}px, transparent ${radius}px),
        linear-gradient(to left, ${color[2]}, ${color[3]}),
        radial-gradient(circle at 100% 0%, transparent ${radius - width}px, ${color[3]} ${radius - width}px, ${color[3]} ${radius}px, transparent ${radius}px),
        linear-gradient(to top, ${color[3]}, ${color[0]})
    `;


    resultBtn.style.backgroundSize = `
        ${radius}px ${radius}px,
        calc(100% - ${2 * radius}px) ${width}px,
        ${radius}px ${radius}px,
        ${width}px calc(100% - ${2 * radius}px)
    `;

    output.innerHTML = `
        <code>
            .button-with-gradient-border {
                <span>
                    <b>background-image</b>:
                    radial-gradient(circle at 100% 100%, transparent ${radius - width}px, ${color[0]} ${radius - width}px, ${color[0]} ${radius}px, transparent ${radius}px),
                    linear-gradient(to right, ${color[0]}, ${color[1]}),
                    radial-gradient(circle at 0% 100%, transparent ${radius - width}px, ${color[1]} ${radius - width}px, ${color[1]} ${radius}px, transparent ${radius}px),
                    linear-gradient(to bottom, ${color[1]}, ${color[2]}),
                    radial-gradient(circle at 0% 0%, transparent ${radius - width}px, ${color[2]} ${radius - width}px, ${color[2]} ${radius}px, transparent ${radius}px),
                    linear-gradient(to left, ${color[2]}, ${color[3]}),
                    radial-gradient(circle at 100% 0%, transparent ${radius - width}px, ${color[3]} ${radius - width}px, ${color[3]} ${radius}px, transparent ${radius}px),
                    linear-gradient(to top, ${color[3]}, ${color[0]});
                </span>
                <span>
                    <b>background-size</b>:
                    ${radius}px ${radius}px,
                    calc(100% - ${2 * radius}px) ${width}px,
                    ${radius}px ${radius}px,
                    ${width}px calc(100% - ${2 * radius}px);
                </span>
                <span>
                    <b>background-position</b>:
                    top left,top center,top right,center right, bottom right,bottom center,bottom left,center left;
                </span>
                <span>
                    <b>background-repeat</b>:
                    no-repeat;
                </span>
            }
        </code>
    `;
}