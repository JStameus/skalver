// ---- USER INPUT ----

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

// Camera Controls
let cameraMoveSpeed = 0.5;
let cameraXVelocity = 0;
let cameraYVelocity = 0;

let cameraZoomSpeed = 0.3;
let cameraZVelocity = 0;
function controlCamera() {
    window.onkeydown = (e) => {
       if(e.key == "w" || e.key == "W") {
           cameraYVelocity = cameraMoveSpeed;
       } 
       else if(e.key == "s" || e.key == "S") {
           cameraYVelocity = -cameraMoveSpeed;
       }
       else if(e.key == "a" || e.key == "A") {
           cameraXVelocity = -cameraMoveSpeed;
       }
       else if(e.key == "d" || e.key == "D") {
           cameraXVelocity = cameraMoveSpeed;
       }
       else if(e.key == "q" || e.key == "Q") {
           cameraZVelocity = cameraZoomSpeed;
       }
       else if(e.key == "e" || e.key == "E") {
           cameraZVelocity = -cameraZoomSpeed;
       }
    }
    window.onkeyup = (e) => {
        if(e.key == "w" || e.key == "W" || e.key == "s" || e.key == "S") {
            cameraYVelocity = 0;
        }
        else if(e.key == "a" || e.key == "A" || e.key == "d" || e.key == "D") {
            cameraXVelocity = 0;
        }
        else if(e.key == "q" || e.key == "Q" || e.key == "e" || e.key == "E") {
            cameraZVelocity = 0;
        }
    }
}
// --------------------
