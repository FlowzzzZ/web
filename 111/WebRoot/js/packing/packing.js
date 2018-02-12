$(function() {

	//初始化Button的点击事件
	var oButtonInit = new ButtonInit();
	oButtonInit.Init();

});


var formatData = function(data) {
	var packing = data.data.data;
	var l = [];
	for(var i = 0; i < packing.length; i++) {

		var d = {
			'boxNumber': packing[i].boxNumber,
			'boxtype': packing[i].boxtype,
			'state': packing[i].state,
			'zhouzhuanxiang': packing[i].zhouzhuanxiang,
			
			
		}
		l.push(d)

	}
	var t = {
		"total": data.data.totalCount,
		"rows": l
	};
	return t
};

var ButtonInit = function() {
	var oInit = new Object();
	
	oInit.Init = function() {
		//初始化页面上面的按钮事件
		

		//选择箱子
		
		$('#btn_packing').click(function() {
			$('#boxIdTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'boxNumber', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: boxIdTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "boxNumber", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {

					return formatData(res);
				},

				//列名
				columns: [{
					field: 'boxNumber', 
					title: '箱号',
					align: "center",
					valign: "middle",

				}, {
					field: 'boxtype',
					title: '箱型',
					align: "center",
					valign: "middle",

				}, {
					field: 'state', 
					title: '状态',
					align: "center",
					valign: "middle",
					width: '200'

				}, {
					field: 'zhouzhuanxiang', //未知
					title: '周转箱',
					align: "center",
					valign: "middle",

				}
				],
				data: [{
					goodsId: "10086"
				}]

			});
			boxIdTable.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "boxNumber",
					sortOrder: params.order,
					
				};

				return temp;

			};
//			
			
			$('#packing-modal').modal('show');
			
		
		
		});


		
	
	
			$('#btn_choseGoods').click(function() {
			$('#choseGoodsTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'boxNumber', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: choseGoodsTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "boxNumber", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {

					return formatData(res);
				},

				//列名
				columns: [{
					field: 'goodsname', 
					title: '名称',
					align: "center",
					valign: "middle",

				}, {
					field: 'specifiationtype',
					title: '规格',
					align: "center",
					valign: "middle",

				}, {
					field: 'batchnumber', 
					title: '批号',
					align: "center",
					valign: "middle",
					

				}, {
					field: 'serialNumber', 
					title: '序列号',
					align: "center",
					valign: "middle",

				},{
					field: 'pickquantity',
					title: '拣货数量',
					align: "center",
					valign: "middle",

				},{
					field: 'packingquantity',
					title: '装箱数量',
					align: "center",
					valign: "middle",

				}
				],
				data: [{
					goodsId: "10086"
				}]

			});
			choseGoodsTable.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "boxNumber",
					sortOrder: params.order,
					
				};

				return temp;

			};
//			
			
			$('#choseGoods-modal').modal('show');
			
		
		
		});
		
		//保存
		
			$("#btn_submit").on("click", addProduct);
			//展示modal
			
			
			

		
		


		
	};

	return oInit;
};


var addProduct=function(){
	//do sth
}


