export default function contactPage() {
    const contentDiv = document.getElementById("content");
    const newDiv = document.createElement('div');
    const description = document.createElement('p');
    const pageHeader = document.createElement("h1");
    pageHeader.classList.add('title');
    pageHeader.innerText = "Contact";
    contentDiv.appendChild(pageHeader);
    
    pageHeader.classList.add('title');
    description.classList.add('desc');
    newDiv.classList.add('contentBody');
    pageHeader.innerText = "Contact";
    description.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsam. Quos, enim distinctio necessitatibus assumenda tempore explicabo! Dignissimos, placeat amet, deleniti tempora pariatur sint nemo quam dolore, reprehenderit consequatur suscipit!"
    newDiv.appendChild(pageHeader);
    newDiv.appendChild(description);
    contentDiv.appendChild(newDiv);
}