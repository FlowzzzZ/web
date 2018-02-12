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
			url: basePath + "/WmsExplan/queryAllExplan.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON",//发送数据类型
			contentType: 'application/json',//接收数据类型
			
			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false,//取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'packingcontentId',//排序类型
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
			uniqueId: "packingcontentId", //每一行的唯一标识，一般为主键列
			
			showToggle: false, //是否显示详细视图和列表视图的切换按钮
			cardView: false, //是否显示详细视图
			sortStable: true,//是否可排序
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
					field: 'packingcontentId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'packingcontentNumber',
					title: '装箱内容编号',
					align: "center",
					valign: "middle",
					
				}, {
					field: 'boxId',
					title: '箱子序号',
					align: "center",
					valign: "middle",

				},{
					field: 'exdetail',
					title: '出库明细',
					align: "center",
					valign: "middle",
				}, {
					field: 'packingquantity',
					title: '装箱数量',
					align: "center",
					valign: "middle",
				}, {
					field: 'packinginstruction',
					title: '装箱说明',
					align: "center",
					valign: "middle",
				},  {
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
			orderBy: "packingcontentId",
			sortOrder: params.order,
			

		};
		
		console.log(temp);
		
		return temp;
		
		
		
	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var selectbox = data.data.data;
	var l = [];
	for(var i = 0; i < selectbox.length; i++) {

		var d = {
			'packingcontentId': selectbox[i].packingcontentId,
			'packingcontentNumber': selectbox[i].packingcontentNumber,
			'exdetail': selectbox[i].exdetail,
			
			'packingquantity': selectbox[i].packingquantity,
			'packinginstruction': selectbox[i].packinginstruction,
			
			'makeorderdate': selectbox[i].makeorderdate,
			'makeorderman': selectbox[i].makeorderman,
			
			
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
		var $table = $('#table');
		


		//选箱
		$('#btn_choseBox').click(function() {
			$('#choseBoxTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'selectboxId', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: choseBoxTable.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "selectboxId", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {

					return formatData(res);
				},//暂定

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
					field: 'zhouzhuanxiang', //未知
					title: '周转箱',
					align: "center",
					valign: "middle",
					

				}
				],
				data: [{
					
				}]

			});
			choseBoxTable.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "selectboxId",
					sortOrder: params.order,
					
				};

				return temp;

			};
			
			

			$('#choseBox').modal('show');
		});

		
		
		//装箱
		$("#btn_packingBox").click(function() {

			//清空数据
			
			$(".form-control").val('');
			//防止动态下拉框多次加载
			$(".able-delete").children('option').remove();
			

			//动态加载下拉框
			

			$.ajax({
				type: "post",
				url: basePath + "/WmsExorder/queryAllServiceInfo.action",
				contentType: "application/json",
				//	      data: JSON.stringify(product),
				success: function(data) {
					var ServerList = data.data;
					if(data.errcode == 0) {
						$("#makeorderman").append('<option value="0">===请选择===</option>');
						for(var i = 0; i < ServerList.length; i++) {
							$("#makeorderman").append('<option value="' + ServerList[i].employeeId + '">' + ServerList[i].name + '</option> ');
						}

					}

				}
			});


			//解除按钮绑定
			$("#btn_submit").unbind();
			//给按钮添加新事件
			$("#btn_submit").on("click", addProduct);
			//展示modal
			$('#packing').modal('show');

		});
		
		//完成
		$("#btn_complete").click(function() {

			//do sth
		});		
		
		
		//删除
		 $('#btn_delete').click(function() {
			//获取所选行的ID
			var ids = $.map($table.bootstrapTable('getSelections'), function(row) {
				return row.packingcontentId;
			});


			//返回的数组类型的数据，要转换格式
			var product = {
				"packingcontentId": ids.join(',')
			}
			
			$.ajax({
				type: "post",
				url: basePath + "/WmsExplan/deleteselectbox.action",
				dataType: "json",
				data: product,
				success: function(data) {

					if(data !== null) {

						alert("删除成功!");
						//刷新表格
						$("#table").bootstrapTable('refresh', {
							url: basePath + "/WmsExplan/queryExplanByCriteria.action",
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

		//刷新
		$('#btn_refresh').click(function() {
			$table.bootstrapTable('refresh', {
//				url: basePath + "/WmsExplan/queryExplanByCriteria.action",

			});
		});
		
		
		
		
		
			
			
			//移除modal背景，便于搜索时查看
		
				
		
		
		
		
		
		
	
		
		

		
	};

	return oInit;
};


//增加保存
var addProduct = function() {
	//提交的数据
	var product = {
		
		clientname: $('#clientname option:eq(' + $("#clientname").val() + ')').text(),
		explanNumber: $("#explanNumber").val(),
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
		url: basePath + "/WmsExplan/addExplan.action",
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


//编辑保存
var editProduct = function() {

	
	//提交数据
	var product = {
		clientname: $('#clientname option:eq(' + $("#clientname").val() + ')').text(),
		explanId: $("#explanId").val(),
		explanNumber: $("#explanNumber").val(),
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
		contactman: $("#contactman").val(),
		contacttel: $("#contacttel").val(),

		planstatus: $("#planstatus option:selected").val(),
		exorderquantity: $("#exorderquantity").val(),
		remark: $("#remark").val(),
		makeorderdate: $("#makeorderdate").val(),
		makeorderman: $("#makeorderman").val(),
		storehouseId: $("#storehouseId").val(),
		express: $("#express").val(),
		shippingmethod: $("#shippingmethod").val(),
		clearingform: $("#clearingform").val(),
		expressnumber: $("#expressnumber").val()

	};

	$.ajax({

		type: "post",
		url: basePath + "/WmsExplan/editExplan.action",
		contentType: "application/json",
		data: JSON.stringify(product),

		success: function(data) {

			if(data !== null) {

				alert('修改成功');
				
				$("#table").bootstrapTable('refresh', {
					url: basePath + "/WmsExplan/queryExplanByCriteria.action",
					silent: true
				});
				$("#myModal").modal('hide');

			}
		},
		error: function(err) {
			alert('服务器异常，请稍后再试！');
			console.log("error：", err.statusText);
		}
	})
};

//提交搜索
var searchProduct = function() {
	//在搜索前将页面跳至第一页，防止无法显示（eg.搜索结果只有两页数据，你在第三页进行搜索，结果会无法显示）
	$('#table').bootstrapTable('selectPage', 1);
	//提交的数据
	var product = {

		customername: $("#customername1").val(),
		customernumber: $("#customernumber1").val(),
		startTime: $("#ENDate1").val(),
		endTime: $("#ENDate2").val(),
		orderBy: "explanId",

	};
	
	$("#table").bootstrapTable('refresh',
			{
			url: basePath + "/WmsExplan/queryExplanByCriteria.action?"
			}
			)
	
	

};