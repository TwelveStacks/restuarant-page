import homePage from "./homePage";
import menuPage from "./meunPage";
import contactPage from "./contactPage";

import './style.css';

const contentDiv = document.getElementById("content")

const header = document.createElement('header');
const nav = document.createElement('nav');

const ulist = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');

let tabs = [homeTab, menuTab, contactTab]

homeTab.innerText = "Home";
menuTab.innerText = "Menu";
contactTab.innerText = "Contact";

tabs.forEach((e)=> {
    ulist.appendChild(e)
})

nav.appendChild(ulist);
header.appendChild(nav);

document.body.insertBefore(header, contentDiv);

let currentSelected = 0;


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
    selected.style.backgroundColor = "red";
    selected.style.color = "white";

    arr.forEach(element => {
        element.style.backgroundColor = "white"
        element.style.color = "black"
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
