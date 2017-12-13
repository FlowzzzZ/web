function addLoadEvent(func){
	var oldonload= window.onload;
	//若没有加载后要执行的函数，立即执行；如果有，加载到之后运行；
	if(typeof window.onload!='function'){
		window.onload= func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	
	var source= whichpic.getAttribute("href");
	var placeholder= document.getElementById("placeholder");
	//set覆盖原有属性
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
	var text= whichpic.getAttribute("title")?whichpic.getAttribute("title"): "";
	var description= document.getElementById("description");
	if(description.firstChild.nodeName==3){
	description.firstChild.nodeValue= text;
	}
	}
	return true;
}
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links= gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		link[i].onclick =function(){
			return showPic(this)?false:true;
		}
	}
}

function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	
	var placeholder= document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description= document.createElement("p");
	description.setAttribute("id","description");
	var desctext= document.createTextNode("choose an image");
	description.appendChild(desctext);
	document.body.appendChild(placeholder);
	document.body.appendChild(description);
	var gallery= docuemnt.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function insertAfter(newElement,targetElement){
	var parent= targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);