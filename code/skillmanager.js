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
//loadTreeFile("../resources/tree_test.json");
