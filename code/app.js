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
