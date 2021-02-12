// Variables for handling current skill and skill tree
var treeData = "";
var skillList = [];
var selectedSkill = null;
var skillIndex = 0;
function loadTreeFile(fileURL) {
    fetch(fileURL).then(response => response.json()).then(json => {treeData = json});
    console.log(`Loaded Tree from file: ${fileURL}`);
}

function initializeSkillTree() {
    skillList = treeData.skills;
    console.log("Loaded Skill List.");
    selectedSkill = skillList[skillIndex];
}
