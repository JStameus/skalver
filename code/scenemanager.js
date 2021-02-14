// ---- SCENE SETUP ----
const viewport = document.querySelector("#app_viewport");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera Start Position
camera.position.z = 5;
// ---------------------

// ---- MESHES & RESOURCES ----
// Node Manipulation
function setNodePosition(node, offset) {
    if(node.xPos == null || node.yPos == null) {
        const newXPos = Math.floor((Math.random() * 15) + 1);
        node.xPos = newXPos;
        console.log(`New xPos: ${newXPos}`);   
        node.yPos = offset;
    }
}

// Loaded only on startup or when a new skill is selected.
function spawnNodeObjects(skillTree) {
    let offset = 0;
    for(let i = 0; i < skillTree.nodes.length; i++) {
        // TODO: Maybe these should just be planes with a texture?
        const currentNode = skillTree.nodes[i];
        const geometry = new THREE.SphereGeometry(0.5, 4, 4);
        const material = new THREE.MeshBasicMaterial({color: 0xe3e3e3});
        const nodeObjectMesh = new THREE.Mesh(geometry, material);
        scene.add(nodeObjectMesh);
        setNodePosition(currentNode, offset);
        nodeObjectMesh.position.y = currentNode.yPos;
        nodeObjectMesh.position.x = currentNode.xPos;
        offset += 10;

        // Creating a texture of the node's text content
        const bitmap = document.createElement("canvas");
        const ctx = bitmap.getContext("2d");
        bitmap.width = 100;
        bitmap.height = 100;
        ctx.font = "Bold 30px Arial";

        ctx.fillStyle = "red";
        ctx.fillText(currentNode.text, 0, 20);
        ctx.strokeStyle = "black";
        ctx.strokeText(currentNode.text, 0, 20);

        const labelTexture = new THREE.Texture(bitmap);
        labelTexture.needsUpdate = true;
        bitmap.remove();

        // Creating the "label" object 
        const labelGeometry = new THREE.PlaneGeometry(5, 1.5);
        const labelMaterial = new THREE.MeshBasicMaterial({map: labelTexture});
        //labelMaterial.alphaMap = labelTexture;
        const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);
        scene.add(labelMesh);
        labelMesh.position.y = currentNode.yPos + 2;
        labelMesh.position.x = currentNode.xPos;

    }
}

// Scene Loading
function loadSceneGeometry() {
    // TODO: Should there even be a ground mesh? The perspective looks wonky.
    console.log("Loading scene geometry.");
    const groundGeometry = new THREE.PlaneGeometry(50,50);
    const groundMaterial = new THREE.MeshBasicMaterial({color: 0x516060});
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    scene.add(groundMesh);
    groundMesh.rotation.x = -90;
    groundMesh.position.y = -10;
}

// ----------------------------

// ---- MAIN RENDER LOOP ----
function runRenderLoop() {
    requestAnimationFrame(runRenderLoop);

    // Put all input checks here
    controlCamera();    
    camera.position.y += cameraYVelocity;
    camera.position.x += cameraXVelocity;
    camera.position.z += cameraZVelocity;
    renderer.render(scene, camera);
}
// --------------------------
