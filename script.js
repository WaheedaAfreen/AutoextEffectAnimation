const header = document.querySelector(".header");

const careers = ["Teacher", "Web Developer", "Student", ];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;

    header.innerHTML = `<h1>
             I Am A ${careers[careerIndex].slice(0, 1) === "" ? "" : ""}${careers[careerIndex].slice(0, characterIndex)}
</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}
