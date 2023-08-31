export default function contactPage() {
    const contentDiv = document.getElementById("content");

    const pageHeader = document.createElement("h1");
    pageHeader.classList.add('title');
    pageHeader.innerText = "Contact";
    contentDiv.appendChild(pageHeader);
}