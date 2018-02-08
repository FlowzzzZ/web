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
		<script src="js/exdetail/exdetail.js"></script>
		<script src="js/exdetail/exdetaildatepicker.js"></script>

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
					<a class="navbar-brand" href="#">仓储管理系统</a>
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

		<div id="toolbar" class="btn-group">
			<button id="btn_copy" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-copy" aria-hidden="true"></span>复制
 			</button>
			<button id="btn_delete" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
 			</button>
			<button id="btn_refresh" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
 			</button>
			<button id="btn_print" type="button" class="btn btn-default">
 				<span class="glyphicon glyphicon-print" aria-hidden="true"></span>打印
 			</button>

		</div>

		<!--表格显示主体-->
		<table id="table">

		</table>

		<!--模态框-->

		<!--批号-->
		<div class="modal fade" id="batchnumber" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:1000px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title " id="myModalLabelAdd">当前可用库存</h4>

					</div>

					<div class="modal-body ">
						<table id="batchnumberTable" data-toggle="table" data-url="data1.json">
							<thead>
								<tr>
									<th data-field="goodsId">
										代码
									</th>
									<th data-field="goodsname" data-width="200px" data-valign="top">
										商品
									</th>
									<!--data-field未知-->
									<th data-field="kuwei" >
										库位
									</th>
									<!--data-field未知-->
									<th data-field="kucun">
										库存
									</th>
									<!--data-field未知-->
									<th data-field="suoding" >
										锁定	
									</th>
									<!--data-field未知-->
									<th data-field="单位">
										单位
									</th>
									
									<th data-field="goodsId" >
										规格
									</th>
									<th data-field="registration">
										注册证
									</th>
									<th data-field="batchnumber" >
										批号
									</th>
									<th data-field="producedate">
										生产日期
									</th>
									<th data-field="failuredate" >
										失效日期
									</th>
									<th data-field="serialNumber">
										序列码
									</th>
									<th data-field="packingunit">
										包装单位
									</th>
									<th data-field="conversionrate">
										换算率
									</th>
									<!--data-field未知-->
									<th data-field="jianshu">
										件数
									</th>
									<th data-field="origin">
										产地
									</th>
									<th data-field="goodsbarcode">
										条码
									</th>
									<th data-field="goodsstatus">
										状态
									</th>
									
								</tr>
							</thead>
						</table>

					</div>

				</div>
			</div>
		</div>

		<!--搜索界面-->
		<div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:500x">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel">搜索</h4>
					</div>

					<div class="modal-body ">

						<div class="form-group row">
							<div class="col-md-2">
								<label for="customername1">客户名称</label>

							</div>
							<div class="col-md-10">
								<input type="text" name="customername1" class="form-control " id="customername1" placeholder="客户名称">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="customernumber1">客户单号</label>

							</div>
							<div class="col-md-10">
								<input type="text" name="customernumber1" class="form-control " id="customernumber1" placeholder="客户单号">
							</div>

						</div>

						<div class="form-group row">
							<div class="col-md-2">
								<label for="ENDate">录入日期</label>

							</div>

							<div class="col-md-4">
								<input type="text" name="ENDate1" class="form-control ENDate" id="ENDate1" placeholder="录入日期">

							</div>
							<div class="col-md-2 text-center vertical-middle-sm">
								<label for="ENDate">至</label>
							</div>
							<div class="col-md-4">
								<input type="text" name="ENDate2" class="form-control ENDate" id="ENDate2" placeholder="录入日期">
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

	</body>

</html>