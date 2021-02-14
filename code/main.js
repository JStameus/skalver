// ---- UI FUNCTIONALITY ----
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

// UI Rendering
function updateToolbarDisplay() {
    currentSkillDisplay.innerText = selectedSkill.name;
}
// --------------------------

// ---- APP ENTRY POINT ---
loadTreeFile("../resources/tree_test.json");
setTimeout(() => {
    //loadSceneGeometry();
    initializeSkillTree();
    updateToolbarDisplay();
}, 500);
setTimeout(() => {
    spawnNodeObjects(selectedSkill);
}, 1000);

runRenderLoop();
