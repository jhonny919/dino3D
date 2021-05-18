import "./../public/styles/style.scss"

import * as THREE from "three"
import { linkedList } from "./linkedList"
import { loader } from "./loader"
import { FloorSpaw } from "./floorSpawn"
import { DecSpawn } from "./decSpawn"
import { EnemySpawn } from "./enemySpawn"
import Stats from "stats.js"

let play = document.getElementById("play")
let htScore = document.getElementById("score")

play.addEventListener("click", (e) => {
    start()
    htScore.style.display = "flex"
    play.style.display = "none"
})

document.getElementById("restart").addEventListener("click", (e) => {
    document.getElementById("restart").style.display = "none"

    document.getElementsByTagName("canvas")[0].remove()
    start()
})

function start() {
    // add scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    let Loader = new loader(scene)

    // add rendere + init to dom
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    renderer.setClearColor(0x42e3f5, 1)
    {
        const color = 0x42e3f5
        const density = 0.03
        scene.fog = new THREE.FogExp2(color, density)
    }

    //vars
    const list = new linkedList()
    const floorSpawn = new FloorSpaw(Loader, list, scene)
    const decSpawn = new DecSpawn(Loader, list, scene)
    const enemySpawn = new EnemySpawn(Loader, list, scene)

    let odd = true
    let speed = 0.15
    let score = 0

    window.scene = scene
    window.camera = camera

    //dev tools
    // let OrbitControls = require("three-orbit-controls")(THREE)
    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.update()

    // scene.add(
    //     new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1000, 0, 0), new THREE.Vector3(1000, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x0000ff })),
    //     new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1000, 0), new THREE.Vector3(0, 1000, 0)]), new THREE.LineBasicMaterial({ color: 0x00ff00 })),
    //     new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, -1000), new THREE.Vector3(0, 0, 1000)]), new THREE.LineBasicMaterial({ color: 0xff0000 })),
    //     new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(100, 100, 100)]), new THREE.LineBasicMaterial({ color: 0x000000 }))
    // )

    // const stats = new Stats()
    // stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    // document.body.appendChild(stats.dom)

    camera.position.x = -3.4404504944505687
    camera.position.y = 6.830539004426103
    camera.position.z = 7.6001263422338505

    camera.rotation.x = -0.6754626252238242
    camera.rotation.y = -0.6427292701668502
    camera.rotation.z = -0.4476952654532752

    //scene resize
    window.addEventListener("resize", onWindowResize, false)

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
    }

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
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    //obj loader

    const dino = Loader.dino()
    dino.init().then(() => {
        dino.add(scene)
    })
    window.dino = dino

    {
        const geometry = new THREE.BoxGeometry(150, 1, 4.5)
        const material = new THREE.MeshBasicMaterial({ color: 0x42daf5, opacity: 0.5, transparent: true })
        const water = new THREE.Mesh(geometry, material)
        scene.add(water)
        water.position.x = 61.5
        water.position.z = -4.375
        water.position.y = -0.75

        window.water = water
    }

    // ANIM
    let animId, cancel

    let scoreInterval = setInterval(() => {
        htScore.innerHTML = (() => {
            return "0".repeat(Math.abs(Math.floor(score).toString().length - 6)) + Math.floor(score)
        })()
        // console.log(Math.floor(score))
    }, 100)

    const animate = function () {
        renderer.render(scene, camera)

        list.for().forEach((e) => {
            e[1].positionadd(-speed, 0, 0)
            if (e[1].framePos.x < -20) {
                e[1].remove(scene)
                list.delete(e[0])
            }
        })

        list.for().forEach((e) => {
            if (e[1].hitbox) {
                ;(() => {
                    let model = e[1]
                    let left_mid = [model.hitbox.position.y, model.hitbox.position.x - model.hitx / 2]
                    let left_top = [model.hitbox.position.y + model.hity / 2, model.hitbox.position.x - model.hitx / 2]
                    let right_top = [model.hitbox.position.y + model.hity / 2, model.hitbox.position.x + model.hitx / 2]

                    let dino_top, dino_bot, dino_left, dino_right

                    if (dino.isb) {
                        dino_top = dino.hitboxb.position.y + dino.hitby / 2
                        dino_bot = dino.hitboxb.position.y - dino.hitby / 2
                        dino_left = dino.hitboxb.position.x - dino.hitbx / 2
                        dino_right = dino.hitboxb.position.x + dino.hitbx / 2
                    } else {
                        dino_top = dino.hitbox.position.y + dino.hity / 2
                        dino_bot = dino.hitbox.position.y - dino.hity / 2
                        dino_left = dino.hitbox.position.x - dino.hitx / 2
                        dino_right = dino.hitbox.position.x + dino.hitx / 2
                    }

                    if (left_mid[0] >= dino_bot && left_mid[0] <= dino_top && left_mid[1] >= dino_left && left_mid[1] <= dino_right && model.hitbox.position.z > -2) {
                        cancel = true
                    } else if (left_top[0] >= dino_bot && left_top[0] <= dino_top && left_top[1] >= dino_left && left_top[1] <= dino_right && model.hitbox.position.z > -2) {
                        cancel = true
                    } else if (right_top[0] >= dino_bot && right_top[0] <= dino_top && right_top[1] >= dino_left && right_top[1] <= dino_right && model.hitbox.position.z > -2) {
                        cancel = true
                    }
                })()
            }
        })

        floorSpawn.minus(speed)
        if (floorSpawn.checkif()) {
            floorSpawn.add(Loader, list)
            if (odd) {
                odd = false
                decSpawn.add(Loader, list, scene)
                enemySpawn.add(Loader, list, scene)
            } else odd = true
        }
        if (speed < 0.28) {
            speed += 0.00002
        }

        score += speed

        animId = requestAnimationFrame(animate)
        if (cancel) {
            clearInterval(scoreInterval)
            cancelAnimationFrame(animId)

            document.getElementById("restart").style.display = "flex"
        }
    }

    animate()
}

window.start = start
