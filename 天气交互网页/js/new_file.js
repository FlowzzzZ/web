//设置数据
var aqiSourceData = [
  [32, 54, 76, 121, 145, 167, 200, 300, 500, 500, 500, 500, 430, 320, 15, 15, 26, 43, 41, 200, 345],
  [32, 54, 76, 121, 145, 222, 11, 223, 50, 11, 11, 500, 430, 320, 15, 15, 26, 43, 41, 20, 345],
  [32, 54, 76, 11, 145, 167, 200, 300, 500, 500, 50, 500, 430, 320, 15, 15, 26, 43, 41, 200, 345]
];
	

//设置good light common界限
var AQI_GOOD_MAX =100;
var AQI_LIGHT_MAX =200;
var AQI_COMMON_MAX =300;
//计算各种情况的天数
function transMonthDataFormat(src) {
  var outputData = {
    "aqiBad": 0,
    "aqiCommon": 0,
    "aqiLight": 0,
    "aqiGood": 0
  };
  for (var i = 0, len = src.length; i < len; i++) {
    if (src[i] < AQI_GOOD_MAX) {
      outputData.aqiGood++;
    } else if (src[i] < AQI_LIGHT_MAX) {
      outputData.aqiLight++;
    } else if (src[i] < AQI_COMMON_MAX) {
      outputData.aqiCommon++;
    } else {
      outputData.aqiBad++;
    }
  }
  return outputData;
}
//创建新元素
function renderMonthChart(month, data) {
  var returnHtml = "";
  returnHtml += '<li>';
  returnHtml += month + '：';
  returnHtml += '<span id="test" name="aqi-bad" class="aqi-bad" style="width:' + data.aqiBad * 20 + 'px">'+data.aqiBad+'天</span>';
  returnHtml += '<span name="aqi-common" class="aqi-common" style="width:' + data.aqiCommon * 20 + 'px">'+data.aqiCommon+'天</span>';
  returnHtml += '<span name="aqi-light" class="aqi-light" style="width:' + data.aqiLight * 20 + 'px">'+data.aqiLight+'天</span>';
  returnHtml += '<span name="aqi-good" class="aqi-good" style="width:' + data.aqiGood * 20 + 'px">'+data.aqiGood+'天</span>';
  returnHtml += '</li>';
  return returnHtml;
}
function aqiChartGenerator(src) {
	var chartHtml = "";
	for (var i = 0, len = src.length; i < len; i++) {
   		var monthText = (i+1)+'月';
		var monthData = transMonthDataFormat(src[i]);
		chartHtml += renderMonthChart(monthText, monthData);
	}
	document.getElementsByClassName("aqi-chart")[0].innerHTML = chartHtml;
	//document.getElementById("chart-wrapper").innerHTML = chartHtml;
}

window.onload= function(){
	aqiChartGenerator(aqiSourceData);
}


