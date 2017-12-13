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