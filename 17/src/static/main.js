(function () {
    "use strict";

    var e = document.getElementById('photos');
    var arr = ["Urban photos", "Wedding photos", "Nature photos", "Animal photos"];
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = arr[i];
        e.appendChild(option);
    }

    document.querySelectorAll('option').forEach(optionFactory);

    function optionFactory(element) {
        console.log(element);
    }
})();