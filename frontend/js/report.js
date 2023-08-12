var view = document.getElementById("view");
var more = document.getElementById("more");
var bmiVal = sessionStorage.getItem("bmi");

var bmi = document.getElementById("bmi");
bmi.innerHTML = bmiVal;
view.onclick = showMore;


function showMore() {
    if (view.innerHTML == "Find More Details") {
        view.style.display = "block";
        view.innerHTML = "Show Less";
        more.classList.remove("hide");
    } else {
        view.innerHTML = "Find More Details";
        more.classList.add("hide");
    }
}

var ans = sessionStorage.getItem("ans");
console.log(ans);