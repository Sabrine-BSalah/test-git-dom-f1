
let favs = Array.from(document.getElementsByClassName("fa-heart"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"))
let minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))


// favourites btns part
for (let i = 0; i < favs.length; i++) {
    favs[i].addEventListener("click", function () {
        // if (favs[i].style.color === "red") {
        //     favs[i].style.color = "#212529"
        // }
        // else {
        //     favs[i].style.color = "red"
        // }

        favs[i].style.color === "red" ? favs[i].style.color = "#212529" : favs[i].style.color = "red"
    })
}

// delete btns part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentElement.parentElement.remove()
        total()
    })

}


// plus btns part
for (let i in plusBtns) {
    plusBtns[i].addEventListener("click", function () {
        plusBtns[i].nextElementSibling.innerText++;
        total()
    })
}

// minus btns part
for (let i in minusBtns) {
    minusBtns[i].addEventListener("click", function () {
        if (minusBtns[i].previousElementSibling.innerText > 0)
            minusBtns[i].previousElementSibling.innerText--
        total()
    })
}

// function total
function total() {
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let qutes = Array.from(document.querySelectorAll(".qute"))
    let totalPrice = document.querySelector(".total-price")

    let s = 0;
    for (let i = 0; i < qutes.length; i++) {
        s = s + unitPrices[i].innerText.replace("$", "") * qutes[i].innerText
    }
    console.log(s)
    totalPrice.innerText = s
}


