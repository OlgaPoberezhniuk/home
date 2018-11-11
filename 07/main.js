var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {

function compareNumeric(a, b) {
        if (a>b) return 1;
        if (a<b) return -1;
    };
var number = [1, 500, 30];
number.sort(compareNumeric);
//console.log(number);
    
    //еще вариант
//var number = [30, 1, 500];
    //number.sort(function (a, b) {
    //return a - b;
    //});
//console.log(number); 

function compareString(a,b) {
        if (a>b) return 1;
        if (a<b) return -1;
    };
var string = ['firstString', 'abc'];
string.sort(compareString);
//console.log (string);

//еще вариант
//var string = ['firstString', 'abc'];
//string.sort();
//console.log(string);

var boolean = [true, false, true];
boolean.sort(function (a, b) {
return b - a;
});
//console.log (boolean);

var array = [null];

var object  =  {test: 'Object'};

var undefined = [undefined];
var result = number.concat(null, string, object, undefined, boolean);
console.log('result', result);
}

