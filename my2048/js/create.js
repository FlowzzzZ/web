var arr=[];
function $(id) {
 	return document.getElementById(id);
}

var obj ={
	ROW: 4,
 CELL: 4,
 score: 0,
 r: 0,
 c: 0,
 f: 0, //r行 c列 f查找的下一位置
 keyCd: 0,
 eleFragment: "",
 createEle: 0, //是否需要创建元素
  //文档片段变量
 //游戏开始
 gameStart: function() {
 obj.init();
 document.onkeydown = function(e) { //自动获得事件对象
 switch (e.keyCode) { //判断按键号
 case 37:
 obj.keyCd = 1;
 obj.moveLeft();
 break;
 case 38:
 obj.keyCd = 2;
 obj.moveUp();
 break;
 case 39:
 obj.keyCd = 1;
 obj.moveRight();
 break;
 case 40:
 obj.keyCd = 2;
 obj.moveDown();
 break;
 }
 $("score").innerHTML = obj.score; //更新分数
 }
 },
 //初始化
	init: function() {
 obj.eleFragment = document.createDocumentFragment();
 for (r = 0; r < obj.ROW; r++) {
 arr.push([]);
 for (c = 0; c < obj.CELL; c++) {
 arr[r][c] = 0;
 if (obj.createEle == 1) {
 obj.create(r, c);
 }
 }
 }
 if (obj.createEle == 1) {
 obj.createEle = 0;
 $("gridPanel").innerHTML = ""; //清空原有的元素
 $("gridPanel").appendChild(obj.eleFragment); //添加元素
 }
 obj.score = 0;
 $("score").innerHTML = obj.score;
 $("game").style.display = "none";
 $("gameover").style.display = "none";
 obj.random(); //开始游戏随机生成两个数
 obj.random();
 obj.updateView();
 },
	//grid负责遮盖 cell用于数值显示,创建单个
create: function(r, c) {
var grid, cell;
var increment = 14,
grWidth,grHeight,
grMarginTop,grMarginLeft,
ceWidth,ceHeight;
//create: function(r, c) {
// var grid, cell;
// var increment = 14,
// grWidth, grHeight, 
// grMarginTop, grMarginLeft, 
// ceWidth, ceHight;
		grid = document.createElement("div");
 cell = document.createElement("div");
		grid.id = "g" + r + c;
 grid.className = "grid";
 cell.id = "c" + r + c;
 cell.className = "cell";
		grWidth=grHeight=ceWidth=ceHeight= 66 + (6 - obj.ROW) * increment;
		grMarginTop=grMarginLeft= (480-grWidth*obj.ROW)/(obj.ROW+1);
		grid.style.width= grWidth+"px";
		grid.style.height= grHeight+"px";
		grid.style.marginTop= grMarginTop+"px";
		grid.style.marginLeft= grMarginLeft+"px";
		cell.style.width= ceWidth+"px";
		cell.style.height= ceHeight+"px";
		cell.style.marginTop= grMarginTop+"px";
		cell.style.marginLeft= grMarginLeft+"px";
		//r，c从0到3
		cell.style.top = grMarginTop + r * (grMarginTop + ceWidth) + "px";
 		cell.style.left = grMarginLeft + c * (grMarginLeft + ceHeight) + "px";
 		cell.style.lineHeight = ceHeight + "px";
 		cell.style.fontSize = 30 + (6 - obj.ROW) * 10 + "px";
		obj.eleFragment.appendChild(grid);
		obj.eleFragment.appendChild(cell);
		
	},
	//随机产生一个新的数
	random: function() {
 while (1) {
 var row = Math.floor(Math.random() * obj.ROW);
 var cell = Math.floor(Math.random() * obj.CELL);
 if (arr[row][cell] == 0) { //判断生成的随机数位置为0才随机生成2或4
 arr[row][cell] = (Math.random() > 0.5) ? 4 : 2;
 break;
 }
 }
 // var row = Math.floor(Math.random() * 4);
 // var cell = Math.floor(Math.random() * 4);
 // if (arr[row][cell] == 0) { //判断生成的随机数位置为0才随机生成2或4
 // arr[row][cell] = (Math.random() > 0.5) ? 4 : 2;
 // return;
 // }
 // obj.random();//递归影响执行效率
 },
 //更新页面
	updateView: function(){
		var win=0;
		for (r=0;r<obj.ROW;r++){
			for(c=0;c<obj.CELL;c++){
				if(arr[r][c]==0){
					$("c"+r+c).innerHTML ="";
					$("c"+r+c).className ="cell";
				}
				else{
					$("c"+r+c).innerHTML = arr[r][c];
					$("c"+r+c).className= "cell n"+arr[r][c];
					if(obj.ROW==4&&arr[r][c]==2048){
						win=1;
					}
					
					
				}
			}
		}
		if(win=1){
			$("game").style.diplay = "block";
			$("gameover").style.display= "block";
			$("Score").innerHTML= "you win!<br>Score:"+obj.score;
			
		}
		if (obj.isGameover()){
			$("game").style.diplay = "block";
			$("gameover").style.display= "block";
			$("Score").innerHTML= "Game Over!<br>Score:"+obj.score;
			console.log("Game Over");
		}
		
	},
	isGameOver:function(){
		for(r=0;r<obj.ROW;r++){
			for(c=0;c<obj.CELL;c++){
				if(arr[r][c]==0){
						return false;
				}
				//arr[0[0]到arr[3][3],obj.CELL=4,防止超出
				else if(c!=obj.CELL-1&&arr[r][c]==arr[r][c+1]){
					return false;
				}
				else if(r!=obj.ROW-1&&arr[r][c]==arr[r+1][c]){
					return false;	
				}
			}
		}
	return true;
	},
//	//左按键
//	moveLeft: function(){
//		obj.move(function(){
//			for(r=0;r<obj.ROW;r++){
//				obj.dealToLeft(r);
//			}
//		})
//	},
//	//右按键
//	moveRight: function() {
// 		obj.move(function() {
// 			for (r = 0; r < obj.ROW; r++) {
// 				obj.dealToRight(r);
// 			}
// 		})
// 	},
// 	//上按键
// 	moveUp: function() {
// 		obj.move(function() {
// 			for (c = 0; c < obj.CELL; c++) {
// 				obj.dealToUp(c);
// 			}
// 		})
// 	},
// 	//下按键
// 	moveDown: function() {
// 		obj.move(function() {
// 			for (c = 0; c < obj.CELL; c++) {
// 				obj.dealToDown(c);
// 				}
// 			})
// 		
// 	},
//	//对比用函数
//	move: function(a){
//		var before,after;
//		before=arr.toString;
//		a();
//		after= arr.toString();
//		if(before!=after){
//			obj.random;
//			obj.updateView();
//		}
//	},
//	//计算用
//	dealToLeft: function(r){
//		var next;
//		for (c = 0; c < obj.ROW; c++){
//			next =find(r, c, c + 1, obj.CELL, 1);
//			if(next==null){
//				break;
//			}
//			if(arr[r][c]==0){
//				arr[r][c]=arr[r][next];
//				arr[r][c]=0;
//				c--;//再循环一次 看有没有相同的值
//			}
//			else if(arr[r][c]==arr[r][next]){
//				arr[r][c]*=2;
//				arr[r][next]=0;
//				obj.score+=arr[r][c];
//			}
//		}
//	},
//	dealToRight: function(r) {
// 	var next;
// 	for (c = obj.CELL - 1; c >= 0; c--) {
// 		next = obj.find(r, c, c - 1, 0, -1); //找出第一个不为0的位置
// 		if (next == null) break; //没有找到就返回
// 		//如果当前位置为0
// 		if (arr[r][c] == 0) {
// 			arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
// 			arr[r][next] = 0; //找到的位置清0
// 			c++; //再次循环多一次，查看后面否有值与替换后的值相同，
// 		} 
// 		else if (arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
// 				arr[r][c] *= 2;
// 				arr[r][next] = 0;
// 				obj.score += arr[r][c];
// 			}
// 		}
// 	},
// 	dealToUp: function(c) {
// 		var next;
// 		for (r = 0; r < obj.ROW; r++) {
// 		next = obj.find(r, c, r + 1, obj.ROW, 1); //找出第一个不为0的位置
// 		if (next == null) break;
// 			//如果当前位置为0
// 			if (arr[r][c] == 0) {
// 				arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
// 				arr[next][c] = 0; //找到的位置清0
// 				r--; //再次循环多一次，查看后面否有值与替换后的值相同
// 			} 
// 			else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
// 					arr[r][c] *= 2;
// 					arr[next][c] = 0;
// 					obj.score += arr[r][c];
// 					}
// 				}
// 			},
// 		dealToDown: function(c) {
// 		var next;
// 		for (r = obj.ROW - 1; r >= 0; r--) {
// 			next = obj.find(r, c, r - 1, 0, -1); //找出第一个不为0的位置
// 			if (next == null) {
// 			break;
// 			}
// //如果当前位置为0
// 		if (arr[r][c] == 0) {
// 			arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
// 			arr[next][c] = 0; //找到的位置清0
// 			r++; //再次循环多一次，查看后面否有值与替换后的值相同
// 		} 
// 		else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
// 			arr[r][c] *= 2;
// 			arr[next][c] = 0;
// 			obj.score += arr[r][c];
// 			}
// 		}
// 	},
//	//找不为0的位置
//	find: function(r,c,start,condition,direction){
//		//判断上下还是左右
//		if(obj.keycd==2){
//			//判断上还是下
//			if(direction==1){
//				for (var f=start;f<condition;f++){
//					if(arr[f][c]!=0){
//						return f;
//					}
//				}
//			}
//			else{
//				for (var f=start;f<condition;f++){
//					if(arr[f][c]!=0){
//						return f;
//					}
//				}	
//			}
//		}
//		else{
//			if(direction==1){
//				for (var f=start;f<condition;f++){
//					if(arr[r][f]!=0){
//						return f;
//					}
//				}
//			}
//			else{
//				for (var f=start;f<condition;f++){
//					if(arr[r][f]!=0){
//						return f;
//					}
//				}	
//			}
//		}
//	return null;	
//		
//		
//	}
//	
}
window.onload = function() {
 	obj.createEle = 1;
 	obj.gameStart();
	
	
	
	
}	
