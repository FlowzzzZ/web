<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta charset="utf-8" />
		<title>仓储管理系统</title>
		<%
		String basePath = request.getContextPath();
		%>
		<!--bootstrap-->
		<link href="Tools/bootstrap-3.3.7-dist/css/bootstrap.css" rel="stylesheet" />
		<!--bootstrap-table-->
		<link href="Tools/bootstrap-table-develop/dist/bootstrap-table.css" rel="stylesheet">
		<!--toolbar-->
		<link href="css/toolbar.css" rel="stylesheet">
		<!--datetimepicker-->
		<link href="Tools/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css" rel="stylesheet" />

		<script type="text/javascript">
			var basePath = "<%=basePath %>";
		</script>
		<!--jquery-->
		<script src="Tools/bootstrap-table-develop/docs/assets/js/jquery-3.2.1.js"></script>
		<!--bootstrap-->
		<script src="Tools/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
		<!--bootstrap-table-->
		<script src="Tools/bootstrap-table-develop/src/bootstrap-table.js"></script>
		<script src="Tools/bootstrap-table-develop/src/extensions/export/bootstrap-table-export.js"></script>
		<script src="Tools/bootstrap-table-develop/src/extensions/toolbar/bootstrap-table-toolbar.js"></script>
		<script src="Tools/bootstrap-table-develop/dist/locale/bootstrap-table-zh-CN.js"></script>
		<!--tableExport-->
		<script src="Tools/tableExport.jquery.plugin-master/tableExport.js"></script>
		<!--datetimepicker-->
		<script src="Tools/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
		<script src="Tools/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
		<!--js-->
		<script src="js/exorder/exorder.js"></script>
		<script src="js/exorder/exorderdatepicker.js"></script>

	</head>

	<body>
		<!--导航栏-->
		<nav class="navbar navbar-default  navbar-inverse navbar-fixed-top">
			<div class="container">
				<!-- 应用于移动设备的显示 -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
       					 <!-- 给屏幕阅读器使用，正常状态下不显示 -->
       					 <span class="sr-only">Toggle navigation</span>
       					<!--  移动设备下拉显示 -->
       					 <span class="icon-bar"></span>
        				 <span class="icon-bar"></span>
        				 <span class="icon-bar"></span>
      				</button>
					<a class="navbar-brand" href="#">上海嘉和诚康医疗器械有限公司</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

					<ul class="nav navbar-nav navbar-right">

						<li class="dropdown">
							<!-- 登录界面完成时显示用户名 -->
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户 <span class="caret"></span></a>
							<ul class="dropdown-menu">

								<li>
									<a href="#">更换账户</a>
								</li>

								<li role="separator" class="divider"></li>
								<li>
									<a href="#">退出</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

		<div id="toolbar">
			
			
					<button id="btn_add" type="button" class="btn btn-default">
 						<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
 					</button>
					<button id="btn_edit" type="button" class="btn btn-default">
 						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
 					</button>
					<button id="btn_refresh" type="button" class="btn btn-default">
 						<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
 					</button>
					<button id="btn_complete" type="button" class="btn btn-default">
 						<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>完成
 					</button>
					<button id="btn_expressExport" type="button" class="btn btn-default">
 						<span class="glyphicon glyphicon-export" aria-hidden="true"></span>快递导出
 					</button>
			
				
					<select name="clientname" id="clientname" style="margin-left:750px;height: 40px;width: 200px;">
						<option>test</option>
					</select>
				

			

		</div>

		<!--表格显示主体-->
		<table id="table">

		</table>

		<!--模态框-->

		<!--新增修改界面-->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:1000px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title hidden" id="myModalLabelAdd">新增</h4>
						<h4 class="modal-title hidden" id="myModalLabelEdit">修改</h4>
					</div>

					<div class="modal-body ">

						<!-- 序号 -->
						<input type="hidden" name="exorderId" class="form-control " id="exorderId">

						<div class="form-group row">
							<div class="col-md-2">
								<label for="exorderNumber">出库单编号</label>

							</div>
							<div class="col-md-10">
								<input type="text" name="exorderNumber" class="form-control " id="exorderNumber" placeholder="出库单编号" readonly="readonly">
							</div>

						</div>

						<!--动态加载-->
						<div class="form-group row">
							<div class="col-md-2">
								<label for="clientname">货主名称</label>
							</div>
							<div class="col-md-10">
								<select name="clientname" class="form-control able-delete clientname" id="clientname">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="planId">计划序号</label>
							</div>
							<div class="col-md-10">
								<input type="text" name="planId" class="form-control" id="planId" placeholder="计划序号">

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="infosource">信息来源</label>
							</div>
							<div class="col-md-10">
								<input type="text" name="infosource" class="form-control" id="infosource" placeholder="信息来源">

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="customerId">客户序号</label>
							</div>
							<div class="col-md-10">
								<input type="text" name="customerId" class="form-control" id="customerId" placeholder="客户序号">

							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="customername">客户名称</label>
							</div>
							<div class="col-md-8">
								<input type="text" name="customername" class="form-control" id="customername" placeholder="客户名称">

							</div>
							<div class="col-md-2">
								<a style="text-align: center" data-toggle="modal" href="#choseCustomername" class="form-control" id="customername-modal">选择</a>

							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="fromaddress">发货地址</label>
							</div>
							<div class="col-md-8">
								<input type="text" name="fromaddress" class="form-control" id="fromaddress" placeholder="发货地址">

							</div>
							<div class="col-md-2">
								<a style="text-align: center" data-toggle="modal" href="#choseCustomername" class="form-control" id="fromaddress-modal">选择</a>

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="toaddress">送货地址</label>
							</div>
							<div class="col-md-8">
								<input type="text" name="toaddress" class="form-control" id="toaddress" placeholder="送货地址">

							</div>
							<div class="col-md-2">
								<a style="text-align: center" data-toggle="modal" href="#choseCustomername" class="form-control" id="toaddress-modal">选择</a>

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="exdate">出库日期</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="exdate" class="form-control date-picker" id="exdate" placeholder="出库日期">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="businesstype">业务类型</label>
							</div>
							<div class="col-md-10">
								<select name="businesstype" class="form-control" id="businesstype">
									<option value="">===请选择===</option>
									<option value="1">销售</option>
									<option value="2">移库</option>
									<option value="3">采退</option>
									<option value="4">赠品</option>
									<option value="5">换货</option>
									<option value="6">其它</option>
									<option value="7">销毁</option>
								</select>

							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="isbonded">是否保税</label>
							</div>
							<div class="col-md-10">

								<input type="checkbox" name="isbonded" class="form-control" id="isbonded">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="ischecked">是否复核</label>
							</div>
							<div class="col-md-10">

								<input type="checkbox" name="ischecked" class="form-control" id="ischecked">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="storagetransportationrequirement">储运要求</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="storagetransportationrequirement" class="form-control" id="storagetransportationrequirement" placeholder="储运要求">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="issupervision">是否监管</label>
							</div>
							<div class="col-md-10">

								<input type="checkbox" name="issupervision" class="form-control" id="issupervision" placeholder="是否监管">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="customernumber">客户单号</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="customernumber" class="form-control" id="customernumber" placeholder="客户单号">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="contactman">联系人</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="contactman" class="form-control" id="contactman" placeholder="联系人">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="contacttel">联系电话</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="contacttel" class="form-control" id="contacttel" placeholder="联系电话">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="exstatus">出库状态</label>
							</div>
							<div class="col-md-10">
								<select name="exstatus" class="form-control" id="exstatus">
									<option value="">===请选择===</option>
									<option value="1">新建</option>
									<option value="2">执行中</option>
									<option value="3">部分出库</option>
									<option value="4">出库完成</option>
									<option value="5">历史出库</option>
									<option value="6">人工关闭</option>

								</select>

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="exbarcode">出库条码</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="exbarcode" class="form-control" id="exbarcode" placeholder="出库条码">
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="placementarea">摆放区域</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="placementarea" class="form-control" id="placementarea" placeholder="摆放区域">
							</div>
						</div>

						<!--动态加载-->
						<div class="form-group row">
							<div class="col-md-2">
								<label for="servicename">客服名称</label>
							</div>
							<div class="col-md-10">
								<select name="servicename" class="form-control able-delete servicename" id="servicename">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="pickman">拣货人</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="pickman" class="form-control" id="pickman" placeholder="拣货人">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="remark">备注</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="remark" class="form-control" id="remark" placeholder="备注">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="makeorderdate">制单日期</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="makeorderdate" class="form-control date-picker" id="makeorderdate" placeholder="制单日期">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="makeorderman">制单人</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="makeorderman" class="form-control " id="makeorderman" placeholder="制单人">
							</div>

						</div>
						<!--动态加载-->
						<div class="form-group row">
							<div class="col-md-2">
								<label for="storehouseId">仓库序号</label>
							</div>
							<div class="col-md-10">
								<select name="storehouseId" class="form-control able-delete storehouseId" id="storehouseId">
								</select>

							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="expresscompany">快递公司</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="expresscompany" class="form-control" id="expresscompany" placeholder="快递公司">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="shippingmethod">运送方式</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="shippingmethod" class="form-control" id="shippingmethod" placeholder="运送方式">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="clearingform">结算方式</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="clearingform" class="form-control" id="clearingform" placeholder="结算方式">
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-2">
								<label for="expressnumber">快递单号</label>
							</div>
							<div class="col-md-10">

								<input type="text" name="expressnumber" class="form-control" id="expressnumber" placeholder="快递单号">
							</div>

						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
						<button type="button" id="btn_submit" class="btn btn-primary btn_submit" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
					</div>
				</div>
			</div>
		</div>

		<!--选货-->
		<div class="modal fade" id="chose" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:1000px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title ">当前可用库存</h4>

					</div>

					<form class="form-inline" role="form">
						<div class="form-group">
							<label class="form-label">代码</label>
							<input type="text" class="form-control" id="goodsId">
							<label class="form-label">名称</label>
							<input type="text" class="form-control" id="goodsname">
							<label class="form-label">批号</label>
							<input type="text" class="form-control" id="batchnumber">
							<label class="form-label">规格</label>
							<input type="text" class="form-control" id="specifiationtype">
							<button id="btn_choseSearch" type="button" class="btn btn-default">
 								<span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索
 							</button>
							<button id="btn_choseAdd" type="button" class="btn btn-default">
 								<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>添加
 							</button>
						</div>
					</form>

					<table id="choseTable" class="table">

					</table>

				</div>
			</div>
		</div>

		<!--序列-->
		<div class="modal fade" id="sequence" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:500px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title ">登记出库单的序列码</h4>

					</div>

					<div class="modal-body ">

						<div class="col-md-2">
							<label for="totalNumber">总数:</label>
							<span id="totalNumber">
						</span>

						</div>
						<div class="col-md-8 col-md-offset-2">
							<button id="btn_sequenceCheck" type="button" class="btn btn-default">
 								<span class="glyphicon glyphicon-check" aria-hidden="true"></span>复核
 						</button>
							<button id="btn_sequenceComplete" type="button" class="btn btn-default">
 								<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>完成
 						</button>
							<button type="button" class="btn btn-default" data-dismiss="modal">
								<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭
						</button>
							<button id="btn_sequenceRemove" type="button" class="btn btn-default">
 								<span class="glyphicon glyphicon-erase" aria-hidden="true"></span>清除
 						</button>

						</div>

						<div class="col-md-2">
							<label for="batchnumber">批号</label>

						</div>
						<div class="col-md-10">
							<select name="batchnumber" class="form-control able-delete " id="batchnumber">
							</select>
						</div>

						<textarea style="width: 470px; height: 400px" id="textarea"></textarea>

					</div>

				</div>
			</div>
		</div>

		<!--快递登记-->
		<div class="modal fade" id="expressRegister" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:500px">
				<div class="modal-content">
					<div class="modal-header">
						
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h5class="modal-title ">快递登记</h4>
						

					</div>

					<div class="modal-body ">
						<div class="form-group row">
							<div class="col-md-3">
							<button type="button"  class="btn btn-primary" data-dismiss="modal" aria-label="Close" id="btn_save"><span aria-hidden="true">保存</span></button>
							</div>
						</div>
						
						<div class="form-group row">
							<div class="col-md-3">
								<label for="clientname">运送方式</label>
							</div>
							<div class="col-md-9">
								<select name="clientname" class="form-control able-delete clientname" id="clientname">
								</select>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-3">
								<label for="clientname">运输公司</label>
							</div>
							<div class="col-md-9">
								<select name="clientname" class="form-control able-delete clientname" id="clientname">
								</select>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-3">	
								<label for="customerId">运单编号</label>
							</div>
							<div class="col-md-9">
							<input type="text" name="customerId" class="form-control" id="customerId" placeholder="客户序号">
							
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-3">
								<label for="clientname">结算方式</label>
							</div>
							<div class="col-md-9">
								<select name="clientname" class="form-control able-delete clientname" id="clientname">
								</select>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-3">	
								<label for="customerId">联系人</label>
							</div>
							<div class="col-md-9">
							<input type="text" name="customerId" class="form-control" id="customerId"  readonly="readonly">
							
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-3">	
								<label for="customerId">联系电话</label>
							</div>
							<div class="col-md-9">
							<input type="text" name="customerId" class="form-control" id="customerId" readonly="readonly">
							
							</div>

						</div>
						<div class="form-group row">
							<div class="col-md-3">	
								<label for="customerId">运送地址</label>
							</div>
							<div class="col-md-9">
							<input type="text" name="customerId" class="form-control" id="customerId" readonly="readonly">
							
							</div>

						</div>	

					</div>

				</div>
			</div>
		</div>
		
		
		<div class="modal" id="choseCustomername" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="false">
			<div class="modal-dialog" role="document" style="width:500x">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel">请选择客户</h4>
					</div>
					
					<table id="customernameTable"></table>
					
				</div>
			</div>
		</div>

	</body>

</html>