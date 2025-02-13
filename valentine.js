// Listahan ng GIFs kapag "No" ang sagot
const noImages = ["mocha_bear.gif", "teddy-bear.webp", "milk-and-mocha.gif", "milk-and-mocha.webp"];
const messages = ["Are you sure?", "Ayaw mo talaga?", "hindi na ba magbabago isip mo?","Last chance!"];
let noIndex = 0;  // Para sa "No" images

// Kunin ang buttons at image
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const imageElement = document.getElementById("image");
const heading = document.querySelector("h1");

// Event listener para sa "No" button
noButton.addEventListener("click", function () {
    // Palitan ang image para sa "No"
    noIndex = (noIndex + 1) % noImages.length;
    imageElement.src = noImages[noIndex];

    // Palitan ang text message
    heading.innerText = messages[noIndex];

    // Gumalaw ang "No" button randomly
    let i = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    let j = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.left = i + "px";
    noButton.style.top = j + "px";
});

// Event listener para sa "Yes" button
yesButton.addEventListener("click", function () {
    // Palitan ang image 
    imageElement.src = "milk.webp";

    // Magpakita ng sweet message
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <h1>Yaaay!</h1>
                <p>Sabi na lablab mo talaga ako e! Iloveyou! </p>
                <img src="milk.webp" width="200">
            </div>
        `;
    },); 
});
