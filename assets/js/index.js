const notepadTextarea = document.querySelector(".notepad-textarea");
const saveButton = document.querySelector(".save-button");

window.addEventListener("load", function () {
    notepadTextarea.innerText = localStorage.getItem("notepadText");
});

saveButton.addEventListener("click", function () {
    localStorage.setItem("notepadText", notepadTextarea.value);
});