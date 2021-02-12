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
function spawnNodeObjects(skillTree) {
    let offset = 0;
    for(let i = 0; i < skillTree.nodes.length; i++) {
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshBasicMaterial({color: 0xe3e3e3});
        const nodeObjectMesh = new THREE.Mesh(geometry, material);
        scene.add(nodeObjectMesh);
        nodeObjectMesh.position.y = offset;
        offset += 10;
    }
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
