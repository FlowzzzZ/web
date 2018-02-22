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
			url: basePath + "/Wmsbox/queryAllbox.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON", //发送数据类型
			contentType: 'application/json', //接收数据类型

			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false, //取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'boxId ', //排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）

			showRefresh: false, //是否显示刷新按钮
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "boxId ", //每一行的唯一标识，一般为主键列

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

					checkbox: true,

				},
				{
					field: 'boxId ',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
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

					field: 'volume',
					title: '体积',
					align: "center",
					valign: "middle",

				}, {
					field: 'state',
					title: '状态',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'starttime',
					title: '开始时间',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'endtime',
					title: '结束时间',
					align: "center",
					valign: "middle",
				}, {
					field: 'isoccupied',
					title: '是否占用',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						while(value != null) {
							if(value == 0) {
								return "否"
							} else return "是"
						}
					}
				}, {
					field: 'isturned',
					title: '是否周转',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						while(value != null) {
							if(value == 0) {
								return "否"
							} else return "是"
						}
					}
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
		window.a = (params.offset / params.limit) + 1;
		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "boxId ",
			sortOrder: params.order,
			boxNumber: $("#boxNumber").val(),
			boxtype: $("#boxtype").val(),
			

		};

		console.log(temp);

		return temp;

	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var boxs = data.data.data;
	var l = [];
	for(var i = 0; i < boxs.length; i++) {

		var d = {
			'boxId': boxs[i].boxId,
			'boxNumber': boxs[i].boxNumber,
			'boxtype': boxs[i].boxtype,
			'volume': boxs[i].volume,
			'state': boxs[i].state,
			'starttime': boxs[i].starttime,
			'endtime': boxs[i].endtime,
			'isoccupied': boxs[i].isoccupied,
			'isturned': boxs[i].isturned,
			'makeorderdate': boxs[i].makeorderdate,
			'makeorderman': boxs[i].makeorderman,

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
		//拖动
    	$(document).on("show.bs.modal", ".modal", function() {
				$('.modal-dialog').draggable({
					handle: ".modal-header" // 只能点击头部拖动
				});
				$('#followPickExport').css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
			});
		

		
		//删除
		$('#btn_delete').click(function() {
			//获取所选行的ID
			var ids = $.map($table.bootstrapTable('getSelections'), function(row) {
				return row.boxId;
			});

			//返回的数组类型的数据，要转换格式
			var product = {
				"boxId": ids.join(',')
			}

			$.ajax({
				type: "post",
				url: basePath + "/Wmsbox/deleteboxs.action",
				dataType: "json",
				data: product,
				success: function(data) {

					if(data !== null) {

						alert("删除成功!");
						//刷新表格
						$("#table").bootstrapTable('refresh', {
							url: basePath + "/Wmsbox/queryboxByCriteria.action",
							silent: true
						});

					}
				},
				error: function(err) {
					alert('服务器异常，请稍后再试');
					console.log("error：", err.statusText);
				}
			});
		});

	
		//新建
		$("#btn_add").click(function() {
			//		$(document).delegate(".btn_add", "click", function() {
			//清空数据
			
			$(".form-control").val('');
			$(".able-delete").children('option').remove();
			$("input[name='isbonded']").prop("checked", false);
			$("input[name='issupervision']").prop("checked", false);

			//动态加载下拉框
			$.ajax({
				type: "post",
				url: basePath + "/Wmsbox/queryAllShipper.action",
				contentType: "application/json",
				//	      data: JSON.stringify(product),
				success: function(data) {
					var shipperList = data.data;
					if(data.errcode == 0) {
						$("#clientname").append('<option value="0" >===请选择===</option>');
						for(var i = 0; i < shipperList.length; i++) {
							$("#clientname").append('<option value="' + shipperList[i].clientId + '">' + shipperList[i].clientname + '</option> ');
						}

					}

				}
			});

			$.ajax({
				type: "post",
				url: basePath + "/WmsExorder/queryAllServiceInfo.action",
				contentType: "application/json",
				//	      data: JSON.stringify(product),
				success: function(data) {
					var ServerList = data.data;
					if(data.errcode == 0) {
						$("#servicename").append('<option value="0">===请选择===</option>');
						for(var i = 0; i < ServerList.length; i++) {
							$("#servicename").append('<option value="' + ServerList[i].employeeId + '">' + ServerList[i].name + '</option> ');
						}

					}

				}
			});

			$.ajax({
				type: "post",
				url: basePath + "/WmsExorder/queryAllStorehouse.action",
				contentType: "application/json",
				//	      data: JSON.stringify(product),
				success: function(data) {

					var Storehouse = data.data;
					if(data.errcode == 0) {
						$("#storehouseId").append('<option value="0">===请选择===</option>');

						for(var i = 0; i < Storehouse.length; i++) {
							$("#storehouseId").append('<option value="' + Storehouse[i].storehousesId + '">' + Storehouse[i].storehousename + '</option> ');
						}

					}

				}
			});

			//解除按钮绑定
			$("#btn_submit").unbind();
			//给按钮添加新事件
			$("#btn_submit").on("click", addProduct);
			//展示modal
			$('#add').modal('show');

		});

		//搜索
		$("#btn_search").click(function() {
			//清空modal数据
			$(".form-control").val('');

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

	};

	return oInit;
};

//增加保存
var addProduct = function() {
	//提交的数据
	var product = {

		clientname: $('#clientname option:eq(' + $("#clientname").val() + ')').text(),
		boxNumber: $("#boxNumber").val(),
		shipperId: $("#clientname").val(),
		customerId: $("#customerId").val(),
		customername: $("#customername").val(),
		fromaddress: $("#fromaddress").val(),

		toaddress: $("#toaddress").val(),
		exdate: $("#exdate").val(),
		businesstype: $("#businesstype option:selected").val(),
		isbonded: (function() {
			if($('#isbonded').is(':checked')) {

				return 1
			} else return 0;
		})(),

		storagetransportationrequirement: $("#storagetransportationrequirement").val(),
		issupervision: (function() {
			if($('#issupervision').is(':checked')) {

				return 1
			} else return 0;
		})(),
		customernumber: $("#customernumber").val(),
		serviceId: $("#servicename").val(),
		servicename: $('#servicename option:eq(' + $("#servicename").val() + ')').text(),
		contactman: $("#contactman").val(),
		contacttel: $("#contacttel").val(),
		planstatus: $("#planstatus option:selected").val(),
		exorderquantity: $("#exorderquantity").val(),
		remark: $("#remark").val(),
		makeorderdate: $("#makeorderdate").val(),
		makeorderman: $("#makeorderman").val(),
		storehouseId: $("#storehouseId").val(),
		storehousename: $('#storehouseId option:eq(' + $("#storehouseId").val() + ')').text(),

		express: $("#express").val(),
		shippingmethod: $("#shippingmethod").val(),
		clearingform: $("#clearingform").val(),
		expressnumber: $("#expressnumber").val()

	};
	$.ajax({
		type: "post",
		url: basePath + "/Wmsbox/addbox.action",
		contentType: "application/json",
		data: JSON.stringify(product),
		success: function(data) {

			if(data !== null) {

				alert("增加成功");

				$("#table").bootstrapTable("append", product);

				$("#myModal").modal('hide');

			}
		},
		error: function(err) {
			alert('服务器异常，请稍后再试！');
			console.log("error：", err.statusText);
		}
	});
}



//提交搜索
var searchProduct = function() {
	//在搜索前将页面跳至第一页，防止无法显示（eg.搜索结果只有两页数据，你在第三页进行搜索，结果会无法显示）
	$('#table').bootstrapTable('selectPage', 1);
	//提交的数据
	var product = {

		boxNumber: $("#boxNumber").val(),
		boxtype: $("#boxtype").val(),
		
		orderBy: "boxId ",

	};

	$("#table").bootstrapTable('refresh', {
//		url: basePath + "/Wmsbox/queryboxByCriteria.action?"
	})

};