
const sList = document.querySelector(".s")
"mouseover", "mouseout"
console.log(sList);

over = new function (el) {
    console.log(el);
    sList[0].src = "img/star.png"
    // const index = el.id
    // for (let i = 1; i <= index; i++){
    //     sList[i - 1].src = "img/star.png"
    // }
}

out = new function (el) {
    const index = el.id
    for (let i = 1; i <= index; i++){
        sList[i - 1].src = "img/star-empty.png"
    }
}

sList[0].addEventListener("click", over);