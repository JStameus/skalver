// Variables for handling current skill and skill tree
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
    }, 1000);
}
loadTreeFile("../resources/tree_test.json");

// Skill Navigation
function cycleNextSkill() {
    skillIndex++;
    if(skillIndex >= skillList.length) {
        skillIndex = 0;
    }
    selectedSkill = skillList[skillIndex];
    console.log(`${selectedSkill.name}: ${selectedSkill.nodes.length} nodes.`);
    updateToolbarDisplay();
}

function cyclePreviousSkill() {
    skillIndex--;
    if(skillIndex < 0) {
        skillIndex = (skillList.length - 1);
    }
    selectedSkill = skillList[skillIndex];
    console.log(`${selectedSkill.name}: ${selectedSkill.nodes.length} nodes.`);
    updateToolbarDisplay();
}

// TODO: Should this be removed?
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

