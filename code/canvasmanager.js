class SkillNodeIcon {
    constructor(category, text, pointValue, tags, posX, posY) {
       // this.category = category;
        this.text = text;
        this.pointValue = pointValue;
        this.tags = tags;
        this.posX = posX;
        this.posY = posY;
    }
}

const canvas = document.querySelector("#app_viewport");
const ctx = canvas.getContext("2d");

// TODO: These values should be updated with every frame
var viewportWidth = canvas.clientWidth;
var viewportHeight = canvas.clientHeight;

const worldOrigin = {x: 0, y: 0};
let cameraPosition = {x: 0, y: 0};

let nodeSize = 70;
let nodeSpacing = nodeSize + 60;

function drawSkillTree(skillTree) {
   for (let i = 0; i < skillTree.nodes.length; i++) {
       console.log(`Drawing node: ${skillTree.nodes[i]}`);

       viewportWidth = canvas.clientWidth;
       viewportHeight = canvas.clientHeight;
       
       console.log(`Width: ${viewportWidth}`)
       console.log(`Heigh: ${viewportHeight}`)

       const skillNode = skillTree.nodes[i];
       const skillIcon = new SkillNodeIcon(skillNode.text, skillNode.pointValue, skillNode.tags, 20, 20)

       ctx.fillStyle = 'green';
       ctx.fillRect(viewportHeight / 2, viewportWidth / 2, 50, 50);
   }
}

// TODO: These controls should probably be moved to app.js
function moveCamera() {
    
}
