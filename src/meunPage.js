export default function menuPage() {
    const contentDiv = document.getElementById("content");

    const pageHeader = document.createElement("h1");
    pageHeader.classList.add('title');
    pageHeader.innerText = "Menu";
    contentDiv.appendChild(pageHeader);
}