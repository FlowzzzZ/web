$(function() {

	//1.初始化Table
	//js里，每个函数都是一个对象
	var oTable = new TableInit();
	oTable.Init();

	//2.初始化Button的点击事件
	var oButtonInit = new ButtonInit();
	oButtonInit.Init();

});

var TableInit = function() {
	var oTableInit = new Object();
	//初始化Table

	oTableInit.Init = function() {

		$('#table').bootstrapTable({
			//			url: basePath + "/WmsExplan/queryAllExplan.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON", //发送数据类型
			contentType: 'application/json', //接收数据类型

			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false, //取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'pickdetailId', //排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "pickdetailId", //每一行的唯一标识，一般为主键列
			cardView: false, //是否显示详细视图
			sortStable: true, //是否可排序
			//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
			responseHandler: function(res) {
				console.log(formatData(res));
				return formatData(res);
			},

			//列名
			columns: [{

					checkbox: true,

				},
				{
					field: 'pickdetailId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'pick',
					title: '拣货',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return "<span class='glyphicon glyphicon-hand-right' id='pick-modal'></span>";
					}
				}, {
					field: 'pickdetailNumber',
					title: '拣货明细编号',
					align: "center",
					valign: "middle",

				}, {
					field: 'detailId',
					title: '出库明细序号',
					align: "center",
					valign: "middle",

				}, {
					//仅展示时候使用
					field: 'storagelocationcode',
					title: '库位代码',
					align: "center",
					valign: "middle",

				}, {
					field: 'storagelocationId',
					title: '库位序号',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'remainpickquantity',
					title: '待拣数量',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'weight',
					title: '重量',
					align: "center",
					valign: "middle",
				}, {
					field: 'netweight',
					title: '净重',
					align: "center",
					valign: "middle",
				}, {
					field: 'volume',
					title: '体积',
					align: "center",
					valign: "middle",
				}, {
					field: 'payableton',
					title: '计费吨',
					align: "center",
					valign: "middle",

				}, {
					field: 'pickedquantity',
					title: '实拣数量',
					align: "center",
					valign: "middle",

				}, {
					field: 'pickinstruction ',
					title: '拣货说明',
					align: "center",
					valign: "middle",

				}, {
					field: 'pickman',
					title: '拣货人',
					align: "center",
					valign: "middle",
				}, {
					field: 'makeorderdate',
					title: '制单日期',
					align: "center",
					valign: "middle",

				}, {
					field: 'makeorderman',
					title: '制单人',
					align: "center",
					valign: "middle",
				}, {
					field: 'quality',
					title: '质量',
					align: "center",
					valign: "middle",
					// visible:false	
				}, {
					field: 'picktime',
					title: '拣货时间',
					align: "center",
					valign: "middle",

				}, {
					field: 'stockId',
					title: '存货序号',
					align: "center",
					valign: "middle",
				}, {
					field: 'isfinished ',
					title: '是否完成',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						while(value != null) {
							if(value == 0) {
								return "否"
							} else return "是"
						}
					}
				}
			],
			data: [{}]

		});
	};

	// 得到查询的参数
	oTableInit.queryParams = function(params) {
		window.a = (params.offset / params.limit) + 1;
		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "pickdetailId",

		};

		console.log(temp);

		return temp;

	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var pickdetail = data.data.data;
	var l = [];
	for(var i = 0; i < pickdetail.length; i++) {

		var d = {
			'pickdetailId': pickdetail[i].pickdetailId,
			'pickdetailNumber ': pickdetail[i].pickdetailNumber,
			'detailId ': pickdetail[i].detailId,
			'storagelocationcode ': pickdetail[i].storagelocationcode,
			'storagelocationId ': pickdetail[i].storagelocationId,
			'remainpickquantity ': pickdetail[i].remainpickquantity,
			'weight ': pickdetail[i].weight,
			'netweight ': pickdetail[i].netweight,
			'volume ': pickdetail[i].volume,
			'payableton ': pickdetail[i].payableton,
			'pickedquantity ': pickdetail[i].pickedquantity,
			'pickinstruction ': pickdetail[i].pickinstruction,
			'pickman ': pickdetail[i].pickman,
			'makeorderdate': pickdetail[i].makeorderdate,
			'makeorderman': pickdetail[i].makeorderman,
			'quality': pickdetail[i].quality,
			'picktime ': pickdetail[i].picktime,
			'stockId ': pickdetail[i].stockId,
			'isfinished ': pickdetail[i].isfinished,

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
		var $table = $('#table')

		//拣货，点击弹出modal
		$('#pick-modal').click(function() {
			$('#pickTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'pickdetailId ', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: pickTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "pickdetailId ", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {
					console.log(formatData(res));
					return formatData(res);
				},

				//列名
				columns: [{
					field: 'exquantity',
					title: '出库数量',
					align: "center",
					valign: "middle",

				}, {
					field: 'jianhuoshuoming', //未知
					title: '拣货说明',
					align: "center",
					valign: "middle",

				}, {
					field: 'kuwei', //未知
					title: '库位',
					align: "center",
					valign: "middle",

				}, {
					field: 'cunhuoshuliang', //未知
					title: '存货数量',
					align: "center",
					valign: "middle",

				}, {

					field: 'suodingshuliang',
					title: '锁定数量',
					align: "center",
					valign: "middle",

				}, {
					field: 'specifiationtype',
					title: '规格',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'batchnumber',
					title: '批号',
					align: "center",
					valign: "middle",
				}, {
					field: 'serialNumber',
					title: '序列码',
					align: "center",
					valign: "middle",

				}, {
					field: 'registration',
					title: '注册证',
					align: "center",
					valign: "middle",
				}, {
					field: 'producedate',
					title: '生产日期',
					align: "center",
					valign: "middle",

				}, {
					field: 'failuredate',
					title: '失效日期',
					align: "center",
					valign: "middle",
				}, {
					field: 'goodsstatus',
					title: '货品状态',
					align: "center",
					valign: "middle",
				}, {
					field: 'remark',
					title: '备注',
					align: "center",
					valign: "middle",
				}],
				data: [{

				}]

			});
			pickTable.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "pickdetailId ",
					sortOrder: params.order,

				};

				return temp;

			};
			
			
			$('#pick').modal('show');
		});
		
		//双击拣货
		$('#table').dblclick(function(){
//			
			$("#btn_list").on("click", list);
			$("#btn_pick").on("click", pick);
			$("#btn_check").on("click",check);
			$('#doublePick').modal('show');
			$(".modal-backdrop").remove(); //移除modal背景，便于搜索时查看
		})
	};

	return oInit;
};

//增加保存
var list = function() {
	$('#listTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'pickdetailId ', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: listTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "pickdetailId ", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {
					console.log(formatData(res));
					return formatData(res);
				},

				//列名
				columns: [{
					field: 'goodsname',
					title: '商品名称',
					align: "center",
					valign: "middle",

				}, {
					field: 'specifiationtype', 
					title: '规格型号',
					align: "center",
					valign: "middle",

				}, {
					field: 'kuwei', //未知
					title: '库位',
					align: "center",
					valign: "middle",

				}, {
					field: 'cunhuoshuliang', //未知
					title: '存货数量',
					align: "center",
					valign: "middle",

				}, {

					field: 'daijian', //未知
					title: '待检',
					align: "center",
					valign: "middle",

				}, {
					field: 'weight',
					title: '重量',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'netweight',
					title: '净重',
					align: "center",
					valign: "middle",
				}, {
					field: 'volume',
					title: '体积',
					align: "center",
					valign: "middle",

				}, {
					field: 'payableton',
					title: '计费吨',
					align: "center",
					valign: "middle",
				}, {
					field: 'xiajia',//说明
					title: '下架',
					align: "center",
					valign: "middle",

				}, {
					field: 'pickinstruction',
					title: '说明',
					align: "center",
					valign: "middle",
				}, {
					field: 'picktime',
					title: '拣货时间',
					align: "center",
					valign: "middle",
				} 
				],
				data: [{

				}]

			});
			listTable.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "pickdetailId ",
					sortOrder: params.order,

				};

				return temp;

			};
			
			
			$('#list').modal('show');
}

//编辑保存
var pick = function() {
	//打印拣货单	
};

//提交搜索
var check = function() {
	//打印出库复核检验单

};