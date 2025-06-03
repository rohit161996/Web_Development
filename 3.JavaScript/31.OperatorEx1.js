var data; //undefined
data =data +10;//NaN
//data =data +'Rahul';//undefinedRahul
var data=15+2;
var data=15+2+"hi";
var data=15+2+"hi"+5;
var data=15+2+"hi"+5+5;
var data=15+2+"hi"+(5+5);
var data=15+2-"hi"+5+5; //NaN
var data=15+2-2+"hi"+5+5;
var data=15+2+"hi"+5-5; //NaN
var data=15+2+"hi"+5*5;
var data=15+2+"hi"+5/5;
var data=15+2+"hi"+5%5;
var data=15+2+"hi"+5**5;
var data=7/0;//Infinity

console.log(data);