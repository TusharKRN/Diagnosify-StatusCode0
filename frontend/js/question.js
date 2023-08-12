// change multiple slider values

var sliders = document.getElementsByClassName("slider-bar");
var values = document.getElementsByClassName("value");

for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("input", function() {
        for (var j = 0; j < sliders.length; j++) {
            values[j].innerHTML = sliders[j].value;
        }
    });
}

var next = document.getElementById("next");
var ans = '';
next.onclick = function() {
    for (var i = 0; i < sliders.length; i++) {
        if (sliders[i].value >= 5) {
            ans += i;
        }
    }
    sessionStorage.setItem("ans", ans);
}