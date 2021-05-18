import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"
import * as THREE from "three"

class Dino {
    constructor() {
        // object animation + state
        this.frames = []
        this.framesb = []

        this.animTime = 80
        this.animTimeMin = 50

        this.frame = 1
        this.isb = false
        this.active = false

        this.hity = 1
        this.hitx = 1.2
        this.hitz = 1.2

        {
            const geometry = new THREE.BoxGeometry(1.2, 1, 1.2)
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
            const cube = new THREE.Mesh(geometry, material)
            scene.add(cube)
            cube.visible = false

            this.hitbox = cube
        }

        this.hitby = 1
        this.hitbx = 1.6
        this.hitbz = 1

        {
            const geometry = new THREE.BoxGeometry(1.6, 1, 1)
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
            const cube = new THREE.Mesh(geometry, material)
            scene.add(cube)
            cube.visible = false

            this.hitboxb = cube
        }

        this.framesPos = [
            { z: 0.15, y: -0.2, x: 0.1 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
        ]

        this.framesbPos = [
            { z: 0.15, y: -0.2, x: 0.6 },
            { z: 0.45, y: -1.9, x: 0.1 },
            { z: 0.15, y: -0.2, x: -0.2 },
            { z: 0.15, y: -0.6, x: 0.6 },
            { z: 0.15, y: -0.4, x: 0.2 },
            { z: 0.15, y: -2.2, x: 0 },
            { z: 0.15, y: -2.3, x: 0.1 },
            { z: 0.15, y: -2, x: -0.1 },
        ]
    }
    init() {
        // load models + sorting by frames
        const dir = [
            "./models/dino/dino1",
            "./models/dino/dino2",
            "./models/dino/dino3",
            "./models/dino/dino4",
            "./models/dino/dino5",
            "./models/dino/dino6",
            "./models/dino/dino7",
            "./models/dino/dino8",
        ]

        const dirb = [
            "./models/dinoB/dinob1",
            "./models/dinoB/dinob2",
            "./models/dinoB/dinob3",
            "./models/dinoB/dinob4",
            "./models/dinoB/dinob5",
            "./models/dinoB/dinob6",
            "./models/dinoB/dinob7",
            "./models/dinoB/dinob8",
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
                        if (this.frames.length === 8 && this.framesb.length === 8) resolve()
                    })
                })
            })
            dirb.forEach((e) => {
                mtlLoader.load(`${e}.mtl`, (material) => {
                    material.preload()
                    objLoader.setMaterials(material)

                    objLoader.load(`${e}.obj`, (mesh) => {
                        this.framesb.push(mesh)
                        if (this.frames.length === 8 && this.framesb.length === 8) resolve()
                    })
                })
            })
        }).then(() => {
            this.frames.sort((a, b) => {
                if (a.materialLibraries[0] >= b.materialLibraries[0]) return 1
                return -1
            })
            this.framesb.sort((a, b) => {
                if (a.materialLibraries[0] >= b.materialLibraries[0]) return 1
                return -1
            })
        })
    }

    add(scene, x = 0, y = 0, z = 0) {
        // add frames && animation
        this.frames.forEach((e) => {
            scene.add(e)
            e.visible = false
        })
        this.framesb.forEach((e) => {
            scene.add(e)
            e.visible = false
        })

        this.position(x, y, z)
        this.setControls()

        this.active = true
        this.animation()
    }

    remove(Scene) {
        this.active = false

        this.frames.forEach((e) => scene.remove(e))
        this.framesb.forEach((e) => scene.remove(e))
    }

    setControls() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "KeyS" || e.code === "ArrowDown") {
                this.isb = true

                this.frames[this.frame].visible = false
                this.framesb[this.frame].visible = true
            }
            if (e.code === "Space" || e.code === "KeyW" || e.code === "ArrowUp") {
                if (this.active) this.jupm()
            }
        })

        document.addEventListener("keyup", (e) => {
            if (e.code === "KeyS" || e.code === "ArrowDown") {
                this.isb = false

                this.framesb[this.frame].visible = false
                this.frames[this.frame].visible = true
            }
        })
    }

    animation() {
        // frames animation
        setTimeout(() => {
            if (this.frame === 7) {
                if (!this.isb) {
                    this.frames[0].visible = true
                } else {
                    this.framesb[0].visible = true
                }
                this.frames[this.frame].visible = false
                this.framesb[this.frame].visible = false
                this.frame = 0
            } else {
                if (!this.isb) {
                    this.frames[this.frame].visible = false
                    this.frames[this.frame + 1].visible = true
                } else {
                    this.framesb[this.frame].visible = false
                    this.framesb[this.frame + 1].visible = true
                }
                this.frames[this.frame].visible = false
                this.framesb[this.frame].visible = false
                this.frame++
            }
            if (this.active === true) this.animation()
            if (this.animTime > this.animTimeMin) this.animTime -= 0.1
        }, this.animTime)
    }

    position(x = 0, y = 0, z = 0) {
        this.framesPos = [
            { z: 0.15, y: -0.2, x: 0.1 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
        ]

        this.framesbPos = [
            { z: 0.15, y: -0.2, x: 0.6 },
            { z: 0.45, y: -1.9, x: 0.1 },
            { z: 0.15, y: -0.2, x: -0.2 },
            { z: 0.15, y: -0.6, x: 0.6 },
            { z: 0.15, y: -0.4, x: 0.2 },
            { z: 0.15, y: -2.2, x: 0 },
            { z: 0.15, y: -2.3, x: 0.1 },
            { z: 0.15, y: -2, x: -0.1 },
        ]

        this.framesPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })
        this.framesbPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })

        for (let i = 0; i < 8; i++) {
            this.frames[i].position.z = this.framesPos[i].z
            this.frames[i].position.y = this.framesPos[i].y
            this.frames[i].position.x = this.framesPos[i].x

            this.framesb[i].position.z = this.framesbPos[i].z
            this.framesb[i].position.y = this.framesbPos[i].y
            this.framesb[i].position.x = this.framesbPos[i].x
        }

        this.hitbox.position.z = this.framesPos[1].z
        this.hitbox.position.y = this.framesPos[1].y + 1.3
        this.hitbox.position.x = this.framesPos[1].x

        this.hitboxb.position.z = this.framesPos[1].z
        this.hitboxb.position.y = this.framesPos[1].y + 1.3
        this.hitboxb.position.x = this.framesPos[1].x
    }

    positionadd(x = 0, y = 0, z = 0) {
        this.framesPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })
        this.framesbPos.forEach((e) => {
            e.z += z
            e.x += x
            e.y += y
        })

        for (let i = 0; i < 8; i++) {
            this.frames[i].position.z = this.framesPos[i].z
            this.frames[i].position.x = this.framesPos[i].x
            this.frames[i].position.y = this.framesPos[i].y

            this.framesb[i].position.z = this.framesbPos[i].z
            this.framesb[i].position.x = this.framesbPos[i].x
            this.framesb[i].position.y = this.framesbPos[i].y
        }

        this.hitbox.position.z = this.framesPos[1].z
        this.hitbox.position.y = this.framesPos[1].y + 1.3
        this.hitbox.position.x = this.framesPos[1].x

        this.hitboxb.position.z = this.framesPos[1].z
        this.hitboxb.position.y = this.framesPos[1].y + 1.3
        this.hitboxb.position.x = this.framesPos[1].x
    }

    rotation(x = 0, y = 0, z = 0) {
        this.frames.forEach((e) => {
            e.rotation.x += x
            e.rotation.y += y
            e.rotation.z += z
        })
        this.framesb.forEach((e) => {
            e.rotation.x += x
            e.rotation.y += y
            e.rotation.z += z
        })
    }

    jupm() {
        let power = 0.38
        let time = 300
        this.active = false

        let interval = setInterval(() => {
            if (power < -0.4) {
                this.active = true
                this.animation()
                this.position(0, 0, 0)
                clearInterval(interval)
            }
            if (!this.active) this.positionadd(0, power, 0)
            power -= 0.015
        }, 18)
    }
}

export { Dino }
