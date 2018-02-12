$(function () {
	


$('.date-picker ').datetimepicker({ 
	format: 'yyyy-mm-dd',//日期的格式
    //选择器的开始日期
    //日期选择完成后是否关闭选择框
    bootcssVer:3,//显示向左向右的箭头
    //语言
    minView: "month",//表示日期选择的最小范围，默认是hour
    language: 'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0,
	pickerPosition: 'top-right',
	
        
		
});


})