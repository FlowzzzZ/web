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
			sortName: 'exorderId', //排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）

			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "exorderId", //每一行的唯一标识，一般为主键列

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
					field: 'exorderId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'exorderNumber',
					title: '出库单编号',
					align: "center",
					valign: "middle",

					//					formatter: function(value, row, index) {
					//						return '<a href="'+value+'" class="glyphicon glyphicon-list"></a>';
					//					}//单元格内显示的方式
				}, {
					field: 'shipperId',
					title: '货主序号',
					align: "center",
					valign: "middle",

					//					formatter: function(value, row, index) {
					//						return '<a href="'+value+'" class="glyphicon glyphicon-list"></a>';
					//					}//单元格内显示的方式
				}, {
					//仅展示时候使用
					field: 'clientname',
					title: '货主',
					align: "center",
					valign: "middle",

				}, {
					field: 'planId',
					title: '计划序号',
					align: "center",
					valign: "middle",

				}, {

					field: 'infosource',
					title: '信息来源',
					align: "center",
					valign: "middle",

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
					// visible:false
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

				},
				{
					field: 'ischecked',
					title: '是否复核',
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
					field: 'exstatus',
					title: '出库状态',
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
					field: 'exbarcode',
					title: '出库条码',
					align: "center",
					valign: "middle",
				}, {
					field: 'placementarea',
					title: '摆放区域',
					align: "center",
					valign: "middle",
				}, {
					field: 'pickman',
					title: '拣货人',
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
					field: 'storehouseId',
					title: '仓库序号',
					align: "center",
					valign: "middle",

				}, {
					field: 'storehousename',
					title: '仓库名称',
					align: "center",
					valign: "middle",
				}, {
					field: 'expresscompany',
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
				},
				{
					field: 'oprate_list',
					title: '列表',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="' + value + '" class="glyphicon glyphicon-list"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_chose',
					title: '选货',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a class="glyphicon glyphicon-pencil" id="chose-modal"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_pick',
					title: '拣货',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="' + value + '" class="glyphicon glyphicon-hand-up"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_sequence',
					title: '序列',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a class="glyphicon glyphicon-barcode" id="sequence-modal"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_check',
					title: '复核',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="' + value + '" class="glyphicon glyphicon-check"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_packing',
					title: '装箱',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="' + value + '" class="glyphicon glyphicon-shopping-cart"></a>';
					} //单元格内显示的方式
				}, {
					field: 'oprate_express',
					title: '快递',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a class="glyphicon glyphicon-bookmark" id="expressRegister-modal"></a>';
					} //单元格内显示的方式
				},
				{
					field: 'oprate_specifications',
					title: '详单',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
						return '<a href="' + value + '" class="glyphicon glyphicon-print"></a>';
					} //单元格内显示的方式
				},
			],
			data: [{

			}]

		});
	};

	// 得到查询的参数
	oTableInit.queryParams = function(params) {

		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "exorderId",
			sortOrder: params.order,
			customername: $("#customername1").val(),
			customernumber: $("#customernumber1").val(),
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
	var exorder = data.data.data;
	var l = [];
	for(var i = 0; i < exorder.length; i++) {

		var d = {
			'clientname': explans[i].clientname, //需要传过来
			'exorderId': exorder[i].exorderId,
			'exorderNumber': exorder[i].exorderNumber,
			'shipperId': exorder[i].shipperId,
			'planId': exorder[i].planId,
			'infosource': exorder[i].infosource,
			'customerId': exorder[i].customerId,
			'customername': exorder[i].customername,
			'fromaddress': exorder[i].fromaddress,
			'toaddress': exorder[i].toaddress,
			'exdate': exorder[i].exdate,
			'businesstype': exorder[i].businesstype,
			'isbonded': exorder[i].isbonded,
			'ischecked': exorder[i].ischecked,
			'storagetransportationrequirement': exorder[i].storagetransportationrequirement,
			'issupervision': exorder[i].issupervision,
			'customernumber': exorder[i].customernumber,
			'contactman': exorder[i].contactman,
			'contacttel': exorder[i].contacttel,
			'exstatus': exorder[i].exstatus,
			'exbarcode': exorder[i].exbarcode,
			'placementarea': exorder[i].placementarea,
			'pickman': exorder[i].pickman,
			'remark': exorder[i].remark,
			'makeorderdate': exorder[i].makeorderdate,
			'makeorderman': exorder[i].makeorderman,
			'storehouseId': exorder[i].storehouseId,
			'storehousename': explans[i].storehousename,
			'expresscompany': exorder[i].expresscompany,
			'shippingmethod': exorder[i].shippingmethod,
			'clearingform': exorder[i].clearingform,
			'expressnumber': exorder[i].expressnumber,
			'servicename': exorder[i].servicename, //po里没有但是已添加
			'serviceId': exorder[i].serviceId,

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

		//刷新

		$('#btn_refresh').click(function() {
			$table.bootstrapTable('refresh', {
				url: basePath + "/WmsExplan/queryExplanByCriteria.action",

			});
		});

		//完成
		$('#btn_complete').click(function() {
			//do sth
		});

		//快递导出
		$('#btn_export').click(function() {
			//	$('#table').tableExport({ 
			//				type: 'excel', 
			//				escape: 'false',
			//				exportDataType: 'all'})
			//		})
		});

		//动态加载右侧下拉框
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

		//编辑
		$('#btn_edit').click(function() {
			//显示modal的标题
			$('#myModalLabelAdd').addClass("hidden");

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
			$("input[name='ischecked']").prop("checked", false);
			//给modal赋值
			$('#exorderId').val(row.exorderId);
			$('#exorderNumber').val(row.exorderNumber);
			//id在select的value里
			$('#clientname').val(row.shipperId);
			$('#planId').val(row.planId);
			$('#infosource').val(row.infosource);
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

			if(row.ischecked == 0) {
				$("input[name='ischecked']").prop("checked", false);
			} else if(row.isbonded == 1) {
				$("input[name='ischecked']").prop("checked", true);
			};

			$('#storagetransportationrequirement').val(row.storagetransportationrequirement);

			if(row.issupervision == 0) {
				$("input[name='issupervision']").prop("checked", false);
			} else if(row.isbonded == 1) {
				$("input[name='issupervision']").prop("checked", true);
			};
			$('#customernumber').val(row.customernumber);
			$('#contactman').val(row.contactman);
			$('#contacttel').val(row.contacttel);
			$('#exstatus option:eq(' + row.planstatus + ')').attr('selected', 'selected');
			$('#exbarcode').val(row.exbarcode);
			$('#placementarea').val(row.placementarea);
			$('#pickman').val(row.pickman);
			$('#remark').val(row.remark);
			$('#makeorderdate').val(row.makeorderdate);
			$('#makeorderman').val(row.makeorderman);
			$('#storehouseId').val(row.storehouseId);
			$('#expresscompany').val(row.expresscompany);
			$('#shippingmethod').val(row.shippingmethod);
			$('#clearingform').val(row.clearingform);
			$('#expressnumber').val(row.expressnumber);
			$('#serviceId').val(row.serviceId);

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
		$("#btn_add").click(function() {

			//清空数据
			$('#myModalLabelEdit').addClass("hidden");

			$("#myModalLabelAdd").removeClass("hidden");
			$(".form-control").val('');
			//防止动态下拉框多次加载
			$(".able-delete").children('option').remove();
			$("input[name='isbonded']").prop("checked", false);
			$("input[name='issupervision']").prop("checked", false);
			$("input[name='ischecked']").prop("checked", false);

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

		//导出
		$('#btn_expressExport').click(function() {
			$('#table').tableExport({
				type: 'excel',
				escape: 'false',
				exportDataType: 'all'
			})
		});

		//选货
		$('#chose-modal').click(function() {
			$('#choseTable').bootstrapTable({
				//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
				method: "post", //使用post请求到服务器获取数据
				dataType: "JSON", //发送数据类型
				contentType: 'application/json', //接收数据类型

				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortName: 'goodsId', //排序类型
				sortOrder: "asc", //排序方式
				queryParams: chose.queryParams, //传递参数（*）
				sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
				pageNumber: 1, //初始化加载第一页，默认第一页
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
				minimumCountColumns: 2, //最少允许的列数
				uniqueId: "goodsId", //每一行的唯一标识，一般为主键列
				sortStable: true, //是否可排序
				//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
				responseHandler: function(res) {

					return formatData(res);
				},

				//列名
				columns: [{
					field: 'ex', //未知
					title: '出库',
					align: "center",
					valign: "middle",

				}, {
					field: 'goodsId',
					title: '代码',
					align: "center",
					valign: "middle",

				}, {
					field: 'goodsname', //未知
					title: '商品',
					align: "center",
					valign: "middle",
					width: '200'

				}, {
					field: 'kuwei', //未知
					title: '库位',
					align: "center",
					valign: "middle",

				}, {
					field: 'kucun', //未知
					title: '库存',
					align: "center",
					valign: "middle",

				}, {

					field: 'suoding',
					title: '锁定',
					align: "center",
					valign: "middle",

				}, {
					field: 'danwei',
					title: '单位',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'specifiationtype',
					title: '规格',
					align: "center",
					valign: "middle",
					// visible:false
				}, {
					field: 'registration',
					title: '注册证',
					align: "center",
					valign: "middle",
				}, {
					field: 'batchnumber',
					title: '批号',
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
					field: 'serialNumber',
					title: '序列码',
					align: "center",
					valign: "middle",

				}, {
					field: 'packingunit',
					title: '包装单位',
					align: "center",
					valign: "middle",
					// visible:false	
				}, {
					field: 'conversionrate',
					title: '换算率',
					align: "center",
					valign: "middle",

				}, {
					field: 'jianshu',
					title: '件数',
					align: "center",
					valign: "middle",
				}, {
					field: 'origin',
					title: '产地',
					align: "center",
					valign: "middle",
				}, {
					field: 'goodsbarcode',
					title: '商品条码',
					align: "center",
					valign: "middle",

				}, {
					field: 'goodsstatus',
					title: '货品状态',
					align: "center",
					valign: "middle",
				}],
				data: [{
					goodsId: "10086"
				}]

			});
			chose.queryParams = function(params) {

				var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
					pageSize: params.limit, //页面大小
					page: (params.offset / params.limit) + 1, //页码
					orderBy: "goodsId",
					sortOrder: params.order,
					goodsId: $("#goodsId").val(),
					goodsname: $("#goodsname").val(),
					batchnumber: $("#batchnumber").val(),
					specifiationtype: $("#specifiationtype").val(),

				};

				return temp;

			};
			//解除按钮绑定
			$("#btn_choseSearch").unbind();
			$("#btn_choseAdd").unbind();
			//给按钮添加新事件
			$("#btn_choseSearch").on("click", choseSearch);
			$("#btn_choseAdd").on("click", choseAdd);

			$('#chose').modal('show');
		});

	
		//序列
		$('#sequence-modal').click(function() {
			
			//解除按钮绑定
			$("#btn_sequenceCheck").unbind();
			$("#btn_sequenceComplete").unbind();
			$("#btn_sequenceRemove").unbind();
			
			//给按钮添加新事件
			$("#btn_sequenceCheck").on("click", sequenceCheck);
			$("#btn_sequenceComplete").on("click", sequenceComplete);
			$("#btn_sequenceRemove").on("click", sequenceRemove);

			$('#sequence').modal('show');
		});
		
		
		//快递
		$('#expressRegister-modal').click(function() {
			
			//解除按钮绑定
			$("#btn_save").unbind();
			
			
			//给按钮添加新事件
			
			$("#btn_save").on("click", save);

			$('#expressRegister').modal('show');
		});
		
	
	};

	return oInit;
};

//增加保存
var addProduct = function() {
	//提交的数据
	var product = {
		//add方法添加使用 text()方法，编辑时不需要
		clientname: $('#clientname option:eq(' + $("#clientname").val() + ')').text(),
		exorderNumber: $("#exorderNumber").val(),
		shipperId: $("#clientname").val(),
		planId: $("#planId").val(),
		infosource: $("#infosource").val(),
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
		ischecked: (function() {
			if($('#ischecked').is(':checked')) {

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
		exstatus: $("#exstatus option:selected").val(),
		exbarcode: $("#exbarcode").val(),
		placementarea: $("#placementarea").val(),
		remark: $("#remark").val(),
		makeorderdate: $("#makeorderdate").val(),
		makeorderman: $("#makeorderman").val(),
		storehouseId: $("#storehouseId").val(),
		storehousename: $('#storehouseId option:eq(' + $("#storehouseId").val() + ')').text(),
		expresscompany: $("#expresscompany").val(),
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

		exorderNumber: $("#exorderNumber").val(),
		shipperId: $("#clientname").val(),
		planId: $("#planId").val(),
		infosource: $("#infosource").val(),
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
		ischecked: (function() {
			if($('#ischecked').is(':checked')) {

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
		exstatus: $("#exstatus option:selected").val(),
		exbarcode: $("#exbarcode").val(),
		placementarea: $("#placementarea").val(),
		remark: $("#remark").val(),
		makeorderdate: $("#makeorderdate").val(),
		makeorderman: $("#makeorderman").val(),
		storehouseId: $("#storehouseId").val(),
		expresscompany: $("#expresscompany").val(),
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
	});

	//
};

//选货搜索
var choseSearch = function() {
	//在搜索前将页面跳至第一页，防止无法显示（eg.搜索结果只有两页数据，你在第三页进行搜索，结果会无法显示）
	$('#choseTable').bootstrapTable('selectPage', 1);
	//提交的数据
	var product = {

		goodsId: $("#goodsId").val(),
		goodsname: $("#goodsname").val(),
		batchnumber: $("#batchnumber").val(),
		specifiationtype: $("#specifiationtype").val(),
		orderBy: "goodsId",

	};

	$("#choseTable").bootstrapTable('refresh', {
//		url: basePath + "/WmsExplan/queryExplanByCriteria.action?"
	})

};

//选货添加
var choseAdd = function() {
	//do sth
};

//序列复核
var sequenceCheck = function() {
	//do sth
};
//序列完成
var sequenceComplete = function() {
	//do sth
};
//序列清除
var sequenceRemove = function() {
	//do sth
};


var save = function() {
};