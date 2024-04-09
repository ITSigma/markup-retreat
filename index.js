
const sList = document.getElementsByClassName("s")

console.log(sList);

over = function (index) {
    for (let i = 0; i <= index; i++) {
        sList[i].style.visibility = "visible";
    }
}

out = function () {
    for (let i= 0; i < 5; i++){
        sList[i].style.visibility = "hidden";
    }
}
