var view = document.getElementById("view");
var more = document.getElementById("more");

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