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
		<!--jquery-ui-->
		<script src="Tools/jquery-ui-1.12.1/jquery-ui.js"></script>
		<!--tableExport-->
		<script src="Tools/tableExport.jquery.plugin-master/tableExport.js"></script>
		<!--datetimepicker-->
		<script src="Tools/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
		<script src="Tools/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
		<!--js-->
		<script src="js/box/box.js"></script>
		<script src="js/box/boxdatepicker.js"></script>
		
		
	    
	    
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

		

		<div id="toolbar" class="btn-group">
			<button id="btn_search" type="button" class="btn btn-lg">
 				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索
 			</button>
 			<button id="btn_add" type="button" class="btn btn-lg">
 				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
 			</button>
			
			<button id="btn_delete" type="button" class="btn btn-lg">
 				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
 			</button>
 			<button id="btn_refresh" type="button" class="btn btn-lg">
 						<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
 			</button>
 			
 			
		</div>

		<!--表格显示主体-->
		<table id="table">

		</table>

		<!--模态框-->
		
			
		<!--新增修改界面-->
		<div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:1000px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabelAdd">新增</h4>
						
					</div>
					
					<div class="modal-body ">

						
							
  						<!-- 序号 -->	
  						<input type="hidden" name="explanId" class="form-control " id="explanId" readonly="readonly" >	
  							
							
						
						
						
						<div class="form-group row" >
							<div class="col-md-2">
								<label for="boxNumber">箱号</label>
								
							</div>
  							<div class="col-md-10">
  								<input type="text" name="boxNumber" class="form-control " id="boxNumber" placeholder="无需填写，自动生成箱号" readonly="readonly" >	
  							</div>
							
						</div>

						<div class="form-group row">
							<div class="col-md-2">	
								<label for="volume">体积</label>
							</div>
							<div class="col-md-10">
							<input type="text" name="volume" class="form-control" id="volume" placeholder="体积">
							
							</div>

						</div>
						
						<!--动态加载？？？？？？？？？？？？-->
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="clientname" >箱型</label>
							</div>
							<div class="col-md-10">
							<select name="boxtype;" class="form-control able-delete" id="boxtype;">
							</select>
							</div>
						</div>
						
						

						

						<div class="form-group row">
							<div class="col-md-2">	
								<label for="state">状态</label>
							</div>
							<div class="col-md-10">
							<input type="text" name="state" class="form-control" id="state" placeholder="新建"  readonly="readonly" >
							
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-2">	
								<label for="starttime">开始装箱时间</label>
							</div>
							<div class="col-md-10">
							
								<input type="text" name="starttime" class="form-control date-picker" id="starttime" placeholder="开始装箱时间">
							</div>
							
							
						</div>
						
						
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="endtime">结束装箱时间</label>
							</div>
							<div class="col-md-10">
							
								<input type="text" name="endtime" class="form-control date-picker" id="endtime" placeholder="开始装箱时间">
							</div>
							
							
						</div>
						
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="isoccupied" >是否占用</label>
							</div>
							<div class="col-md-10">
							
								<input type="checkbox" name="isoccupied" class="form-control" id="isoccupied" >
							</div>
							
							
						</div>
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="isturned" >是否周转</label>
							</div>
							<div class="col-md-10">
							
								<input type="checkbox" name="isturned" class="form-control" id="isturned" >
							</div>
							
							
						</div>
						
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="makeorderdate">录入日期</label>
							</div>
							<div class="col-md-10">
							
								<input type="text" name="makeorderdate" class="form-control date-picker" id="makeorderdate" readonly="readonly" >
							</div>
							
							
						</div>
						<div class="form-group row">
							<div class="col-md-2">	
								<label for="makeorderman">录入人</label>
							</div>
							<div class="col-md-10">
							<input type="text" name="makeorderman" class="form-control" id="makeorderman" readonly="readonly" >
							
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
		
		<!--搜索界面-->
		<div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:500x">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel">搜索</h4>
					</div>
					
					<div class="modal-body ">
						
						<div class="form-group row" >
							<div class="col-md-2">
								<label for="boxNumber">箱号</label>
								
							</div>
  							<div class="col-md-10">
  								<input type="text" name="boxNumber" class="form-control " id="boxNumber" placeholder="箱号" >	
  							</div>
							
						</div>
						
						<div class="form-group row" >
							<div class="col-md-2">
								<label for="boxtype">箱型</label>
								
							</div>
  							<div class="col-md-10">
  								<input type="text" name="boxtype" class="form-control " id="boxtype" placeholder="客户单号" >	
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