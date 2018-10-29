"use strict"
var array1 = [123, "string", true, {value: 321}, null],
   array2 = ["first", "second", "last"],
   array2 = ["first", "second", "last"],
   result = [];
for(var i = 0; i <array1.length; i++) {
result[i] = array1[i];
}
for(var i = array1.length; i <array2.length + array1.length; i++) {
result[i] = array2[i - array1.length];
}
console.log("result: ", result);
