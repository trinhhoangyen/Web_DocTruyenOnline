// JavaScript Document
function hotshow(obj) {
	var li2 = document.getElementById("care-header");
	var li3 = document.getElementById("new-header");
	var div1 = document.getElementById("hot");
	var div2 = document.getElementById("care");
	var div3 = document.getElementById("new");
	obj.style.textDecoration="underline";obj.style.color="red";
	li2.style.textDecoration="none";li2.style.color="#555";
	li3.style.textDecoration="none";li3.style.color="#555";
	div1.style.opacity=1;
	div2.style.opacity=0;
	div3.style.opacity=0;
}
function careshow(obj) {
	var li1 = document.getElementById("hot-header");
	var li3 = document.getElementById("new-header");
	var div1 = document.getElementById("hot");
	var div2 = document.getElementById("care");
	var div3 = document.getElementById("new");
	obj.style.textDecoration="underline";obj.style.color="red";
	li1.style.textDecoration="none";li1.style.color="#555";
	li3.style.textDecoration="none";li3.style.color="#555";
	div1.style.opacity=0;
	div2.style.opacity=1;
	div3.style.opacity=0;
}
function newshow(obj) {
	var li1 = document.getElementById("hot-header");
	var li2 = document.getElementById("care-header");
	var div1 = document.getElementById("hot");
	var div2 = document.getElementById("care");
	var div3 = document.getElementById("new");
	obj.style.textDecoration="underline";obj.style.color="red";
	li1.style.textDecoration="none";li1.style.color="#555";
	li2.style.textDecoration="none";li2.style.color="#555";
	div1.style.opacity=0;
	div2.style.opacity=0;
	div3.style.opacity=1;
}