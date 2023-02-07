document.querySelectorAll(".accordion-item-trigger").forEach((e) =>
	e.addEventListener("click", () => {
		const parentElem = e.parentNode;

		if(parentElem.classList.contains("accordion-item-active")){
			parentElem.classList.remove("accordion-item-active");
		}else{
			document
				.querySelectorAll(".accordion-item")
				.forEach((child) => child.classList.remove("accordion-item-active"))
		}

		parentElem.classList.add("accordion-item-active")
	})
)