import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"
import * as THREE from "three"

class Ptero {
    constructor(scene) {
        // object animation + state
        this.frames = []

        this.animTime = 150

        this.frame = 1
        this.active = false

        this.framesPos = [
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
        ]

        this.framePos = { z: 0.25, y: 0, x: 0 }

        this.hity = 0.8
        this.hitx = 1
        this.hitz = 1

        const geometry = new THREE.BoxGeometry(1, 0.8, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.y = -200
        cube.position.x = -200
        cube.visible = false

        scene.add(cube)

        this.hitbox = cube
    }
    init() {
        // load models + sorting by frames
        const dir = [
            "./models/ptero/ptero1",
            "./models/ptero/ptero2",
            "./models/ptero/ptero3",
            "./models/ptero/ptero4",
            "./models/ptero/ptero5",
            "./models/ptero/ptero6",
            "./models/ptero/ptero7",
            "./models/ptero/ptero8",
        ]

        const objLoader = new OBJLoader()
        const mtlLoader = new MTLLoader()

        return new Promise((resolve) => {
            dir.forEach((e) => {
                mtlLoader.load(`${e}.mtl`, (material) => {
                    material.preload()
                    objLoader.setMaterials(material)

                    objLoader.load(`${e}.obj`, (mesh) => {
                        this.frames.push(mesh)
                        if (this.frames.length === 8) resolve()
                    })
                })
            })
        }).then(() => {
            this.frames.sort((a, b) => {
                if (a.materialLibraries[0] >= b.materialLibraries[0]) return 1
                return -1
            })
        })
    }

    add(scene, x, y, z) {
        // add frames && animation
        this.frames.forEach((e) => {
            scene.add(e)
            e.visible = false
        })

        this.position(x, y, z)

        this.active = true
        this.animation()
    }

    remove(Scene) {
        this.active = false

        this.frames.forEach((e) => scene.remove(e))
        scene.remove(this.hitbox)
    }

    animation() {
        // frames animation
        setTimeout(() => {
            if (this.frame === 7) {
                this.frames[this.frame].visible = false
                this.frames[0].visible = true
                this.frame = 0
            } else {
                this.frames[this.frame].visible = false
                this.frames[this.frame + 1].visible = true
                this.frame++
            }
            if (this.active === true) this.animation()
        }, this.animTime)
    }

    position(x = 0, y = 0, z = 0) {
        this.framesPos = [
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
            { z: 0.25, y: 0, x: 0 },
        ]

        this.framesPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })

        for (let i = 0; i < 8; i++) {
            this.frames[i].position.z = this.framesPos[i].z
            this.frames[i].position.y = this.framesPos[i].y
            this.frames[i].position.x = this.framesPos[i].x
        }

        this.framePos = { x, y, z }

        this.hitbox.position.z = this.framePos.z
        this.hitbox.position.x = this.framePos.x
        this.hitbox.position.y = this.framePos.y + 0.4
    }

    positionadd(x = 0, y = 0, z = 0) {
        this.framesPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })

        for (let i = 0; i < 8; i++) {
            this.frames[i].position.z = this.framesPos[i].z
            this.frames[i].position.x = this.framesPos[i].x
            this.frames[i].position.y = this.framesPos[i].y
        }
        this.framePos.x += x
        this.framePos.y += y
        this.framePos.z += z

        this.hitbox.position.z = this.framePos.z
        this.hitbox.position.x = this.framePos.x
        this.hitbox.position.y = this.framePos.y + 0.4
    }

    rotation(x = 0, y = 0, z = 0) {
        this.frames.forEach((e) => {
            e.rotation.x += x
            e.rotation.y += y
            e.rotation.z += z
        })
    }
}

export { Ptero }
