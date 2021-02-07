// Buttons & Event Listeners
const newNodeButton = document.querySelector("#button_newNode");
newNodeButton.addEventListener("click", () => {
    console.log("Clicked: New Node");
});
const prevSkillButton = document.querySelector("#button_prevSkill");
prevSkillButton.addEventListener("click", () => {
    console.log("Clicked: Select Previous Skill");
    cyclePreviousSkill();
});
const nextSkillButton = document.querySelector("#button_nextSkill");
nextSkillButton.addEventListener("click", () => {
    console.log("Clicked: Select Previous Skill");
    cycleNextSkill();
});
const toggleMenuButton = document.querySelector("#button_toggleMenu");
toggleMenuButton.addEventListener("click", () => {
    console.log("Clicked: Toggle Menu");
});

// UI Elements
const appViewPort = document.querySelector("#app_viewport");
const currentSkillDisplay = document.querySelector("#ui_currentSkill");

// Load Skill Tree
var treeData = "";
var skillList = [];
var selectedSkill = null;
var skillIndex = 0;
function loadTreeFile(fileURL) {
    fetch(fileURL).then(response => response.json()).then(json => {treeData = json});
    console.log(`Loaded Tree from file: ${fileURL}`);
    setTimeout(() => {
        skillList = treeData.skills;
        console.log("Loaded Skill List.");
        selectedSkill = skillList[skillIndex];
        updateToolbarDisplay();
    }, 500);
}
loadTreeFile("./tree_test.json");

// Skill Navigation
function cycleNextSkill() {
    skillIndex++;
    if(skillIndex >= skillList.length) {
        skillIndex = 0;
    }
    selectedSkill = skillList[skillIndex];
    console.log(selectedSkill.name);
    displayCurrentSkill();
    updateToolbarDisplay();
}

function cyclePreviousSkill() {
    skillIndex--;
    if(skillIndex < 0) {
        skillIndex = (skillList.length - 1);
    }
    selectedSkill = skillList[skillIndex];
    console.log(selectedSkill.name);
    displayCurrentSkill();
    updateToolbarDisplay();
}

// UI Rendering
function updateToolbarDisplay() {
    currentSkillDisplay.innerText = selectedSkill.name;
}

function createNodeElement(node) {
    // The list item is the container for the entire "node" object
    const newListItem = document.createElement("li");
        
    // Main text content
    const newNodeParagraph = document.createElement("p");
    const newNodePText = document.createTextNode(node.text);
    newNodeParagraph.appendChild(newNodePText);

    // Point value display
    const newNodePointBadge = document.createElement("p");
    const newNodePointNumber = document.createTextNode(node.pointValue);
    newNodePointBadge.appendChild(newNodePointNumber);
    
    // Appending elements to new list item
    newListItem.appendChild(newNodeParagraph);
    newListItem.appendChild(newNodePointBadge);

    // Adding tags
    for(let i = 0; i < node.tags.length; i++) {
        const newTagElement = document.createElement("h4");
        const newTagText = document.createTextNode(node.tags[i]);
        newTagElement.appendChild(newTagText);
        newListItem.appendChild(newTagElement);
    }

    appViewPort.appendChild(newListItem);
    console.log("Added a node.");
}

function displayCurrentSkill() {
    for(let i = 0; i < selectedSkill.nodes.length; i++) {
        console.log("AAAAAAAAAAAAAAAAA");
        createNodeElement(selectedSkill.nodes[i]);
    }
}
