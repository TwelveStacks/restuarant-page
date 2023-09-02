export default function menuPage() {
    const contentDiv = document.getElementById("content");
    const newDiv = document.createElement('div');
    const pageHeader = document.createElement("h1");
    pageHeader.classList.add('title');
    pageHeader.innerText = "Menu";
    contentDiv.appendChild(pageHeader);
    const menuDiv = document.createElement('div');

    let menuItems = ['Burger', 'Fries', 'Pizza'];
    menuItems.forEach(function(e) {
        const itemDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        const itemDesc = document.createElement('p');
        h2.classList.add('menuItem'); 
        h2.innerText = e;
        itemDesc.classList.add('itemDesc');
        itemDesc.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsam. Quos, enim distinctio necessitatibus assumenda tempore explicabo! Dignissimos, placeat amet, deleniti tempora pariatur sint nemo quam dolore, reprehenderit consequatur suscipit!"
        itemDiv.appendChild(h2);
        itemDiv.appendChild(itemDesc);
        menuDiv.appendChild(itemDiv);
    });

    pageHeader.classList.add('title');
    newDiv.classList.add('contentBody');
    pageHeader.innerText = "Menu";
    newDiv.appendChild(pageHeader);
    newDiv.appendChild(menuDiv)
    contentDiv.appendChild(newDiv);
}