var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete Item";
	li.appendChild(deleteButton);
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
	li.children[0].addEventListener("click", function() {
		li.remove();
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for(var i = 0; i < ul.children.length; i++) {
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete Item";
	ul.children[i].appendChild(deleteButton);
};

li.forEach(function(li) {
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
});

li.forEach(function(li) {
	li.children[0].addEventListener("click", function() {
		li.remove();
	});
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);