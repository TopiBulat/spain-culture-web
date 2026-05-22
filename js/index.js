const menuBtn = document.querySelector(".menu-btn");

const mobileNav = document.querySelector(".mobile-nav");

/* TOGGLE MENU */

menuBtn.addEventListener("click", function () {

	mobileNav.classList.toggle("active");

	/* CHANGE ICON */

	if (mobileNav.classList.contains("active")) {

		menuBtn.innerHTML = "✕";

	} else {

		menuBtn.innerHTML = "☰";

	}

});

/* AUTO CLOSE WHEN LINK CLICKED */

const navLinks = document.querySelectorAll(".mobile-nav a");

navLinks.forEach(link => {

	link.addEventListener("click", function(){

		mobileNav.classList.remove("active");

		menuBtn.innerHTML = "☰";

	});

});