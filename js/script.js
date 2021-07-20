
//check if There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !==null) {
	document.documentElement.style.setProperty('--main--color', mainColors);

//Remove Active Class From All Colors List Item
	document.querySelectorAll(".colors-list li").forEach(element => {
	element.classList.remove("active");

		// Add Active Class On Element With Data color === Local Storage Item
		if (element.dataset.color === mainColors) {

			//Add Active Class
			element.classList.add("active");
		}
	});
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If  Random Background Local Storage IS not Empty
if (backgroundLocalItem !== null) {

	if (backgroundLocalItem === 'true') {

		backgroundOption =true;
	}else{

		backgroundOption = false;
	}

	//Remove Active Class Form All Spans
	document.querySelectorAll(".random-backgrounds span").forEach(element => {

		element.classList.remove("active");

	});

	if (backgroundLocalItem === 'true') {

		document.querySelector(".random-backgrounds .yes").classList.add("active");
		
	}else{
		document.querySelector(".random-backgrounds .no").classList.add("active");

	}

}



//Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function (){

	//Toggle Class fa-spin for Rotation on Self
	this.classList.toggle("fa-spin")

		//Toggle Class open on  main settings-box
	document.querySelector(".settings-box").classList.toggle("open")

};

			//switch colors
	const colorsLi = document.querySelectorAll(".colors-list li");


			//Loop On All List Items
	colorsLi.forEach(li => {


		    //Click On Every Items
		li.addEventListener("click", (e) => {

			//Set Color on Root
			document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

			//Set Color on Local Storage
			localStorage.setItem("color_option", e.target.dataset.color)

			//Remove Active Class From All children's
			e.target.parentElement.querySelectorAll(".active").forEach(element => {

			element.classList.remove("active");

			});

			// Add Active Class On Self
			e.target.classList.add("active");
			// handleActive(e);
		});
	});



			//switch Random  Background Option
			const randomBackEl  = document.querySelectorAll(".random-backgrounds span");

			//Loop On All Spans
			randomBackEl.forEach(span => {

			//Click On Every Span
			span.addEventListener("click", (e) => {

			//Remove Active Class From All children's
			e.target.parentElement.querySelectorAll(".active").forEach(element => {

			element.classList.remove("active");

			});

		// Add Active Class On Self
			e.target.classList.add("active");

		// handleActive(e);



			if (e.target.dataset.background === 'yes') {

				backgroundOption = true;

				randomize();
				localStorage.setItem("background_option", true);

			} else {


			backgroundOption = false;

			clearInterval(backgroundInterval);

			localStorage.setItem("background_option", false);


			}
		});
	});

// Select Landing page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of imgs
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]




// function randomize imgs
function randomize(){

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
			// Get Random Number

			let randomNumber = Math.floor(Math.random() * imgArray.length);

			// Change background img url

		landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';


        }, 1000);
    }
        }
randomize();


//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

	//Skills offset top
	let skillsOffsetTop = ourSkills.offsetTop;

	// Skills Outer height
	let skillsOuterHeight = ourSkills.offsetHeight;

	//Window height
	let windowHeight = this.innerHeight;

	//window ScrollTop
	let windowScrollTop = this.pageYOffset;

	if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
		
		let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

		allSkills.forEach(skill => {

			skill.style.width = skill.dataset.progress;

		});
	}
};

// Create Popup with the img
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

	img.addEventListener('click', (e) => {

		//Create Overlay Element
		let overlay = document.createElement("div");

		//Add  Class To Overlay
		overlay.className = 'popup-overlay';

		// append Overlay To The Body 
		document.body.appendChild(overlay);

		// Create the popup
		let popupBox = document.createElement("div");

		//Add Class To popup box
		popupBox.className = 'popup-box';

		if (img.alt !== null) {

			// Create Heading
			let imgHeading = document.createElement("h3");

			// Create Text For Heading
			let imgText = document.createTextNode(img.alt);

			// Append The Text to The Heading
			imgHeading.appendChild(imgText);

			// Append The Heading To The Popup Box 
			popupBox.appendChild(imgHeading);

			
		}


		// Create The Image
		let popupImage = document.createElement("img");

		//Set Img Source 
		popupImage.src = img.src;

		// Add Img To popup Box 
		popupBox.appendChild(popupImage);

		// Append The popup Box To Box
		document.body.appendChild(popupBox);

		// Create The Close Span
		let closeButton = document.createElement("span");

		// Create The Class Button Text 
		let closeButtonText = document.createTextNode("x");

		// Append Text To close Button 
		closeButton.appendChild(closeButtonText); 

		// Add class To Close Button 
		closeButton.className = 'close-button';

		// Add Close Button To The Popup Box 
		popupBox.appendChild(closeButton);
		
	});
});

// Close Popup 
document.addEventListener("click", function (e) {

	if (e.target.className == 'close-button') {
		
		// Remove The Current Popup 
		e.target.parentNode.remove();

		// Remove Overlay 
		document.querySelector(".popup-overlay").remove();
	}

});

// Select All Bullets 
	const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All links 
	const allLinks = document.querySelectorAll(".links a");


function scrollToSomewhere(elements) {

	elements.forEach(ele => {

		ele.addEventListener("click", (e) => {
			e.preventDefault();

			document.querySelector(e.target.dataset.section).scrollIntoView({

				behavior: 'smooth' 

		});
	});

});
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State 
function handleActive(ev) {

	// Remove Active Class From All children's
	ev.target.parentElement.querySelectorAll("active").forEach(element => {

		element.classList.remove("active");
	});

	//Add Active Class On Self
	ev.target.classList.add("active");
}




let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

	bulletsSpan.forEach(span => {

		span.classList.remove("active");

	});

	if (bulletLocalItem === 'block') {

		bulletsContainer.style.display = 'block';

		document.querySelector(".bullets-option .yes").classList.add("active");

		
	}else {

		bulletsContainer.style.display = 'none';

		document.querySelector(".bullets-option .no").classList.add("active");

	}
}

bulletsSpan.forEach(span => {

	span.addEventListener("click", (e) => {

		if (span.dataset.display === 'show') {

			bulletsContainer.style.display = 'block';

			localStorage.setItem("bullets_option", 'block');

		
		} else {

			bulletsContainer.style.display = 'none';

			localStorage.setItem("bullets_option", 'none');


		}

		handleActive(e);

	});

});


// Rest Button 
document.querySelector(".reset-option").onclick = function () {

	// localStorage.clear();
	localStorage.removeItem("color_option");
	localStorage.removeItem("background_option");
	localStorage.removeItem("bullets_option");
	// Reload Window
	window.location.reload();

}


// Toggle Menu 

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

	// Stop propagation
	e.stopPropagation();

	//Toggle Class "menu-active" on button
	this.classList.toggle("menu-active");

	// Toggle Class "open" on links
	tLinks.classList.toggle("open");
	
};

// Click any where outside menu and toggle button 
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn && e.target !== tLinks) {

		// Check if menu is open 
		if (tLinks.classList.contains("open")) {

			//Toggle Class "menu-active" on button
		toggleBtn.classList.toggle("menu-active");

			// Toggle Class "open" on links
			tLinks.classList.toggle("open");
		
		}

		
	}
});

// Stop propagation on  menu
	tLinks.onclick = function (e) {
		e.stopPropagation();

}
