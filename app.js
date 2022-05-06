fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => renderdata(jsondata));

let containerOne = document.getElementById("container-one")
let containerTwo = document.getElementById("container-two")
let containerThree = document.getElementById("container-three")

const renderImg = (num, index, data) => {
    const element = document.createElement('img')
    element.classList.add(`${num}`)
    element.src = data[index].img
    element.alt = "img"

    if (num === "one" || num === "two" || num === "three") {
        containerOne.appendChild(element)
    } else if (num === "four" || num === "five" || num === "six") {
        containerTwo.appendChild(element)
    } else {
        containerThree.appendChild(element)
    }
}

const ListNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

const renderdata = (jsondata) => {
    for (let index = 0; index < ListNum.length; index++) {
        renderImg(ListNum[index], index, jsondata)

    }
}

let btnMosaic = document.getElementById("btn-mosaic")
let btnColumn = document.getElementById("btn-column")
let imgPortfolio = document.getElementsByClassName("img-portfolio")

btnMosaic.addEventListener('click', () => {
    containerPortfolio.style.flexWrap = "wrap"
    containerPortfolio.style.flexDirection = "row"
    containerPortfolio.style.height = "90vh"
    imgPortfolio.style.width = "10em"
})
btnColumn.addEventListener('click', () => {
    containerPortfolio.style.flexWrap = "nowrap"
    containerPortfolio.style.flexDirection = "column"
    containerPortfolio.style.height = "100%"
    imgPortfolio.style.width = "auto"
    
})



const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.navigation-header')

function toggleMenu() {
    menu.classList.toggle('opened')
}

function removeMenu() {
    menu.classList.remove('opened')
}
open.addEventListener('click', toggleMenu)
close.addEventListener('click', toggleMenu)