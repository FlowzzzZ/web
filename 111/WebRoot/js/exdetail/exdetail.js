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
//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON",//发送数据类型
			contentType: 'application/json',//接收数据类型
			
			toolbar: '#toolbar', //工具按钮用哪个容器
			checkboxHeader: false,//取消表格头的复选框
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'exdetailId',//排序类型
			sortOrder: "asc", //排序方式
			queryParams: oTableInit.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			
			
			exportDataType:'all',
			exportTypes:['excel'],
			
		    showExport: true,
		    Icons:'glyphicon-export', 
			
		    
		    
		    showColumns: true, //是否显示所有的列
			showRefresh: false, //是否显示刷新按钮
			minimumCountColumns: 2, //最少允许的列数
			clickToSelect: true, //是否启用点击选中行
			uniqueId: "exdetailId", //每一行的唯一标识，一般为主键列
			
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
					field: 'exdetailId',
					title: '序号',
					align: "center",
					valign: "middle",
					sortable: true,
					order: 'desc',
					// visible:false

				}, {
					field: 'exdetailNumber',
					title: '出库明细编号',
					align: "center",
					valign: "middle",
					
					
				}, {
					field: 'exorderId',
					title: '出库单序号',
					align: "center",
					valign: "middle",

				}, {
					
					field: 'goodsId',
					title: '商品序号',
					align: "center",
					valign: "middle",

				}, {
					field: 'goodsname',
					title: '商品名称',
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
					field: 'registration',
					title: '注册证',
					align: "center",
					valign: "middle",
				}, {
					field: 'specifiationtype',
					title: '规格型号',
					align: "center",
					valign: "middle",
				}, {
					field: 'batchnumber',
					title: '批号',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
									return "<a class='glyphicon glyphicon-tags' id='batchnumber-table'></a>"+"</br>"+value;
					
					}
				}, {
					field: 'secondbatchnumber',
					title: '次批号',
					align: "center",
					valign: "middle",
					
				}, {
					field: 'serialNumber',
					title: '序列码',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
									return "<a class='glyphicon glyphicon-pencil'></a>"
					
					}
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
					field: 'exquantity',
					title: '出库数量',
					align: "center",
					valign: "middle",
					formatter: function(value, row, index) {
									return "<a class='glyphicon glyphicon-shopping-cart' id='exquantity-modal'></a>"+"</br>"+value;
					
					}

				}, {
					field: 'basicunit',
					title: '基本单位',
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
					field: 'factory',
					title: '厂家',
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
					field: 'remark',
					title: '备注',
					align: "center",
					valign: "middle",
				}, {
					field: 'makeorderdate',
					title: '制单日期',
					align: "center",
					valign: "middle",

				},{
					field: 'makeorderman',
					title: '制单人',
					align: "center",
					valign: "middle",
				}, {
					field: 'goodscode',
					title: '商品代码',
					align: "center",
					valign: "middle",
				}, {
					field: 'goodsstatus',
					title: '货品状态',
					align: "center",
					valign: "middle",
				}, {
					field: 'picked',
					title: '已拣货',
					align: "center",
					valign: "middle",
				}, {
					field: 'pickquantity',
					title: '拣货数量',
					align: "center",
					valign: "middle",
				}
			],
			data:[{}]
			
		});
	};
	

	// 得到查询的参数
	oTableInit.queryParams = function(params) {
		
		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "expId",
			sortOrder: params.order,
			customername: $("#customername1").val(),
			customernumber: $("#customernumber1").val(),
			startTime : $("#ENDate1").val(),
			endTime : $("#ENDate2").val(),
			 

		};
		
		
		
		return temp;
		
		
		
	};
	return oTableInit;
};
//格式化数据
var formatData = function(data) {
	var exdetails = data.data.data;
	var l = [];
	for(var i = 0; i < exdetails.length; i++) {

		var d = {
			'exdetailId': exdetails[i].exdetailId,
			'exdetailNumber': exdetails[i].exdetailNumber,
			'exorderId': exdetails[i].exorderId,
			'goodsId': exdetails[i].goodsId,
			'goodsname': exdetails[i].goodsname,
			'registration': exdetails[i].registration,
			'specifiationtype': exdetails[i].specifiationtype,
			'batchnumber': exdetails[i].batchnumber,
			'secondbatchnumber': exdetails[i].secondbatchnumber,
			'serialNumber': exdetails[i].serialNumber,
			'producedate': exdetails[i].producedate,
			'failuredate': exdetails[i].failuredate,
			'exquantity': exdetails[i].exquantity,
			'basicunit': exdetails[i].basicunit,
			'packingunit': exdetails[i].packingunit,
			'conversionrate': exdetails[i].conversionrate,
			'factory': exdetails[i].factory,
			'origin': exdetails[i].origin,
			'goodsbarcode': exdetails[i].goodsbarcode,
			'weight': exdetails[i].weight,
			'netweight': exdetails[i].netweight,
			'volume': exdetails[i].volume,
			'payableton': exdetails[i].payableton,
			'remark': exdetails[i].remark,
			'makeorderdate': exdetails[i].makeorderdate,
			'makeorderman': exdetails[i].makeorderman,
			'goodscode': exdetails[i].goodscode,
			'goodsstatus': exdetails[i].goodsstatus,
			'picked': exdetails[i].picked,
			'pickquantity': exdetails[i].pickquantity,

			
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
				return row.exdetailId;
			});

			//返回的数组类型的数据，要转换格式
			var product = {
				"exdetailId": ids.join(',')
			}
			
			$.ajax({
				type: "post",
//				url: basePath + "/Wmsexdetail/deleteexdetails.action",
				dataType: "json",
				data: product,
				success: function(data) {

					if(data !== null) {

						alert("删除成功!");
						//刷新表格
						$("#table").bootstrapTable('refresh', {
//							url: basePath + "/Wmsexdetail/queryexdetailByCriteria.action",
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

		
		
		//复制
		$('#btn_copy').click(function() {
			//do sth
			

		});

		
		
		
		//刷新
		$('#btn_refresh').click(function() {
			$table.bootstrapTable('refresh', {
//							url: basePath + "/Wmsexdetail/queryexdetailByCriteria.action",
							
						});
		});

		
		//打印
		$('#btn_print').click(function(){
			//do sth
		})
		
		//批号，点击弹出modal
		$('#batchnumber-table').click(function(){
			$('#batchnumberTable').bootstrapTable({
//			url: basePath + "/Wmsexdetail/queryAllexdetail.action", //url一般是请求后台的url地址,调用ajax获取数据。
			method: "post", //使用post请求到服务器获取数据
			dataType: "JSON",//发送数据类型
			contentType: 'application/json',//接收数据类型
			
			
			
			striped: true, //是否显示行间隔色
			cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination: true, //是否显示分页（*）
			sortable: true, //是否启用排序
			sortName: 'goodsId',//排序类型
			sortOrder: "asc", //排序方式
			queryParams: batchnumberTable.queryParams, //传递参数（*）
			sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）当服务器分页时候注意传来数据的格式
			pageNumber: 1, //初始化加载第一页，默认第一页
			pageSize: 10, //每页的记录行数（*）
			pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
			minimumCountColumns: 2, //最少允许的列数
			uniqueId: "goodsId", //每一行的唯一标识，一般为主键列
			sortStable: true,//是否可排序
			//将你从服务端收到的数据,转换为bootstrap-table 能接受的格式
			responseHandler: function(res) {
				console.log(formatData(res));
				return formatData(res);//共用一组数据？
			},
			
			//列名
			columns: [
				{
					field: 'goodsId',
					title: '代码',
					align: "center",
					valign: "middle",
					

				}, {
					field: 'goodsname',//未知
					title: '商品',
					align: "center",
					valign: "middle",
					width: '200'
					
					
				}, {
					field: 'kuwei',//未知
					title: '库位',
					align: "center",
					valign: "middle",
					
					
				}, {
					field: 'kucun',//未知
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
				},  {
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
				},  {
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
					
				},{
					field: 'goodsstatus',
					title: '货品状态',
					align: "center",
					valign: "middle",
				}
			],
			data:[{
				goodsId:"10086"
			}]
			
		});
		batchnumberTable.queryParams = function(params) {
		
		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			pageSize: params.limit, //页面大小
			page: (params.offset / params.limit) + 1, //页码
			orderBy: "goodsId",
			sortOrder: params.order,
			
			 

		};
		
		
		
		return temp;
		
		
		
	};
		
	
			$('#batchnumber').modal('show');
		})
		
		//出库数量
		$('#exquantity-modal').click(function(){
			$(".form-control").val('');
			$("#btn_submit").on("click", editProduct);
			$('#exquantity').modal('show');
			$(".modal-backdrop").remove(); //移除modal背景，便于搜索时查看
		})
	};

	return oInit;
};
var editProduct = function() {

	
	//提交数据
	var product = {
		
		exdetailId: $("#explanId").val(),
		
		exquantity: $("#exquantity").val()

	};

	$.ajax({

		type: "post",
//		url: basePath + "/WmsExplan/editExplan.action",
		contentType: "application/json",
		data: JSON.stringify(product),

		success: function(data) {

			if(data !== null) {

				alert('修改成功');
				
				$("#table").bootstrapTable('refresh', {
//					url: basePath + "/WmsExplan/queryExplanByCriteria.action",
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

