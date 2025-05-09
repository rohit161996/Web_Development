var data=10;
data++;//postfix
++data;//prefix
data--;//postfix
--data;//prefix
console.log(data);

var data=10;
var a=data++;
// var a=++data;
console.log(data);
console.log(a);

var data=10;
// var a=++data - data;
// var a=data++ - data;
// var a=data-- + data++;
// var a=++data-data+data--;
// var a=--data+data++-data++-data;
var a=data--+--data+data--+data++;
console.log(data);
console.log(a);