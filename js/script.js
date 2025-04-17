const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

// First we need to be able to input our information for it to display in an array of list 
inputEl.value;
let leadTracker = [];
saveBtn.addEventListener("click", () => {
    leadTracker.push(inputEl.value);
    inputEl.value = "";
})