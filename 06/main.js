"use strict"
var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];
for(var i = 0; i <array1.length; i++) {
result.push(array1[i]);
}
for(var i = 0; i <array2.length; i++) {
	result.push(array2[i]);
}
console.log("result: ", result);
