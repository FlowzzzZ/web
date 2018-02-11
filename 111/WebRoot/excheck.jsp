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
		<!--jquery-ui-->
		<script src="Tools/jquery-ui-1.12.1/jquery-ui.js"></script>
		<!--datetimepicker-->
		<script src="Tools/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
		<script src="Tools/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
		<!--js-->
		<script src="js/excheck/excheck.js"></script>

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

		<!--表格显示主体-->
		<table id="table">

		</table>

		<!--模态框-->

		<!--功能菜单-->
		<div class="modal" id="menu" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width:110px;top: 20%;right:35%;">
				<div class="modal-content" >
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>
						<h5 class="modal-title" id="myModalLabelFollow">功能菜单</h5>

					</div>

					<div class="modal-body ">

						<button style="margin-bottom: 30px;" type="button" id="btn_checkReport" class="btn btn-primary" data-dismiss="modal"><span aria-hidden="true"></span>复核报告</button>

						<button style="margin-bottom: 30px;" type="button" id="btn_checkFinish" class="btn btn-primary " data-dismiss="modal"><span aria-hidden="true"></span>复核完成</button>

						<button style="margin-bottom: 30px;" type="button" id="btn_delete" class="btn btn-primary " data-dismiss="modal"><span aria-hidden="true"></span>删除选中</button>

						<button style="margin-bottom: 30px;" type="button" id="btn_checkBack" class="btn btn-primary " data-dismiss="modal"><span aria-hidden="true"></span>复核回退</button>
						
						<button style="margin-bottom: 30px;" type="button" class="btn btn-primary " data-dismiss="modal"><span aria-hidden="true"></span>取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;&nbsp;&nbsp;</button>
					</div>

				</div>

			</div>
		</div>

		

	</body>

</html>