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
			dataType: "JSON",//获得数据类型
			contentType: 'application/json',//发送数据类型
			
			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false,//取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'explanId',//排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			
			
			/*exportDataType:'basic',
			exportTypes:['excel'],
			exportOptions:{  
	           ignoreColumn: [0,1],  //忽略某一列的索引  
		           fileName: '总台帐报表',  //文件名称设置  
		           worksheetName: 'sheet1',  //表格工作区名称  
		           tableName: '总台帐报表',  
		           excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],  
		           
		       }, */
		    showExport: true,
		    Icons:'glyphicon-export', 
			
		    
		    
		    showColumns: true, //是否显示所有的列
			showRefresh: false, //是否显示刷新按钮
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "explanId", //每一行的唯一标识，一般为主键列
			
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

					checkbox: true

				},
				{
					field: 'explanId',
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
					}//单元格内显示的方式
				}, {
					field: 'explanNumber',
					title: '出库计划编号',
					align: "center",
					valign: "middle",

				}, {
					//仅展示时候使用
					field: 'clientname',
					title: '货主',
					align: "center",
					valign: "middle",

				}, {
					field: 'shipperId',
					title: '货主序号',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'customerId',
					title: '客户序号',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'customername',
					title: '客户名称',
					align: "center",
					valign: "middle",
				}, {
					field: 'fromaddress',
					title: '发货地址',
					align: "center",
					valign: "middle",
				}, {
					field: 'toaddress',
					title: '送货地址',
					align: "center",
					valign: "middle",
				}, {
					field: 'exdate',
					title: '出库日期',
					align: "center",
					valign: "middle",
					
				}, {
					field: 'businesstype',
					title: '业务类型',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {

						switch(value) {
							case 1:
								return "销售";
								break;
							case 2:
								return "移库";
								break;
							case 3:
								return "采退";
								break;
							case 4:
								return "赠品";
								break;
							case 5:
								return "换货";
								break;
							case 6:
								return "其它";
								break;
							case 7:
								return "销毁";
								break;

						}
					}
				}, {
					field: 'isbonded',
					title: '是否保税',
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
					field: 'storagetransportationrequirement',
					title: '储运要求',
					align: "center",
					valign: "middle",
				}, {
					field: 'issupervision',
					title: '是否监管',
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
					field: 'customernumber',
					title: '客户单号',
					align: "center",
					valign: "middle",
				}, {
					field: 'serviceId',
					title: '客服序号',
					align: "center",
					valign: "middle",
					// visible:false	
				}, {
					field: 'servicename',
					title: '客服名称',
					align: "center",
					valign: "middle",

				}, {
					field: 'contactman',
					title: '联系人',
					align: "center",
					valign: "middle",
				}, {
					field: 'contacttel',
					title: '联系电话',
					align: "center",
					valign: "middle",
				}, {
					field: 'planstatus',
					title: '计划状态',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						//计划状态

						switch(value) {
							case 1:
								return "新建";
								break;
							case 2:
								return "执行中";
								break;
							case 3:
								return "部分出库";
								break;
							case 4:
								return "出库完成";
								break;
							case 5:
								return "历史出库";
								break;
							case 6:
								return "人工关闭";
								break;

						}
					}
				}, {
					field: 'exorderquantity',
					title: '出库单数量',
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
				}, {
					field: 'exorderquantity',
					title: '出库单数量',
					align: "center",
					valign: "middle",
				}, {
					field: 'storehouseId',
					title: '仓库序号',
					align: "center",
					valign: "middle",

				},
				{
					field: 'storehousename',
					title: '仓库名称',
					align: "center",
					valign: "middle",
				}, {
					field: 'express',
					title: '快递公司',
					align: "center",
					valign: "middle",
				}, {
					field: 'shippingmethod',
					title: '运送方式',
					align: "center",
					valign: "middle",
				}, {
					field: 'clearingform',
					title: '结算方式',
					align: "center",
					valign: "middle",
				}, {
					field: 'expressnumber',
					title: '快递单号',
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
			orderBy: "explanId",
			sortOrder: params.order,
			customername: $("#customername1").val(),
			customernumber: $("#customernumber1").val(),
			startTime : $("#ENDate1").val(),
			endTime : $("#ENDate2").val(),
			 

		};
		
		console.log(temp);
		
		return temp;
		
		
		
	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var explans = data.data.data;
	var l = [];
	for(var i = 0; i < explans.length; i++) {

		var d = {
			'clientname': explans[i].clientname,
			'explanNumber': explans[i].explanNumber,
			'explanId': explans[i].explanId,
			'shipperId': explans[i].shipperId,
			'customerId': explans[i].customerId,
			'customername': explans[i].customername,
			'fromaddress': explans[i].fromaddress,
			'toaddress': explans[i].toaddress,
			'exdate': explans[i].exdate,
			'businesstype': explans[i].businesstype,
			'isbonded': explans[i].isbonded,
			'storagetransportationrequirement': explans[i].storagetransportationrequirement,
			'issupervision': explans[i].issupervision,
			'customernumber': explans[i].customernumber,
			'contactman': explans[i].contactman,
			'contacttel': explans[i].contacttel,
			'planstatus': explans[i].planstatus,
			'exorderquantity': explans[i].exorderquantity,
			'remark': explans[i].remark,
			'makeorderdate': explans[i].makeorderdate,
			'makeorderman': explans[i].makeorderman,
			'storehouseId': explans[i].storehouseId,
			'storehousename': explans[i].storehousename,
			'express': explans[i].express,
			'shippingmethod': explans[i].shippingmethod,
			'clearingform': explans[i].clearingform,
			'expressnumber': explans[i].expressnumber,
			'servicename': explans[i].servicename, //po里没有但是已添加
			'serviceId': explans[i].serviceId,

			
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

		//删除

		 //获取所选行的ID
		$('#btn_delete').click(function() {
			var ids = $.map($table.bootstrapTable('getSelections'), function(row) {
				return row.explanId;
			});

			//返回的数组类型的数据，要转换格式
			var product = {
				"explanIds": ids.join(',')
			}
			
			$.ajax({
				type: "post",
				url: basePath + "/WmsExplan/deleteExplans.action",
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

		
		
		//编辑
		$('#btn_edit').click(function() {
			//显示modal的标题
			$("#myModalLabelEdit").removeClass("hidden");
			var row;
			var sel = $table.bootstrapTable('getSelections');
			if(sel.length != 1) {
				alert("请选择一行");
				return false;
			} else {
				row = $table.bootstrapTable('getSelections')[0];
			};
			//清除modal缓存
			$(".able-delete").children('option').remove();
			$("input[name='isbonded']").prop("checked", false);
			$("input[name='issupervision']").prop("checked", false);

			//给modal赋值
			$('#explanNumber').val(row.explanNumber);
			$('#explanId').val(row.explanId);

			$('#customerId').val(row.customerId);
			$('#customername').val(row.customername);
			$('#fromaddress').val(row.fromaddress);
			$('#toaddress').val(row.toaddress);
			$('#exdate').val(row.exdate);

			$('#businesstype option:eq(' + row.businesstype + ')').attr('selected', 'selected');

			if(row.isbonded == 0) {
				$("input[name='isbonded']").prop("checked", false);
			} else if(row.isbonded == 1) {
				$("input[name='isbonded']").prop("checked", true);
			};

			$('#storagetransportationrequirement').val(row.storagetransportationrequirement);

			if(row.issupervision == 0) {
				$("input[name='issupervision']").prop("checked", false);
			} else if(row.isbonded == 1) {
				$("input[name='issupervision']").prop("checked", true);
			};
			$('#customernumber').val(row.customernumber);
			$('#serviceId').val(row.serviceId);
			$('#contactman').val(row.contactman);
			$('#contacttel').val(row.contacttel);
			$('#planstatus option:eq(' + row.planstatus + ')').attr('selected', 'selected');

			$('#exorderquantity').val(row.exorderquantity);
			$('#remark').val(row.remark);
			$('#makeorderman').val(row.makeorderman);
			$('#makeorderdate').val(row.makeorderdate);
			$('#storehouseId').val(row.storehouseId);

			$('#express').val(row.express);
			$('#shippingmethod').val(row.shippingmethod);
			$('#clearingform').val(row.clearingform);
			$('#expressnumber').val(row.expressnumber);
			$('#clientname').val(row.clientname);
			
			//动态加载下拉框
			$.ajax({
				type: "post",
				url: basePath + "/WmsExplan/queryAllShipper.action",
				contentType: "application/json",
				
				success: function(data) {
					var shipperList = data.data;
					if(data.errcode == 0) {
						$("#clientname").append('<option value="0" >===请选择===</option>');
						for(var i = 0; i < shipperList.length; i++) {
							$("#clientname").append('<option value="' + shipperList[i].clientId + '">' + shipperList[i].clientname + '</option> ');
						}

						$('#clientname option:eq(' + row.shipperId + ')').attr('selected', 'selected');

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
						$("#servicename").append('<option value="0" ">===请选择===</option>');
						for(var i = 0; i < ServerList.length; i++) {
							$("#servicename").append('<option value="' + ServerList[i].employeeId + '">' + ServerList[i].name + '</option> ');
						}
						$('#servicename option:eq(' + row.serviceId + ')').attr('selected', 'selected');

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
						$('#storehouseId option:eq(' + row.storehouseId + ')').attr('selected', 'selected');

					}

				}
			});

			//解除按钮绑定
			$("#btn_submit").unbind();
			//给按钮添加新事件
			$("#btn_submit").on("click", editProduct);
			//展示modal
			$('#myModal').modal('show');

		});

		//新建
		$("#btn_add").click(function () {
//		$(document).delegate(".btn_add", "click", function() {
			//清空数据
			$("#myModalLabelAdd").removeClass("hidden");
			$(".form-control").val('');
			$(".able-delete").children('option').remove();
			$("input[name='isbonded']").prop("checked", false);
			$("input[name='issupervision']").prop("checked", false);
			
			//动态加载下拉框
			$.ajax({
				type: "post",
				url: basePath + "/WmsExplan/queryAllShipper.action",
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
			$('#myModal').modal('show');
			
			
			

		});

		//搜索
		$("#btn_search").click(function() {
			//清空modal数据
			$(".form-control").val('');
			$("#customername1").val('');
				$("#customernumber1").val('');
				$("#ENDate1").val('');
				$("#ENDate2").val('');

				
				//解除按钮绑定
				$("#beginSearch").unbind();
				//给按钮添加新事件
				$("#beginSearch").on("click", searchProduct);
				//展示modal
				$('#search').modal('show');

		});

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