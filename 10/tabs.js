(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            console.log('new value: ', selectElement.value);

        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }
})();
