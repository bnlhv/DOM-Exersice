var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("toDelete");


//Event listener to delete li after click delete button
for(var i=0;i<deleteBtns.length;i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(ev){
	ev.target.removeEventListener("click", removeParent, false);
	ev.target.parentNode.remove();
}

//to make done sign
for(var i=0;i<list.length;i++){
	list[i].addEventListener("click", listClick);
}

function listClick(){
	this.classList.toggle("done");
}

//to create list element
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//to create list element after pressing enter with keyboard
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

buttonEnter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

