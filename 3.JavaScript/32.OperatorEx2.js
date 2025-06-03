var data="Ram"-"5";//NaN
var data="Ram"*"5";//NaN
var data="Ram"/"5";//NaN
var data="Ram"%"5";//NaN
var data="Ram"**"5";//NaN
var data="Ram">"5";//NaN
var data="12"+"4";//124
var data=12+"4";//124
var data=12+4;//16
var data="12"+4;//124
var data="12"-4;//8
var data="12"-"4";//8
var data="12"/"4";//3
var data="12"*"4";//48
var data="12"%"4";//0
var data="12"**"4";//20736

var data=12+ +"4";//16
var data=+"12"+4;//16
var data="12"+ +4;//124
var data="12"- +4;//8
var data="12"- -4;//16

console.log(data);