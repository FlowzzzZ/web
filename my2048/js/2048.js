var arr = [];
function $(id) {
 return document.getElementById(id);
// $(id)是js document.getElementById(id)的简写
//定义了这个方法 以后调用的时候就可以直接用$(id).innnerHTML 或者$(id).innerText
 }
 
 var obj = {
 ROW: 4,
 CELL: 4,
 r: 0,
 c: 0,
 f: 0, //r行 c列 f查找的下一位置
 keyCd: 0,
 score: 0,
 createEle: 0, //是否需要创建元素
 eleFragment: "", //文档片段变量
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
 //创建div元素，添加到gridPanel中
 
 create: function(r, c) {
 var grid, cell;
 var increment = 18,
 grWidth, grHeight, grMarginTop, grMarginLeft, ceWidth, ceHight;
 grid = document.createElement("div");
 cell = document.createElement("div");
 grid.id = "g" + r + c;
 grid.className = "grid";
 cell.id = "c" + r + c;
 cell.className = "cell";
 
 
 grWidth = grHeight = ceWidth = ceHight = 66 + (6 - obj.ROW) * increment; //优化后
 grMarginTop = grMarginLeft = (480 - grWidth * obj.ROW) / (obj.ROW + 1);
 grid.style.width = grWidth + "px";
 grid.style.height = grHeight + "px";
 grid.style.marginTop = grMarginTop + "px";
 grid.style.marginLeft = grMarginLeft + "px";
 cell.style.width = ceWidth + "px";
 cell.style.height = ceHight + "px";
 cell.style.top = grMarginTop + r * (grMarginTop + ceWidth) + "px";
 cell.style.left = grMarginLeft + c * (grMarginLeft + ceHight) + "px";
 cell.style.lineHeight = ceHight + "px";
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
 
 },
 //更新页面
 updateView: function() {
 var win = 0;
 for (r = 0; r < obj.ROW; r++) {
 for (c = 0; c < obj.CELL; c++) {
 if (arr[r][c] == 0) { //值为0的不显示
 $("c" + r + c).innerHTML = ""; //0不显示
 $("c" + r + c).className = "cell" //清除样式
 } else {
 $("c" + r + c).innerHTML = arr[r][c];
 $("c" + r + c).className = "cell n" + arr[r][c]; //添加不同数字的颜色
if (obj.ROW == 4 && arr[r][c] == 2048) {
 win = 1;
 } 
 }
 }
 }
 
 if (win == 1) { //通关
 $("game").style.display = "block";
 $("gameover").style.display = "block";
 $("Score").innerHTML = "You win!<br>Score:" + obj.score;
 }
 if (obj.isGameOver()) { //游戏失败
 $("game").style.display = "block";
 $("gameover").style.display = "block";
 $("Score").innerHTML = "GAME OVER!<br>Score:" + obj.score;
 console.log("gameover");
 }
 },
 //游戏失败
 isGameOver: function() {
 for (r = 0; r < obj.ROW; r++) {
 for (c = 0; c < obj.CELL; c++) {
 if (arr[r][c] == 0) { //有0还不是gameover
 return false;
 } else if (c != obj.CELL - 1 && arr[r][c] == arr[r][c + 1]) { //左往右 前一个和下一个不相等
 return false;
 } else if (r != obj.ROW - 1 && arr[r][c] == arr[r + 1][c]) { //上往下 上一个和下一个不相等
 return false;
 }
 }
 }
 return true;
 },
 //查找下一个不为0的数值的位置
// find: function(r, c, start, condition, direction) {
// if (obj.keyCd == 2) { //上下按键
// if (direction == 1) { //向上按键 f++
// for (var f = start; f < condition; f += direction) {
// if (arr[f][c] != 0) {
// return f;
// }
// }
// } else { //向下按键 f--
// for (var f = start; f >= condition; f += direction) {
// if (arr[f][c] != 0) {
// return f;
// }
// }
// }
// } else { //左右按键
// if (direction == 1) { //左按键 f++
// for (var f = start; f < condition; f += direction) {
// if (arr[r][f] != 0) {
// return f;
// }
// }
// } else { //右按键 f--
// for (var f = start; f >= condition; f += direction) {
// if (arr[r][f] != 0) {
// return f;
// }
// }
// }
// }
// return null; //循环结束仍然没有找到！=0的数值，返回null
// },
// //左按键的处理
// dealToLeft: function(r) {
// var next;
// for (c = 0; c < obj.ROW; c++) {
// next = obj.find(r, c, c + 1, obj.CELL, 1); //找出第一个不为0的位置
// if (next == null) break; //没有找到就返回
// //如果当前位置为0
// if (arr[r][c] == 0) {
// arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
// arr[r][next] = 0; //找到的位置清0
// c--; //再次循环多一次，查看后面否有值与替换后的值相同，
// } else if (arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
// arr[r][c] *= 2;
// arr[r][next] = 0;
// obj.score += arr[r][c];
// }
// }
// },
// move: function(itertor) {
// var before, //没处理前
// after; //after处理后
// before = arr.toString();
// itertor(); //执行for函数
// after = arr.toString();
// if (before != after) { //前后对比，如果不同就update
// obj.random();
// obj.updateView();
// }
// },
// moveLeft: function() {
// obj.move(function() {
// for (r = 0; r < obj.ROW; r++) {
// obj.dealToLeft(r);
// }
// })
// // if 当前位置 不为零
// // 从当前位置，下一个成员开始，遍历，
// // 如果找到，与当前位置相等的数，
// // 两者相加，并把不为零的成员，设置为零
// // 如果 当前位置是 零
// // 从当前位置下一个成员开始遍历
// // 如果找到 第一个不为零的成员
// // 当前位置数值设置为这个不为零的成员的值 ，并且把那个不为零的成员设置为 0
// },
// //右按键处理
// dealToRight: function(r) {
// var next;
// for (c = obj.CELL - 1; c >= 0; c--) {
// next = obj.find(r, c, c - 1, 0, -1); //找出第一个不为0的位置
// if (next == null) break; //没有找到就返回
// //如果当前位置为0
// if (arr[r][c] == 0) {
// arr[r][c] = arr[r][next]; //把找到的不为0的数值替换为当前位置的值
// arr[r][next] = 0; //找到的位置清0
// c++; //再次循环多一次，查看后面否有值与替换后的值相同，
// } else if (arr[r][c] == arr[r][next]) { //如果当前位置与找到的位置数值相等，则相加
// arr[r][c] *= 2;
// arr[r][next] = 0;
// obj.score += arr[r][c];
// }
// }
// },
// moveRight: function() {
// obj.move(function() {
// for (r = 0; r < obj.ROW; r++) {
// obj.dealToRight(r);
// }
// })
// },
// //上按键处理
// dealToUp: function(c) {
// var next;
// for (r = 0; r < obj.ROW; r++) {
// next = obj.find(r, c, r + 1, obj.ROW, 1); //找出第一个不为0的位置
// if (next == null) break;
// //如果当前位置为0
// if (arr[r][c] == 0) {
// arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
// arr[next][c] = 0; //找到的位置清0
// r--; //再次循环多一次，查看后面否有值与替换后的值相同
// } else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
// arr[r][c] *= 2;
// arr[next][c] = 0;
// obj.score += arr[r][c];
// }
// }
// },
// moveUp: function() {
// obj.move(function() {
// for (c = 0; c < obj.CELL; c++) {
// obj.dealToUp(c);
// }
// })
// },
// //下按键处理
// dealToDown: function(c) {
// var next;
// for (r = obj.ROW - 1; r >= 0; r--) {
// next = obj.find(r, c, r - 1, 0, -1); //找出第一个不为0的位置
// if (next == null) {
// break;
// }
// //如果当前位置为0
// if (arr[r][c] == 0) {
// arr[r][c] = arr[next][c]; //把找到的不为0的数值替换为当前位置的值
// arr[next][c] = 0; //找到的位置清0
// r++; //再次循环多一次，查看后面否有值与替换后的值相同
// } else if (arr[r][c] == arr[next][c]) { //如果当前位置与找到的位置数值相等，则相加
// arr[r][c] *= 2;
// arr[next][c] = 0;
// obj.score += arr[r][c];
// }
// }
// },
// moveDown: function() {
// obj.move(function() {
// for (c = 0; c < obj.CELL; c++) {
// obj.dealToDown(c);
// }
// })
// }
// }
}
 window.onload = function() {
 obj.createEle = 1;
 obj.gameStart();
 }
 //切换模式
 