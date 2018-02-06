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
			url: basePath + "/WmsExhistory/queryAllExhistory.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON", //发送数据类型
			contentType: 'application/json', //接收数据类型

			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false, //取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'exhistoryId', //排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			showColumns: true, //是否显示所有的列
			showRefresh: false, //是否显示刷新按钮
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "exhistoryId", //每一行的唯一标识，一般为主键列

			showToggle: false, //是否显示详细视图和列表视图的切换按钮
			cardView: false, //是否显示详细视图
			sortStable: true, //是否可排序
			//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
			responseHandler: function(res) {
				console.log(formatData(res));
				return formatData(res);
			},

			//列名
			columns: [{

					checkbox: true

				},
				{
					field: 'exhistoryId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'Goods',
					title: '货品',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="" class="glyphicon glyphicon-list"></a>';
					} //单元格内显示的方式
				}, {
					field: 'explanNumber',
					title: '出库历史编号',
					align: "center",
					valign: "middle",

				}, {
					//仅展示时候使用
					field: 'priid',
					title: '原序号',
					align: "center",
					valign: "middle",

				}, {
					field: 'principalname',
					title: '委托方企业名称',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'exdate',
					title: '出库日期',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'extype',
					title: '出库类型',
					align: "center",
					valign: "middle",
				}, {
					field: 'goodsname',
					title: '货品名称',
					align: "center",
					valign: "middle",
				}, {
					field: 'specificatintype',
					title: '规格(型号)',
					align: "center",
					valign: "middle",
				}, {
					field: 'produceenterprise',
					title: '生产企业',
					align: "center",
					valign: "middle",

				}, {
					field: 'produceregistrationnumberorrecordcertificatenumber',
					title: '产品注册证号',
					align: "center",
					valign: "middle",

				}, {
					field: 'isbonded',
					title: '备案凭证号',
					align: "center",
					valign: "middle",

				}, {
					field: 'producebatchnumberorserialnumber',
					title: '生产批号/序列码',
					align: "center",
					valign: "middle",
				}, {
					field: 'storagetransportationcondition',
					title: '储运条件',
					align: "center",
					valign: "middle",

				}, {
					field: 'producedateandvalidity',
					title: '生产日期和有效期(或者失效期)',
					align: "center",
					valign: "middle",
				}, {
					field: 'unit',
					title: '单位',
					align: "center",
					valign: "middle",
					// visible:false	
				}, {
					field: 'quantity',
					title: '数量',
					align: "center",
					valign: "middle",

				}, {
					field: 'receivingcustomername',
					title: '收货客户名称',
					align: "center",
					valign: "middle",
				}, {
					field: 'receivingaddress',
					title: '收货地址',
					align: "center",
					valign: "middle",
				}, {
					field: 'contactman',
					title: '联系人',
					align: "center",
					valign: "middle",

				}, {
					field: 'contacttel',
					title: '联系方式',
					align: "center",
					valign: "middle",
				}, {
					field: 'remark',
					title: '备注',
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
				}
			]

		});
	};

	// 得到查询的参数
	oTableInit.queryParams = function(params) {

		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "exhistoryId",
			sortOrder: params.order,
			exhistoryNumer: $("#exhistoryNumer").val(),
			principalname: $("#principalname").val(),
			startTime: $("#ENDate1").val(),
			endTime: $("#ENDate2").val(),

		};

		console.log(temp);

		return temp;

	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var exhistory = data.data.data;
	var l = [];
	for(var i = 0; i < exhistory.length; i++) {

		var d = {
			'priid': exhistory[i].priid,
			'exhistoryNumer': exhistory[i].exhistoryNumer,
			'exhistoryId': exhistory[i].exhistoryId,
			'principalname': exhistory[i].principalname,
			'exdate': exhistory[i].exdate,
			'extype': exhistory[i].extype,
			'goodsname': exhistory[i].goodsname,
			'specificatintype': exhistory[i].specificatintype,
			'produceenterprise': exhistory[i].produceenterprise,
			'produceregistrationnumberorrecordcertificatenumber': exhistory[i].produceregistrationnumberorrecordcertificatenumber,
			'producebatchnumberorserialnumber': exhistory[i].producebatchnumberorserialnumber,
			'storagetransportationcondition': exhistory[i].storagetransportationcondition,
			'producedateandvalidity': exhistory[i].producedateandvalidity,
			'unit': exhistory[i].unit,
			'quantity': exhistory[i].quantity,
			'receivingcustomername': exhistory[i].receivingcustomername,
			'receivingaddress': exhistory[i].receivingaddress,
			'contactman': exhistory[i].contactman,
			'contacttel': exhistory[i].contacttel,
			'remark': exhistory[i].remark,
			'makeorderman': exhistory[i].makeorderman,
			'makeorderdate': exhistory[i].makeorderdate,

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

		//查询
		$("#btn_search").click(function() {
			//清空modal数据
			$(".form-control").val('');

			$(".able-delete").children('option').remove();

			//动态加载委托方企业名称
			$.ajax({
				type: "post",
				url: basePath + "/WmsExorder/queryAllServiceInfo.action",
				contentType: "application/json",

				success: function(data) {
					var ServerList = data.data;
					if(data.errcode == 0) {
						$("#principalname").append('<option value="0">===请选择===</option>');
						for(var i = 0; i < ServerList.length; i++) {
							$("#principalname").append('<option value="' + ServerList[i].employeeId + '">' + ServerList[i].name + '</option> ');
						}

					}

				}
			});

			//解除按钮绑定
			$("#beginSearch").unbind();
			//给按钮添加新事件
			$("#beginSearch").on("click", searchProduct);
			//展示modal
			$('#search').modal('show');

		});

		//刷新

		$('#btn_refresh').click(function() {

			//刷新表格
			$("#table").bootstrapTable('refresh', {
				url: basePath + "/WmsExhistory/queryAllExhistory.action",
				silent: true
			});

		});

		//导出
		$('#btn_export').click(function() {
			//do sth
		});

		//同行单打印
		$('#btn_followExport').click(function() {
			$('#myModalLabelPick').addClass("hidden");
			$('#myModalLabelFollow').removeClass("hidden");
			$(".form-control").val('');
			$("#beginPrint").unbind();
			$("#beginPrint").on("click", Export);

			$(document).on("show.bs.modal", ".modal", function() {
				$(this).draggable({
					handle: ".modal-header" // 只能点击头部拖动
				});
				$(this).css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
			});
			$('#followPickExport').modal('show');
			$(".modal-backdrop").remove(); //移除modal背景，便于搜索时查看
		})

		//拣货单打印
		$('#btn_pickExport').click(function() {
			$('#myModalLabelFollow').addClass("hidden");
			$('#myModalLabelPick').removeClass("hidden");
			$(".form-control").val('');
			$("#beginPrint").unbind();
			$("#beginPrint").on("click", Export);

			$(document).on("show.bs.modal", ".modal", function() {
				$(this).draggable({
					handle: ".modal-header" // 只能点击头部拖动
				});
				$(this).css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
			});
			$('#followPickExport').modal('show');
			$(".modal-backdrop").remove(); //移除modal背景，便于搜索时查看
		})

		//快递导出
		$('#btn_express').click(function() {
			//do sth
		});

	};

	return oInit;
};

//提交搜索
var searchProduct = function() {
	//在搜索前将页面跳至第一页，防止无法显示（eg.搜索结果只有两页数据，你在第三页进行搜索，结果会无法显示）
	$('#table').bootstrapTable('selectPage', 1);
	//提交的数据
	var product = {

		exhistoryNumer: $("#exhistoryNumer").val(),
		principalname: $("#principalname").val(),
		startTime: $("#ENDate1").val(),
		endTime: $("#ENDate2").val(),
		orderBy: "exhistoryId",

	};

	$("#table").bootstrapTable('refresh', {
		url: basePath + "/WmsExhistory/queryExplanByCriteria.action?"
	})

};

//提交同行单打印
var Export = function() {

	$('#myModal_qrcode').modal('show');
	//提交的数据
	var product = {

		exhistoryNumer: $("#exhistoryNumer").val(),

	};

	$.ajax({
		type: "post",
		//		url: basePath + "/WmsExplan/addExplan.action",
		contentType: "application/json",
		data: JSON.stringify(product),
		success: function(data) {

			alert("正在打印");

		},
		error: function(err) {
			alert('服务器异常，请稍后再试！');
			console.log("error：", err.statusText);
		}
	});

};