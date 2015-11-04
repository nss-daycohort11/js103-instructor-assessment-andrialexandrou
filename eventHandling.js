// Note: Output target is the output-target element.



var outputTarget = document.getElementById("output-target");
var guinneaPig = document.getElementById("guinea-pig");

// var section = document.getElementsByClassName("article-section");
// var sectionContent = section.innerHTML;
// sectionContent.addEventListener("clicked", function() {
// 	outputTarget.innerHTML = "You clicked on the " + sectionContent + " section.";
// });


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

// var section = document.getElementsByClassName("article-section");

// section.addEventListener("click", function(e) {
// 	console.log("event:", e.target.value);
// });













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
	console.log("e", e);
	outputTarget.innerHTML = e.target.value;
});


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var addColorButton = document.getElementById("add-color");
addColorButton.addEventListener("click", function() {
	console.log("guinneaPig", guinneaPig);
	guinneaPig.addAttribute(class="color-me-blue");
})




// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

var makeLargeButton = document.getElementById("make-large");
makeLargeButton.addEventListener("click", function() {
	console.log("guinnea", guinneaPig);
	// guinneaPig.addClass("make-me-larger");
})


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

// var addColorButton = document.getElementById("add-color");

// border-me

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

// var addColorButton = document.getElementById("add-color");

// rounded-border-me







