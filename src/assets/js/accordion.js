export const accordion = () => {
	const accItems = document.querySelectorAll(".accordion");
	console.log('connected');
	accItems.forEach((elem, ind) => {
		elem.addEventListener("click", (e) => {
			let panel = elem.nextElementSibling;
			let elemClass = "." + elem.classList[0];
			let elemClasses = document.querySelectorAll(elemClass);

			if (elem.classList.contains("accordion__active")) {
				elem.classList.remove("accordion__active");
				paramHeight(panel);
				return;
			} else {
				elemClasses.forEach((elie) => {
					elie.classList.remove("accordion__active");
					elie.nextSibling.style.maxHeight = null;
				});

				elem.classList.toggle("accordion__active");

				paramHeight(panel);
			}
		});
	});

	const paramHeight = (param) => {
		if (param.style.maxHeight) {
			param.style.maxHeight = null;
		} else {
			param.style.maxHeight = param.scrollHeight + "px";
		}
	};
	// var acc = document.getElementsByClassName("accordion");
	// var i;

	// for (i = 0; i < acc.length; i++) {
	// 	acc[i].addEventListener("click", function() {
	// 		this.classList.toggle("accordion__active");
	// 		var panel = this.nextElementSibling;
	// 		if (panel.style.maxHeight) {
	// 			panel.style.maxHeight = null;
	// 		} else {
	// 			panel.style.maxHeight = panel.scrollHeight + "px";
	// 		}
	// 	});
	// }
};
