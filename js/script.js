let leadTracker = ["https://www.youtube.com/", "https://www.google.com/", "https://www.reddit.com/"];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", () => {
    leadTracker.push(inputEl.value);
    inputEl.value = "";
    console.log(leadTracker);
    render();
})
// First we need to be able to input our information for it to display in an array of list 
// Loop through leadtracker 

const render = () => {
    for(let i = 0; i < leadTracker.length; i++) {
        // Create a list item for each link
        const li = document.createElement("li");
        li.classList.add("list-items");
        li.textContent += leadTracker[i];
        ulEl.appendChild(li);
    }
}