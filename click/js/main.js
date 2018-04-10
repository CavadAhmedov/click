var menu = document.querySelector(".mymenu");

window.onclick =function(e){
	var xPosition = e.clientX;
	var yPosition = e.clientY;
	menu.style.display = "block";
	menu.style.top = yPosition + "PX";
	menu.style.left = xPosition + "px";
}