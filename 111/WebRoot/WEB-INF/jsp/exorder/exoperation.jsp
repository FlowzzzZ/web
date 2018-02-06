<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
	String basePath = request.getContextPath();
%>
<head>
<script type="text/javascript">
var basePath = "<%=basePath %>";
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" href="<%=basePath %>/css/explanList.css" rel="stylesheet" />
<script type="text/javascript" src="<%=basePath %>/js/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath %>/kkpager/kkpager_blue.css"/>
<script type="text/javascript" src="<%=basePath %>/kkpager/kkpager.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/exorder/exoperation.js"></script>
<title>查询出库计划列表</title>
<script type="text/javascript">
function addExplan(){
	//跳页面
	window.location.href='${pageContext.request.contextPath }/xxx'

}

</script>
</head>
<body> 
<body> 
<div class="contains">
	<div class="header">
		<div class="header_left">
			<span class="search_tips">出库编号：</span>
			<input class="common_input" type="text" name="exorderNumber" id="exorderNumber"/>
			<span class="search_tips">出库时间段：</span>
			<input class="common_input" type="text" name="startTime" id="startTime"/>：
			<input class="common_input" type="text" name="endTime" id="endTime"/>
			<input class="common_btn" type="button" value="查询" id="exorderSearch"/>
		</div>
		<div class="header_right">
			<input class="common_btn" type="button" value="增加" id="toAddExorder"/>
			<input class="common_btn" type="button" value="批量删除" id="deleteExorders"/>
		</div>
	</div>
	<div class="table_name">出库操作列表：</div>
	<div class="table">
		<table width="100%" border=1 id="table-result">
			<thead>
			<tr class="table_header">
				<td>选择</td>
				<td>出库编号</td>
				<td>货主</td>
				<td>客户名称</td>
				<td>送货地址</td>
				<td>出库日期</td>
				<td>储运要求</td>
				<td>客户单号</td>
				<td>运单编号</td>
				<td>状态</td>
				<td>备注</td>
				<td>录入人</td>
				<td>选货</td>
				<td>出库明细</td>
				<td>拣货</td>
				<td>序列</td>
				<td>复核</td>
				<td>装箱</td>
				<td>快递</td>
				<td>详单</td>
			</tr>
			</thead>
			<tbody id="tbody-result">
			
			</tbody>
		</table>
		<div class="paging kk_paging">
			<div id="kkpager" style="clear: none;float: right;	width: 1000px;padding-right: 100px;"></div>
		</div>
	</div>

</div>
<script>
/**
 * 
 * @param currentPage
 * @param totalPage
 * @param totalCounts
 * @param func  ,不需要回调修改页面的函数
 * @returns
 */
function kkpagerInit(currentPage,totalPages,totalCounts,func){
	var sum = totalCounts;//总数据条数后台返回数据  
    var totalPage = totalPages;//总页数总数据条数/每页显示数 向上取整  
    var current = 1;//当前页数      后台返回数据  
    if(current == 0 || currentPage==undefined){  
    	current = 1;  
    } else{
    	current = currentPage;
    }
    //初始化函数  
    kkpager.generPageHtml({  
            pno : current, //当前页数  
            total : totalPage,//总页数  
            totalRecords  : sum, //总数据条数  
            mode:'click', //这里设置为click模式  
            lang : {  
                    prePageText : '上一页',  
                    nextPageText : '下一页',  
                    totalPageBeforeText : '共',  
                    totalPageAfterText : '页 '+totalCounts+'条',  
                    totalRecordsAfterText : '条数据',  
                    gopageBeforeText : ' 转到',  
                    gopageButtonOkText : '确定',  
                    gopageAfterText : '页',  
                    buttonTipBeforeText : '第',  
                    buttonTipAfterText : '页'  
        },  
        click:function(n){ 
        	func(n);
        	this.selectPage(n); //手动条用selectPage进行页码选中切换  
       },  
        //设置href链接地址,默认#  
        getHref:function(n){  
        	return "javascript:;;";  
        }  
	},true); 
};

</script>
</body>

</html>