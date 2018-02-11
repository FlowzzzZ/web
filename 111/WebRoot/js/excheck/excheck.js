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
			checkboxHeader: true, //这里里修改了源码
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'excheckId', //排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "excheckId", //每一行的唯一标识，一般为主键列
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
					field: 'excheckId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'excheckNumber',
					title: '出库复核编号',
					align: "center",
					valign: "middle",
					
				}, {
					field: 'detailId',
					title: '明细编号',
					align: "center",
					valign: "middle",

				}, {
					field: 'detailId',
					title: '出库明细序号',
					align: "center",
					valign: "middle",

				}, {
					
					field: 'checkquantity',
					title: '复核数量',
					align: "center",
					valign: "middle",

				}, {
					field: 'checkresult',
					title: '复核结果',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'checkman',
					title: '复核人',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'checkinstruction',
					title: '复核说明',
					align: "center",
					valign: "middle",
				},{
					field: 'makeorderdate',
					title: '制单日期',
					align: "center",
					valign: "middle",

				}, {
					field: 'makeorderman',
					title: '制单人',
					align: "center",
					valign: "middle",
				}, 
				
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
			orderBy: "excheckId",

		};

		console.log(temp);

		return temp;

	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var excheck = data.data.data;
	var l = [];
	for(var i = 0; i < excheck.length; i++) {

		var d = {
			'excheckId': excheck[i].excheckId,
			'excheckNumber ': excheck[i].excheckNumber,
			'detailId ': excheck[i].detailId,
			'checkquantity ': excheck[i].checkquantity,
			'checkresult ': excheck[i].checkresult,
			'checkman ': excheck[i].checkman,
			'checkinstruction ': excheck[i].checkinstruction,
			'checkstate ': excheck[i].checkstate,
			'makeorderdate': excheck[i].makeorderdate,
			'makeorderman': excheck[i].makeorderman,
			
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

		//出库复核编号，点击弹出modal
		
		
		//双击出库复核编号
		$('#table').dblclick(function(){
//			
			$("#btn_list").on("click", list);
			$("#btn_excheckNumber").on("click", excheckNumber);
			$("#btn_check").on("click",check);
			$('#menu').modal('show');
			$(".modal-backdrop").remove(); //移除modal背景，便于搜索时查看
		})
		$('#myCheckboxHeader').click(function(){
//			
			$("#btn_list").on("click", list);
			$("#btn_excheckNumber").on("click", excheckNumber);
			$("#btn_check").on("click",check);
			$('#menu').modal('show');
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
				sortName: 'excheckId ', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: listTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "excheckId ", //每一行的唯一标识，一般为主键列
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
					field: 'checkinstruction',
					title: '复核说明',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'checkstate',
					title: '复核状态',
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
					field: 'excheckNumberinstruction',
					title: '说明',
					align: "center",
					valign: "middle",
				}, {
					field: 'excheckNumbertime',
					title: '出库复核编号时间',
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
					orderBy: "excheckId ",
					sortOrder: params.order,

				};

				return temp;

			};
			
			
			$('#list').modal('show');
}

//编辑保存
var excheckNumber = function() {
	//打印出库复核编号单	
};

//提交搜索
var check = function() {
	//打印出库复核检验单

};