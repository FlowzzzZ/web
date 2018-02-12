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
		<script src="js/packing/packing.js"></script>
		<script src="js/packing/packingdatepicker.js"></script>

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

		<!--装箱-->
		<div style="margin:0 200px">

			<div class="form-group row">
				<div class="col-md-2">
					<label for="boxId">箱号</label>

				</div>
				<div class="col-md-8">
					<input type="text" name="boxId" class="form-control btn btn-default"  id="boxId"readonly="readonly">
				</div>
				<div class="col-md-2">
					<button type="button" name="btn_packing" class="form-control btn btn-default" id="btn_packing"><span>选择箱子</span></button>
				</div>

			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="boxtype">箱型</label>
				</div>
				<div class="col-md-10">
					<input type="text" name="boxtype" class="form-control " id="boxtype" readonly="readonly">
				</div>
			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="specificationtype">规格</label>

				</div>
				<div class="col-md-8">
					<input type="text" name="specificationtype" class="form-control " id="specificationtype" readonly="readonly">
				</div>
				<div class="col-md-2">
					<button type="button" name="btn_choseGoods" class="form-control " id="btn_choseGoods"><span>货品选择</span></button>
				</div>

			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="batchnumber">批号</label>
				</div>
				<div class="col-md-10">
					<input type="text" name="batchnumber" class="form-control" id="batchnumber" readonly="readonly">

				</div>
			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="SerialNumber">序列号</label>
				</div>
				<div class="col-md-10">
					<input type="text" name="SerialNumber" class="form-control" id="SerialNumber" readonly="readonly">

				</div>
			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="packingquantity">装箱数量</label>
				</div>
				<div class="col-md-10">
					<input type="text" name="packingquantity" class="form-control" id="packingquantity" placeholder="装箱数量">

				</div>

			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="packinginstruction">装箱说明</label>
				</div>
				<div class="col-md-10">
					<input type="text" name="packinginstruction" class="form-control" id="packinginstruction" placeholder="装箱说明">

				</div>

			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="makeorderdate">制单日期</label>
				</div>
				<div class="col-md-10">

					<input type="text" name="makeorderdate" class="form-control date-picker" id="makeorderdate">
				</div>

			</div>

			<div class="form-group row">
				<div class="col-md-2">
					<label for="makeorderman">制单人</label>
				</div>
				<div class="col-md-10">
					<select name="makeorderman" class="form-control able-delete makeorderman" id="makeorderman">
					</select>
				</div>

			</div>

			<div class="pull-right">
				<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
				<button type="button" id="btn_submit" class="btn btn-primary btn_submit"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
			</div>
		</div>

		<!--<!--装箱界面-->
		<!--选择箱子-->
		<div class="modal fade" id="packing-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title ">包装箱</h4>

					</div>

					<table id="boxIdTable">

					</table>

				</div>
			</div>
		</div>
		
		<!--货品选择-->
		<div class="modal fade" id="choseGoods-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title ">出库明细</h4>

					</div>

					<table id="choseGoodsTable">

					</table>

				</div>
			</div>
		</div>
			


	</body>

</html>