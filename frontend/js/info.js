var height = document.getElementById("height");
var weight = document.getElementById("weight");
var next = document.getElementById("next");

next.onclick = function() {
    var bmi = Math.floor(weight.value / (height.value * height.value) * 10000);
    console.log(bmi);
    sessionStorage.setItem("bmi", bmi);
}