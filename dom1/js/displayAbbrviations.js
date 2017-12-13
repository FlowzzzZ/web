function displayAbbrviations(){
	//检查兼容性
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode){
		return false;
	}
	//遍历所有缩略词
	var abbrviations= document.getElementsByTagName("abbr");
	if(abbrviations.length<1) return false;
	var defs=new Array();
	//遍历缩略词 并存储在数组里
	for(var i=0;i<abbrviations.length;i++){
		var current_abbr= abbrviations[i];
		var definition= current_abbr.getAttribute("title");
		var key= current_abbr.lastChild.nodeValue;
		defs[key]=definition;
	}

	//创建定义列表
	var dlist= document.createElement("dl");
	
	for(key in defs){
		var definition= defs[key];
		//定义标题
		var dtitle= document.createElement("dt");
		var	dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//定义内容
		var ddesc= document.createElement("dd");
		var ddesc_text= document.createTextNode(definition);
		//添加到定义列表
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	
	
	
	}
	//创建标题
	var header= document.createElement("h2");
	var header_text= document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//添加到主体
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbrviations);