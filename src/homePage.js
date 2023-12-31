export default function homePage() {
    const contentDiv = document.getElementById("content");
    const newDiv = document.createElement('div');
    const pageHeader = document.createElement("h1");
    const description = document.createElement('p');
    pageHeader.classList.add('title');
    description.classList.add('desc');
    newDiv.classList.add('contentBody');
    pageHeader.innerText = "Quality Food On The Go";
    description.innerText = "At Quick Bites, we're redefining the fast food experience by bringing you mouthwatering flavors, lightning-fast service, and a dash of innovation with every bite. Our mission is simple: to deliver quick, delicious, and quality meals that keep up with your on-the-go lifestyle without compromising on taste or nutrition."
    newDiv.appendChild(pageHeader);
    newDiv.appendChild(description);
    contentDiv.appendChild(newDiv);
}
