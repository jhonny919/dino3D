import "./../public/styles/style.scss"

import * as THREE from "three"

// add scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// add rendere + init to dom
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.setClearColor(0x42e3f5, 1)

//dev tools
let OrbitControls = require("three-orbit-controls")(THREE)
const controls = new OrbitControls(camera, renderer.domElement)
camera.position.set(0, 0, 10)
controls.update()

scene.add(
    new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1000, 0, 0), new THREE.Vector3(1000, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x0000ff })),
    new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1000, 0), new THREE.Vector3(0, 1000, 0)]), new THREE.LineBasicMaterial({ color: 0x00ff00 })),
    new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, -1000), new THREE.Vector3(0, 0, 1000)]), new THREE.LineBasicMaterial({ color: 0xff0000 })),
    new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(100, 100, 100)]), new THREE.LineBasicMaterial({ color: 0x000000 }))
)

import Stats from "stats.js"
const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

//scene resize
window.addEventListener("resize", onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
}

camera.position.z = 5

//light
{
    const color = 0xffffff
    const intensity = 1
    const light = new THREE.AmbientLight(color, intensity)
    scene.add(light)
}
{
    const color = 0xffffff
    const intensity = 0.5
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-100, 100, 0)
    light.target.position.set(-5, 0, 0)
    scene.add(light)
    scene.add(light.target)
    const helper = new THREE.DirectionalLightHelper(light, 5)
    scene.add(helper)
}

//obj loader

// import { Dino } from "./dino"
// const dino = new Dino()
// dino.init().then(() => dino.add(scene))
// window.dino = dino

// import { Ptero } from "./ptero"
// const ptero = new Ptero()
// ptero.init().then(() => ptero.add(scene))
// window.ptero = ptero

import { Mediumcactus3 } from "./cactuses/3mediumcactus"
const asd = new Mediumcactus3()
asd.init().then(() => asd.add(scene))
window.asd = asd

window.scene = scene
window.camera = camera

// ANIM
const animate = function () {
    stats.begin()

    renderer.render(scene, camera)

    stats.end()
    requestAnimationFrame(animate)
}

animate()

/*

-- dino jump
-- world
-- world spawn
-- world animation
-- hitboxes
-- start-stop
-- score
-- sounds
-- interface

--profile
..

*/
