import gsap from "gsap";
gsap.config({
	force3D: true,
});

const AlphabetsAnimation = (
	element: gsap.TweenTarget,
	letter: string,
	index: string
) => {
	const indexNumber = Number(index);
	const letterNumber = Number(letter);
	const unit = window.innerWidth > 600 ? 'vh' : 'rem';
	const translateNumber = window.innerWidth > 600 ? -7.2267 : -1.626;
	gsap.to(element, {
		delay: 0.2 * indexNumber,
		duration: letterNumber < 6 ? 0.3 * letterNumber : 0.1 * letterNumber,
		transform: `translateY(${translateNumber * letterNumber}${unit})`,
	});
};

export default AlphabetsAnimation;
