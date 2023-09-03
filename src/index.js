import homePage from "./homePage";
import menuPage from "./meunPage";
import contactPage from "./contactPage";

import './style.css';

// Add navbar options to DOM
const contentDiv = document.getElementById("content")
const header = document.createElement('header');
const nav = document.createElement('nav');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');
const headerText = document.createElement('h1');
let tabs = [homeTab, menuTab, contactTab]

headerText.innerText = "Quick Bites"
homeTab.innerText = "Home";
menuTab.innerText = "Menu";
contactTab.innerText = "Contact";

headerText.classList.add('headerText');

tabs.forEach((e)=> {
    e.classList.add('notSelected')
    nav.appendChild(e);
})

header.appendChild(headerText)
header.appendChild(nav);

document.body.insertBefore(header, contentDiv);

// Create dropdown menu
const dropdownMenu = document.createElement('div');

dropdownMenu.classList.add('toggle-btn');

for (let i = 0; i <= 3; i++) {
    const div = document.createElement('div');
    dropdownMenu.appendChild(div);
}

// Create dropdown display
const dropdownDisplay = document.createElement('div');
dropdownDisplay.classList.add('dropdown-menu');
const dropDownItems = ['Home', 'Menu', 'Contact'];

dropDownItems.forEach((item)=> {
    let li = document.createElement('li');
    li.innerText = item;
    li.addEventListener('click', function() {
        resetPage();
        loadPage(li);
    });
    dropdownDisplay.appendChild(li);
});

document.body.insertBefore(dropdownDisplay, header);

// Check if drop down button is clicked

dropdownMenu.addEventListener("click", function() {
    dropdownDisplay.classList.toggle('open');

    dropdownMenu.classList.toggle('open');
});

window.addEventListener("resize", function() {
    dropdownDisplay.classList.remove('open');
    console.log('Resize event read')
})

header.appendChild(dropdownMenu);

// Set initial selected tab as home tab
let currentSelected = homeTab;
homePage();
currentSelected.classList.add('currentSelected')

tabs.forEach(function(i){
    i.addEventListener("click", function() {
        resetPage();
        currentSelected = i;
        const notSelectedArr = tabs.filter((e)=> {
            return e !== currentSelected;
        })
        styleButtons(i, notSelectedArr);
        console.log(currentSelected)
        loadPage(currentSelected)
    });
})

function resetPage() {
    contentDiv.innerHTML = "";
}

function styleButtons(selected, arr) {
    selected.classList.add('currentSelected');

    arr.forEach(element => {
        element.classList.remove('currentSelected');
        element.classList.add('notSelected');
    });
}

function loadPage(selected) {
    if(selected.innerText == 'Home') {
        homePage();
    } else if(selected.innerText == 'Menu') {
        menuPage();
    } else {
        contactPage();
    }
}
