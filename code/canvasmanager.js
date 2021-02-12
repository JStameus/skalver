// SCENE SETUP
const viewport = document.querySelector("#app_viewport");
// TODO: Can I render the scene on the canvas instead?
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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

// CAMERA CONTROLS
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
// CAMERA START POSITION
camera.position.z = 5;

// MAIN RENDER LOOP
function animate() {
    requestAnimationFrame(animate);

    // Put all input checks here
    controlCamera();    
    camera.position.y += cameraYVelocity;
    camera.position.x += cameraXVelocity;
    camera.position.z += cameraZVelocity;
    renderer.render(scene, camera);
}
animate();
