document.querySelectorAll('.slides').forEach(function (element) {
    var slideSize = element.clientWidth;
    currentPosition = 0;

    setInterval(function () {
        currentPosition = element.scrollLeft + slideSize;

        if (currentPosition >= element.scrollWidth) {
            currentPosition = 0;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    }, 6000);
});

var slider = document.getElementsByClassName('slides')[0];
document.getElementById('slider-left').onclick = sliderRight;

function sliderLeft() {
    var offset = slider.scrollLeft + 800;
    if (offset >= slider.scrollWidth) {
        offset = 0;
    }
    slider.scroll({left: offset, behavior: 'smooth'});
}

document.getElementById('slider-right').onclick = sliderLeft;

function sliderRight() {
    var offset = slider.scrollLeft - 800;
    if (offset <= 0) {
        offset = slider.scrollWidth;
    }
    slider.scroll({left: offset, behavior: 'smooth'});
}
