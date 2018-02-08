$(function () {
	

$('.date-picker ').datetimepicker({  
	language: 'zh-CN',//语言
	container:".modal-content" ,
	format: 'yyyy-mm-dd hh:ii:ss',//日期的格式
    
    bootcssVer:3,//显示向左向右的箭头
    //语言
    minView: "hour",//表示日期选择的最小范围，默认是hour
    
    weekStart: 1,
    todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 0,
	forceParse: 0
        
		
});

$('.ENDate').datetimepicker({ 
	format: 'yyyy-mm-dd hh:ii:ss',//日期的格式
    //选择器的开始日期
    //日期选择完成后是否关闭选择框
    bootcssVer:3,//显示向左向右的箭头
    //语言
    minView: "month",//表示日期选择的最小范围，默认是hour
    
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0
	
        
		
});


})