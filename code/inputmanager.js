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
           console.log("Moving FORWARD");
           cameraYVelocity = cameraMoveSpeed;
       } 
       else if(e.key == "s" || e.key == "S") {
           console.log("Moving BACKWARDS");
           cameraYVelocity = -cameraMoveSpeed;
       }
       else if(e.key == "a" || e.key == "A") {
           console.log("Moving LEFT");
           cameraXVelocity = -cameraMoveSpeed;
       }
       else if(e.key == "d" || e.key == "D") {
           console.log("Moving RIGHT");
           cameraXVelocity = cameraMoveSpeed;
       }
       else if(e.key == "q" || e.key == "Q") {
           console.log("Zooming OUT"); 
           cameraZVelocity = cameraZoomSpeed;
       }
       else if(e.key == "e" || e.key == "E") {
           console.log("Zooming IN");
           cameraZVelocity = -cameraZoomSpeed;
       }
    }
    window.onkeyup = (e) => {
        console.log("Stop!");
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
