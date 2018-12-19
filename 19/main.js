var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

var dataText = data.filter(function (number) {
    return (number.text == 'some text 1') || (number.text == 'some text 4');
});

var dataItem = dataText.map(function (number) {
    return 'item1 ' + number.text;
});

dataItem.forEach(function (item) {
    console.log(item);
});
//}

// write code here uss filter, map and forEach functions of Array

// expected console.log
// 'item 1 some text 1'
// 'item 1 some text 4'
