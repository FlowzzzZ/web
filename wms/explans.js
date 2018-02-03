$(function () { 
	//分页初始化
	explans(1,{});
	//点击搜索按钮，根据条件查询数据
	$("#explanSearch").click(function(){
		var customernumber = $("#customernumber").val();
		var customername = $("#customername").val();
		var startTime = new Date($("#startTime").val());
		var endTime = new Date($("#endTime").val());
		var data = {
				"customernumber":customernumber,
				"customername":customername,
				"startTime":startTime,
				"endTime":endTime
		};
		//初始化页面数据
		explans(1,data);
	});
	
	$("#toAddExplan").click(function(){
		window.location.href = basePath+"/WmsExplan/toAddExplanPage.action";
	});
	
	//点击批量删除按钮，根据复选框所选删除
	$("#deleteExplans").click(function(){
		var explanIds = "";
		$("input[type='checkbox']:checked").each(function(index){ 
			explanIds += (","+this.value);
		})
		deleteExplans(explanIds.substring(1));
		
	});
	//ajax提交批量删除信息
	function deleteExplans(data){
		$.ajax({
			type: "post",  
//			contentType: 'application/json',
			dataType: "json",  
			url: basePath+"/WmsExplan/deleteExplans.action?",  
			data: {
				"explanIds":data
			},  
			success: function (result) {  
				if(result.errcode == 0){
					console.log("删除成功！")
					explans(1,{});
				}
			}
		});
		
	}
	
	//加载表格数据方法，page为页数，data为查询条件
	function explans(page,data){
		$.ajax({  
			type: "post",  
			contentType: 'application/json',
			dataType: "json",  
			url: basePath+"/WmsExplan/queryExplanByCriteria.action?page="+page,  
			data: JSON.stringify(data),  
			success: function (result) {  
				if(result.errcode == 0){
					console.log("查询成功！")
					//清空tbody数据
					$("#tbody-result").empty();
					var explansList = result.data.data;
					//更新分页信息
					kkpagerInit(page,result.data.totalPage,result.data.totalCount,function(n){
//					 	getAjaxData(n,sdata,false)
						explans(n,data);
					});
					//循环在tbody下追加元素
					for(var i = 0;i<explansList.length;i++){
						console.log(explansList[i])
						var explan = explansList[i];
						$("#tbody-result").append('<tr>\
								<td><input type="checkbox" class="explanId" name= "explanId" id="explanId" value="'+explansList[i].explanId+'"/></td>\
								<td><a href="" explanId="'+explansList[i].explanId+'">货品</a></td>\
								<td>'+explansList[i].planstatus+'</td>\
								<td>'+explansList[i].clientname+'</td>\
								<td>'+explansList[i].customername+'</td>\
								<td>'+explansList[i].toaddress+'</td>\
								<td>'+explansList[i].explanNumber+'</td>\
								<td>'+explansList[i].remark+'</td>\
								<td>'+explansList[i].exdate+'</td>\
								<td>'+explansList[i].businesstype+'</td>\
								<td>'+explansList[i].storagetransportationrequirement+'</td>\
								<td>'+explansList[i].contactman+'</td>\
								<td>'+explansList[i].customernumber+'</td>\
								<td>'+explansList[i].makeorderdate+'</td>\
								<td>'+explansList[i].makeorderman+'</td>\
								<td><input type="button" class="common_btn editExplan" explan_id="'+explansList[i].explanId+'" value="修改" />\
								<input type="button" class="common_btn deleteExplan" delete_id='+explansList[i].explanId+' value="删除"/>\
									<input type="button" class="common_btn addExorderByExplan" explan='+explansList[i].explanId+' value="生成出库单"/>\
								</td>\
						</tr>');
					}
				}
			} 
		});  
	}
	//跳转到修改出库计划页面
	$(document).delegate(".editExplan","click",function(){
		//获取出库计划id
		var id = $(this).attr("explan_id");
		alert("explan_id");
		//提交请求
		window.location.href = basePath+"/WmsExplan/toEditExplanPage.action?id="+id;
		/*$.ajax({
			type: "get",
			url: basePath+"/WmsExplan/toEditExplanPage.action?id="+id, 
			
		});*/
	});
	//实现删除操作
	$(document).delegate(".deleteExplan","click",function(){
		
		//获取id值
		var id =  $(this).attr("delete_id");
		alert(id);
		/*ajax提交到controller的删除方法里*/
		$.ajax({
			type: "get",  
//			contentType: 'application/json',
			dataType: "json",  
			url: basePath+"/WmsExplan/deleteExplan.action?id="+id,  
			/*data: {
				"explanIds":data
			},  */
			success: function (result) {  
				//处理返回结果
				if(result.errcode == 0){
					console.log("删除成功！")
					//删除成功后初始化页面
					explans(1,{});
				}
			}
		
		});
	});
	$("#createExOrder").click(function(){
		var id = $(".explanId").val();
		alert(id);
		var explan = "";
		$.ajax({  
			type: "get",  
			contentType: 'application/json',
			dataType: "json",  
			url: basePath+"/WmsExorder/addExorderByExplan.action?id="+id,  
//			data: JSON.stringify(id),  
			success: function (result) {  
				if(result.errcode == 0){
					console.log("查询成功！")
					alert("生成成功");
				}
			}
		});
		
	});
	
	//实现生成出库单操作
	$(document).delegate(".addExorderByExplan","click",function(){
		//获取出库计划id
		var id = $(this).attr("explan");
		/*alert(plan);
		var planData = {
				"1":123,
				"explanNumber":plan.explanNumber,
				"shipperId":plan.shipperId,
				"customerId":plan.customerId,
				"customername":plan.customername,
				"fromaddress":plan.fromaddress,
				"toaddress":plan.toaddress,
				"exdate":plan.exdate,
				"businesstype":plan.businesstype,
				"isbonded":plan.storagetransportationrequirement,
				"issupervision":plan.issupervision,
				"customernumber":plan.customernumber,
				"contactman":plan.contactman,
				"contacttel":plan.contacttel,
				"planstatus":plan.planstatus,
				"exorderquantity":plan.exorderquantity,
				"remark":plan.remark,
				"makeorderdate":plan.makeorderdate,
				"makeorderman":plan.makeorderman,
				"storehouseId":plan.storehouseId,
				"express":plan.express,
				"shippingmethod":plan.shippingmethod,
				"clearingform":plan.clearingform,
				"expressnumber":plan.expressnumber,
				"serviceId":plan.serviceId
				
		}*/
		/*var data1 = {
				"id":plan
		} */
		$.ajax({  
			type: "get",  
			contentType: 'application/json',
			dataType: "json",  
			url: basePath+"/WmsExorder/addExorderByExplan.action?id="+id,  
//			data: JSON.stringify(data),  
			success: function (result) {  
				if(result.errcode == 0){
					console.log("查询成功！")
//					alert("生成成功");
					 //询问框
/*					 layer.open({
				            type: 1,
				            //page层
				            area: ['70%', '30%'],
				            title: '弹出框',
				            shade: 0.6,//遮罩透明度
				            shadeClose:true,//点击遮罩关闭层
				            moveType: 1,//拖拽风格，0是默认，1是传统拖动
				            shift: 1,//0-6的动画形式，-1不开启
				            fix:true,//不随滚动条滚动，一直在可视区域。
				            border:[0],
				            closeBtn:[1,true],
				            content: '<div style="padding:10px;">这是一个非常普通的页面层，可以传入内容</div>',
				            btn:['确定','取消']
				        });*/
				}
			}
		});
		
		
	});
	
})
