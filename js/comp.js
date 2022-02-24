function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.4]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation_comp_top_1, .animation_comp_top_2, .animation_fon');

for (let elm of elements) {
	observer.observe(elm);
}
