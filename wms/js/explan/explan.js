$(function () {
 
 //1.初始化Table
 var oTable = new TableInit();
 oTable.Init();
 
 //2.初始化Button的点击事件
 var oButtonInit = new ButtonInit();
 oButtonInit.Init();
 
});
 
 
var TableInit = function () {
 var oTableInit = new Object();
 //初始化Table
 oTableInit.Init = function () {
 $('#table').bootstrapTable({
 
//url: './data.json',   //url一般是请求后台的url地址,调用ajax获取数据。此处我用本地的json数据来填充表格。
//method: "get",                     //使用get请求到服务器获取数据
//dataType: "json",
//contentType: 'application/json,charset=utf-8',

 toolbar: '#toolbar', //工具按钮用哪个容器

 striped: true, //是否显示行间隔色
 cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
 pagination: true, //是否显示分页（*）
 sortable: false, //是否启用排序
 sortOrder: "asc", //排序方式
 queryParams: oTableInit.queryParams,//传递参数（*）
	 //分页方式：client客户端分页，server服务端分页（*）
 pageNumber:1, //初始化加载第一页，默认第一页
 pageSize: 5, //每页的记录行数（*）
 pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
 search: true, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大

 // 
 showColumns: true, //是否显示所有的列
 showRefresh: true, //是否显示刷新按钮
 minimumCountColumns: 2, //最少允许的列数
 clickToSelect: true, //是否启用点击选中行
 height: 500, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
 uniqueId: "id",
// idField: "EXPlan_ID",//每一行的唯一标识，一般为主键列
 showToggle:true, //是否显示详细视图和列表视图的切换按钮
 cardView: false, //是否显示详细视图
 detailView: false,
 responseHandler:function (res) {
                return res.DATA;
            },//是否显示父子表
//onEditableSave: function (field, row, oldValue, $el) {
//          $.ajax({
//              success: function (data, status) {
//                  if (status == "success") {
//                      alert("编辑成功");
//                  }
//              },
//              error: function () {
//                  alert("Error");
//              },
//              complete: function () {
//
//              }
//          });
//      },            
 columns: [ {
 field: 'explanId',
 title: '序号',
 align: "center", 
 valign: "middle",
 formatter: function (value, row, index) {  
                            return index+1;  
                        }  
 }, {
 field: 'Goods',
 title: '货品',
 align: "center", 
 valign: "middle",
 formatter: function (value, row, index) {  
            	return '<a href="" class="glyphicon glyphicon-list"></a>'; 
			}
 },{
 field: 'explanNumber',
 title: '出库计划编号',
 align: "center", 
 valign: "middle",

 },{
 //仅展示时候使用 ，上传货主序号
 field: 'clientname',
 title: '货主',
 align: "center", 
 valign: "middle",

 }, {
 field: 'shipperId',
 title: '货主序号',
 align: "center", 
 valign: "middle",
 visible:false
 },{
 field: 'customerId',
 title: '客户序号',
 align: "center", 
 valign: "middle",
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
// editable: {
//  type: 'date',
//  
//  placement: 'left',
//  title: '请选择日期:',
//  datepicker: {
//      todayBtn: true,
//      format: "yyyy-mm-dd",
//      
//      
//  }
// }
// }, 
},	{
 field: 'businesstype',
 title: '业务类型',
 align: "center", 
 valign: "middle",
 }, {
 field: 'isbonded',
 title: '是否保税',
 align: "center", 
 valign: "middle",
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
 },{
 field: 'exorderquantity',
 title: '出库单数量',
 align: "center", 
 valign: "middle",
 }, {
 field: 'storehouseId',
 title: '仓库序号',
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
 field: 'expressNumber',
 title: '快递单号',
 align: "center", 
 valign: "middle",
 }
 ],
 
data: [{
        clientname:"test",
        explanId:"test",
        explanNumber: 'test1',
        shipperId: '1024',
        customerId:'test',
        customername:'test',
		fromaddress:'test',
		toaddress:'test',
		exdate:"",
		businesstype:"test2",
		isbonded:"true",
		storagetransportationrequirement:"",
		issupervision:"",
		customernumber:"",
		serviceId:"",
		contactman:"",
		contacttel:"",
		planstatus:"",
		exorderquantity:"",
		remark:"",
		makeorderdate:"",
		makeorderman:"",
		storehouseId:"",
		express:"",
		shippingmethod:"",
		clearingform:"",
		expressNumber:"",

    }]
 });
 };
 

// 得到查询的参数
   oTableInit.queryParams = function (params) {
   var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
   limit: params.limit, //页面大小
   offset: params.offset, //页码
// departmentname: $("#txt_search_departmentname").val(),
// statu: $("#txt_search_statu").val()
   };
   return temp;
   };
   return oTableInit;
};
   
 
var ButtonInit = function () {
 var oInit = new Object();
 var postdata = {};
 
 oInit.Init = function () {
 //初始化页面上面的按钮事件
 
 
 //删除
 var $table = $('#table'),
     $btn_delete = $('#btn_delete');

    $(function () {
        $btn_delete.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.explanNumber;
       	     });//获取所选行的ID
            $table.bootstrapTable('remove', {
                field: 'explanNumber',
                values: ids
            });
        });
    });



//编辑
$('#btn_edit').click(function () {
	//获得选中行的第一个
	var row=$table.bootstrapTable('getSelections')[0]
	//给modal赋值
	$('#explanNumber').val(row.explanNumber);
	$('#shipperId').val(row.shipperId);
	$('#customerId').val(row.customerId);
	$('#customername').val(row.customername);
	$('#fromaddress').val(row.fromaddress);
	$('#toaddress').val(row.toaddress);
	$('#exdate').val(row.exdate);
	$('#businesstype').val(row.businesstype);
	$('#isbonded').val(row.isbonded);
	$('#storagetransportationrequirement').val(row.storagetransportationrequirement);
	$('#issupervision').val(row.issupervision);
	$('#customernumber').val(row.customernumber);
	$('#serviceId').val(row.serviceId);
	$('#contactman').val(row.contactman);
	$('#contacttel').val(row.contacttel);
	$('#planstatus').val(row.planstatus);
	$('#exorderquantity').val(row.exorderquantity);
	$('#remark').val(row.remark);
	$('#makeorderdate').val(row.makeorderdate);
	$('#storehouseId').val(row.storehouseId);
	$('#express').val(row.express);
	$('#shippingmethod').val(row.shippingmethod);
	$('#clearingform').val(row.clearingform);
	$('#expressNumber').val(row.expressNumber);
	
	
	
	//解除按钮绑定
	$("#btn_submit").unbind();
	//给按钮添加新事件
	$("#btn_submit").on("click", editProduct);
	//展示modal
	$('#myModal').modal('show');
	
	
});

    
    
//新建
$("#btn_add").click(function () {
	//清空数据
	$(".form-control").val('');
	
	$("#btn_submit").unbind();
	$("#btn_submit").on("click", addProduct);
	$('#myModal').modal('show');
	 
	
	
	
	
	
});

//搜索
$("#btn_search").click(function () {
	$(".form-control").val('');
	
	
	 
	
	//当modal关闭时清空数据
	
	$("#beginSearch").unbind();
	$("#beginSearch").on("click", searchProduct);
	$('#search').modal('show');
	
});



 	
 };
 
    
    
return oInit;
};

var addProduct = function () {
     
     var product = {
        explanNumber: $("#explanNumber").val(),
        shipperId: $("#shipperId").val(),
        customerId: $("#customerId").val(),
        customername: $("#customername").val(),
        fromaddress: $("#fromaddress").val(),
        explanNumber: $("#explanNumber").val(),
        toaddress: $("#toaddress").val(),
        exdate: $("#exdate").val(),
        businesstype: $("#businesstype option:selected").val(),
        isbonded: (function(){
        			if ($('#isbonded').is(':checked')) {

    					// do something
    					return "是"
					}
        			else return "否";}
        		   )(),

        storagetransportationrequirement: $("#storagetransportationrequirement").val(),
        issupervision: (function(){
        			if ($('#issupervision').is(':checked')) {

    					// do something
    					return "是"
					}
        			else return "否";})(),
        customernumber: $("#customernumber").val(),
        serviceId: $("#serviceId").val(),
        contactman: $("#contactman").val(),
        contacttel: $("#contacttel").val(),
        planstatus: $("#planstatus").val(),
        exorderquantity: $("#exorderquantity").val(),
        remark: $("#remark").val(),
        makeorderdate: $("#makeorderdate").val(),
        makeorderman: $("#makeorderman").val(),
        storehouseId: $("#storehouseId").val(),
        express: $("#express").val(),
        shippingmethod: $("#shippingmethod").val(),
        clearingform: $("#clearingform").val(),
        expressNumber: $("#expressNumber").val()
        
        
        
        
        
        
    };
    
    $.ajax({
//      type: "post",
//      url: "mine/data.json",
//      contentType: "application/json",
        data: JSON.stringify(product),
        success: function (data) {
        	
            if (data !== null) {
            	
               
                    $("#table").bootstrapTable("append", product);
                    
                    
					$("#myModal").modal('hide');
                    
                     
                
            }
        },
        error: function (err) {
            alert('alert-danger', '警告', '服务器异常，请稍后再试！');
            console.log("error：", err.statusText);
        }
    });
}



var editProduct = function () {
    
      
     
    var product = {
        explanNumber: $("#explanNumber").val(),
        
    };
    
    
    $.ajax({
//      type: "post",
//      url: "mine/data.json",
//      contentType: "application/json",
        data: JSON.stringify(product),
        
        success: function (data) {
        	
            if (data !== null) {
            	
               
                    $("#table").bootstrapTable('updateRow', {
                    	index: 1,
                    	row:product
                    });
                    $("#myModal").modal('hide');
                    $("#explanNumber").val('');
                    alert('load success');
                    
                     
                
            }
        },
        error: function (err) {
            alert('alert-danger', '警告', '服务器异常，请稍后再试！');
            console.log("error：", err.statusText);
        }
    })
    };
    
var searchProduct = function () {
    
     
    var product = {
        explanNumber: $("#explanNumber").val(),
        
    };
    $("#myModal").modal('hide');
    
//  $.ajax({
////      type: "post",
////      url: "mine/data.json",
////      contentType: "application/json",
//      data: JSON.stringify(product),
//      
//      success: function (data) {
//      	alert(ids);
//          if (data !== null) {
//          	
//             
//                  $("#table").bootstrapTable('updateRow', {
//                  	index: ids,
//                  	row:product
//                  });
//                  $("#myModal").modal('hide');
//                  $("#explanNumber").val('');
//                  alert('load success');
//                  
//                   
//              
//          }
//      },
//      error: function (err) {
//          alert('alert-danger', '警告', '服务器异常，请稍后再试！');
//          console.log("error：", err.statusText);
//      }
//  })
	
    };
