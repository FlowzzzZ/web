window.count=0;
window.lzh= function(){
	document.getElementById("a").src= "img/bu.jpg";
	document.getElementById("b").src= "img/jiandao.jpg";
	document.getElementById("c").src= "img/shitou.jpg";
	var click= document.getElementById("b");
	click.style.display= "block";
	var click= document.getElementById("result");
	click.style.display= "none";


}
window.start= function(obj){
	var click= document.getElementById("b");
	click.style.display= "none";
	var click= document.getElementById("result");
	click.style.display= "block";
	document.getElementById("c").src= "img/"+obj+".jpg";
	
	document.getElementById("player").value= obj;//把玩家选中的值给player
	var num= Math.floor(Math.random()*3+1);
	if(num=='1'){
		document.getElementById("a").src= "img/bu.jpg";
		document.getElementById("npc").value ="bu";
	}
	if(num=='2'){
		document.getElementById("a").src= "img/jiandao.jpg";
		document.getElementById("npc").value ="jiandao";
	}
	if(num=='3'){
		document.getElementById("a").src= "img/shitou.jpg";
		document.getElementById("npc").value = "shitou";
	}
	var player=document.getElementById("player").value;
	var npc=document.getElementById("npc").value;
	if(player=="bu"&&npc=="bu"){
		document.getElementById("result").innerHTML= "平局";
	}
	if(player=="bu"&&npc=="jiandao"){
		document.getElementById("result").innerHTML= "lose";
	}
	if(player=="bu"&&npc=="shitou"){
		document.getElementById("result").innerHTML= "win";
		count++;
		document.getElementById("cishu").innerHTML=count;
	}
	if(player=="shitou"&&npc=="bu"){
		document.getElementById("result").innerHTML= "lose";
	}
	if(player=="shitou"&&npc=="jiandao"){
		document.getElementById("result").innerHTML= "win";
		count++;
		document.getElementById("cishu").innerHTML=count;
	}
	if(player=="shitou"&&npc=="shitou"){
		document.getElementById("result").innerHTML= "平局";
	}
	if(player=="jiandao"&&npc=="bu"){
		document.getElementById("result").innerHTML= "win";
		count++;
		document.getElementById("cishu").innerHTML=count;
	}
	if(player=="jiandao"&&npc=="jiandao"){
		document.getElementById("result").innerHTML= "平局";
	}
	if(player=="jiandao"&&npc=="shitou"){
		document.getElementById("result").innerHTML= "lose";
	}

}
//window.start = function(obj) {
//var oneClick = document.getElementById("result");
//oneClick.style.display = "block";
//var oneClick = document.getElementById("b");
//oneClick.style.display = "none";
//document.getElementById("c").src = "img/" + obj + ".jpg";
//document.getElementById("player").value = obj;
//var num = Math.floor(Math.random() * 3 + 1);
//if (num == '1') {
//  document.getElementById("a").src = "img/jiandao.jpg";
//  document.getElementById("npc").value = "jiandao";
//}
//if (num == '2') {
//  document.getElementById("a").src = "img/shitou.jpg";
//  document.getElementById("npc").value = "shitou";
//}　
//if (num == '3') {
//  document.getElementById("a").src = "img/bu.jpg";
//  document.getElementById("npc").value = "bu";
//}
//var player = document.getElementById("player").value;
//var npc = document.getElementById("npc").value;
//if (player == "jiandao" && npc == "jiandao") {
//  document.getElementById("result").innerHTML = "Dogfall!";
//}
//if (player == "jiandao" && npc == "shitou") {
//  document.getElementById("result").innerHTML = "You lose!";
//}
//if (player == "jiandao" && npc == "bu") {
//  document.getElementById("result").innerHTML = "You Win!";
//  times++;
//  document.getElementById('cishu').innerHTML = times;
//}
//if (player == "shitou" && npc == "jiandao") {
//  document.getElementById("result").innerHTML = "You Win!";
//  times++
//  document.getElementById('cishu').innerHTML = times;
//}
//if (player == "shitou" && npc == "shitou") {
//  document.getElementById("result").innerHTML = "Dogfall!";
//}
//if (player == "shitou" && npc == "bu") {
//  document.getElementById("result").innerHTML = "You lose!";
//}
//if (player == "bu" && npc == "jiandao") {
//  document.getElementById("result").innerHTML = "You lose!";
//}
//if (player == "bu" && npc == "shitou") {
//  document.getElementById("result").innerHTML = "You Win!";
//  times++
//  document.getElementById('cishu').innerHTML = times;
//}
//if (player == "bu" && npc == "bu") {
//  document.getElementById("result").innerHTML = "Dogfall!";
//}
//}
