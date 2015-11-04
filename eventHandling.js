var outputTarget = document.getElementById("output-target");
var guinneaPig = document.getElementById("guinea-pig");

// OUTPUT-TARGET REFLECTS SECTION USER CLICKS ON

document.querySelector("body").addEventListener("click", function (event) {
  if (event.target.className === "article-section") {
  	var sectionContent = event.target.innerHTML;
  	outputTarget.innerHTML = "You clicked on the " + sectionContent + " section.";  	
  }
});

// OUTPUT-TARGET RESPONDS TO USER MOUSEOVER PAGE TITLE

var pageTitle = document.getElementById("page-title");
pageTitle.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
});

// OUTPUT-TARGET RESPONDS TO USER MOUSEOUT PAGE TITLE

pageTitle.addEventListener("mouseout", function() {
	outputTarget.innerHTML = "You left me!!";
});

// OUTPUT-TARGET REFLECTS USER INPUT

var inputField = document.getElementById("keypress-input");
inputField.addEventListener("keyup", function(e) {
	outputTarget.innerHTML = e.target.value;
});

// GUINNEA PIG CHNAGES ACCORDING TO BUTTON CLICK BY EXTRACTING THE ID AND MATCHING TO CORRESPONDING (AND IDENTICAL) CLASS NAME

document.querySelector("body").addEventListener("click", function (event) {
	var changeMode = event.target.id;
	guinneaPig.className += changeMode + " ";
});









