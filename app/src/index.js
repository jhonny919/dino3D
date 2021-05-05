import "./../public/styles/style.scss";

import * as THREE from "three";
import CameraControls from "camera-controls";

const renderer = new THREE.WebGLRenderer();
CameraControls.install({ THREE: THREE });

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const clock = new THREE.Clock();
const cameraControls = new CameraControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 50;

const animate = function () {
    const delta = clock.getDelta();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    const hasControlsUpdated = cameraControls.update(delta);

    requestAnimationFrame(animate);

    if (hasControlsUpdated) {
        renderer.render(scene, camera);
    }
};

animate();

console.log("asd");
