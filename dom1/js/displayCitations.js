function displayCitations(){
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode){
		return false;
	}
	var quotes= document.getElementsByTagName("blockquote");
	for(var i=0;i<quotes.length;i++){
		//若没有cite属性 继续循环 直到找到cite执行接下去的步骤
		if(!quotes[i].getAttribute("cite"))
		continue;
		var url= quotes[i].getAttribute("cite");
		var quoteChildren =quotes[i].getElementsByTagName('*');
		if(quoteChildren.length<1)
			continue;
		var elem= quoteChildren[quoteChildren.length-1];
		//创建标记
		var link= document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript= document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}
	
}
addLoadEvent(displayCitations);
