sections = [
    {
        button: document.getElementById("ethos-toggle"),
        expandedText: document.getElementById("ethos-expanded"),
    },
    { 
        button: document.getElementById("pathos-toggle"),
        expandedText: document.getElementById("pathos-expanded"),
    },
    { 
        button: document.getElementById("logos-toggle"),
        expandedText: document.getElementById("logos-expanded"),
    }
]

for(let i = 0; i < sections.length; i ++) {
    let section = sections[i];
    section.button.innerText = "Read More";

    section.button.addEventListener("click", () => {
        section.expandedText.classList.toggle("hidden");
    })
}
