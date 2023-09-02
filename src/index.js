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
    selected.classList.add('currentSelected')

    arr.forEach(element => {
        element.classList.remove('currentSelected')
        element.classList.add('notSelected')
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
