let aHotel = document.getElementById('elem_1');
let contacts = document.getElementById('elem_2');
let hiddenMap = document.getElementById('map');
let hiddenElement = document.getElementById('scrollElem')

const burger = document.querySelector('#burger');

const menu = document.querySelector('#menu');

burger.addEventListener('onclick', () => {
    if(menu.classList.contains('disp' == true)) {
        menu.classList.remove('disp');
    } else {
        menu.classList.add('disp');
    }
})

function handleButton() {
    hiddenElement.scrollIntoView({block: 'center', behavior: 'smooth'})
}
function handleButtonMap() {
    hiddenMap.scrollIntoView({block: 'center', behavior: 'smooth'})
}
aHotel.addEventListener('click', handleButton)
contacts.addEventListener('click', handleButtonMap)