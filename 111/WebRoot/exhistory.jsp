

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

		<!--jquery优先导入-->
		<script src="Tools/bootstrap-table-develop/docs/assets/js/jquery-3.2.1.js"></script>
		<!--bootstrap-->
		<script src="Tools/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
		<!--bootstraptable-->
		<script src="Tools/bootstrap-table-develop/src/bootstrap-table.js"></script>
		<script src="Tools/bootstrap-table-develop/src/extensions/toolbar/bootstrap-table-toolbar.js"></script>
		<script src="Tools/bootstrap-table-develop/dist/locale/bootstrap-table-zh-CN.js"></script>
		<!--jquery-ui-->
		<script src="Tools/jquery-ui-1.12.1/jquery-ui.js"></script>
		<<!--tableExport-->
		<script src="Tools/printThis-master/printThis.js"></script>
		<!--export-->
		<script src="Tools/bootstrap-table-develop/src/extensions/export/bootstrap-table-export.js"></script>
		<!--js-->
		<script src="js/exhistory/exhistory.js"></script>

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

		<div id="toolbar" >
			<button id="btn_search" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>查询
 			</button>
			<button id="btn_refresh" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
 			</button>
			<button id="btn_export" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-export" aria-hidden="true"></span>导出
 			</button>
			<button id="btn_followExport" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-print" aria-hidden="true"></span>同行单打印
 			</button>
			<button id="btn_pickExport" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-print" aria-hidden="true"></span>拣货单打印
 			</button>
			<button id="btn_express" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-file" aria-hidden="true"></span>快递导出
 			</button>

		</div>

		<!--表格显示主体-->
		<table id="table">

		</table>

		<!--模态框-->

		<!--搜索界面-->
		<div class="modal fade" id="search" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width:500x">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel">搜索</h4>
					</div>

					<div class="modal-body ">

						<div class="form-group row">
							<div class="col-md-3">
								<label for="exhistoryNumer">出库历史编号</label>

							</div>
							<div class="col-md-9">
								<input type="text" name="exhistoryNumer" class="form-control " id="exhistoryNumer" placeholder="出库历史编号">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-3">
								<label for="principalname">委托方企业名称</label>
							</div>
							<div class="col-md-9">
								<select name="principalname" class="form-control able-delete principalname" id="principalname">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-3">
								<label for="receivingcustomername">收货客户名称</label>

							</div>
							<div class="col-md-9">
								<input type="text" name="receivingcustomername" class="form-control " id="receivingcustomername" placeholder="收货客户名称">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-3">
								<label for="receivingaddress">收货地址</label>

							</div>
							<div class="col-md-9">
								<input type="text" name="receivingaddress" class="form-control " id="receivingaddress" placeholder="收货地址">
							</div>

						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
						<button type="button" id="beginSearch" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索</button>
					</div>
				</div>
			</div>
		</div>

		<!--同行+拣货单-->
		<div class="modal " id="followPickExport" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width:300px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>
						<h5 class="modal-title hidden" id="myModalLabelFollow">随货同行单打印</h5>
						<h5 class="modal-title hidden" id="myModalLabelPick">拣货单打印</h5>
					</div>

					<div class="modal-body ">

						<div class="form-group row">
							<div class="col-md-9">

								<input type="text" name="exhistoryNumer" class="form-control " id="exhistoryNumer" placeholder="请输入出库编号">
							</div>
							<div class="col-md-3">
								<button type="button" class="btn btn-default" id="beginPrint">打印</button>
							</div>

						</div>

					</div>

				</div>
			</div>
		</div>

		

	</body>

</html>