function styleHeaderSibling(){
	if(!document.getElementsByTagName) return false;
	var header= document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<headers;i++){
		elem=getnextElement(headers[i].nextSibling);
		elem.style.fontWeight="bold";
		ele.style.fontSize="1.2em";
	}
}
function getNextElement(node){
	if(node.npdetype==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
addLoadEvent(styleHeaderSibling);