import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"

class Rock3x3 {
    constructor() {
        // object animation + state
        this.frame = 0

        this.framePos = { z: -0.65, x: -0.05, y: 0 }
    }

    init() {
        const dir = "./models/rocks/3x3rock"

        const objLoader = new OBJLoader()
        const mtlLoader = new MTLLoader()

        return new Promise((resolve) => {
            mtlLoader.load(`${dir}.mtl`, (material) => {
                material.preload()
                objLoader.setMaterials(material)

                objLoader.load(`${dir}.obj`, (mesh) => {
                    this.frame = mesh
                    if (this.frame !== 0) {
                        //scale
                        resolve()
                    }
                })
            })
        })
    }

    add(scene, x, y, z) {
        scene.add(this.frame)

        this.rotation(0, Math.PI, 0)

        this.position(x, y, z)
    }

    remove(scene) {
        scene.remove(this.frame)
    }

    position(x = 0, y = 0, z = 0) {
        this.framePos = { z: -0.65, x: -0.05, y: 0 }

        this.framePos.x += x
        this.framePos.y += y
        this.framePos.z += z

        this.frame.position.z = this.framePos.z
        this.frame.position.x = this.framePos.x
        this.frame.position.y = this.framePos.y
    }

    positionadd(x = 0, y = 0, z = 0) {
        this.framePos.z += z
        this.framePos.x += x
        this.framePos.y += y

        this.frame.position.z = this.framePos.z
        this.frame.position.x = this.framePos.x
        this.frame.position.y = this.framePos.y
    }

    rotation(x = 0, y = 0, z = 0) {
        this.frame.rotation.x += x
        this.frame.rotation.y += y
        this.frame.rotation.z += z
    }
}

export { Rock3x3 }
