import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"

class Dino {
    constructor() {
        // object animation + state
        this.frames = []
        this.framesb = []

        this.animTime = 150
        this.animTimeMin = 80

        this.frame = 1
        this.isb = false
        this.active = false
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

    add(scene) {
        // add frames && animation
        this.frames.forEach((e) => {
            scene.add(e)
            e.visible = false
        })
        this.framesb.forEach((e) => {
            scene.add(e)
            e.visible = false
        })

        this.position(0, 0, 0)
        this.setControls()

        this.active = true
        this.animation()
    }

    setControls() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "KeyS" || e.code === "ArrowDown") {
                this.isb = true

                this.frames[this.frame].visible = false
                this.framesb[this.frame].visible = true
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
            if (this.animTime > this.animTimeMin) this.animTime -= 0.3
        }, this.animTime)
    }

    position(x = 0, y = 0, z = 0) {
        const framesPos = [
            { z: 0.15, y: -0.2, x: 0.1 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
            { z: 0.15, y: -0.2, x: 0 },
        ]

        const framesbPos = [
            { z: 0.15, y: -0.2, x: 0.6 },
            { z: 0.45, y: -1.9, x: 0.1 },
            { z: 0.15, y: -0.2, x: -0.2 },
            { z: 0.15, y: -0.6, x: 0.6 },
            { z: 0.15, y: -0.4, x: 0.2 },
            { z: 0.15, y: -2.2, x: 0 },
            { z: 0.15, y: -2.3, x: 0.1 },
            { z: 0.15, y: -2, x: -0.1 },
        ]

        for (let i = 0; i < 8; i++) {
            this.frames[i].position.z = framesPos[i].z
            this.frames[i].position.x = framesPos[i].x
            this.frames[i].position.y = framesPos[i].y

            this.framesb[i].position.z = framesbPos[i].z
            this.framesb[i].position.x = framesbPos[i].x
            this.framesb[i].position.y = framesbPos[i].y
        }

        this.frames.forEach((e) => {
            e.position.x += x
            e.position.y += y
            e.position.z += z
        })
        this.framesb.forEach((e) => {
            e.position.x += x
            e.position.y += y
            e.position.z += z
        })
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

    jupm() {}
}

export { Dino }
