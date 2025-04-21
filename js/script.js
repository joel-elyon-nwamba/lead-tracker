let  leadTracker = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", () => {
    leadTracker.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("leadTracker", JSON.stringify(leadTracker));
    render();

})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leadTracker"));
if(leadsFromLocalStorage) {
    leadTracker = leadsFromLocalStorage;
    // render();
}


console.log(leadsFromLocalStorage);

// Delte option to remove all the list 
deleteBtn.addEventListener("click", () => {
    leadTracker = [];
    render(tracker);
})
// First we need to be able to input our information for it to display in an array of list 
// Loop through leadtracker 

const render = (tracker) => {
    ulEl.innerHTML = "";
    for(let i = 0; i < tracker.length; i++) {
        // Create a list item for each link
        const li = document.createElement("li");
        li.classList.add("list-items");
        li.textContent += tracker[i];
        ulEl.appendChild(li);
    }
}

