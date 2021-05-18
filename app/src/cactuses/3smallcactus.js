import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"
import * as THREE from "three"

class Smallcactus3 {
    constructor(scene) {
        // object animation + state
        this.frame = 0

        this.framePos = { z: -0.2, x: -0.3, y: 0 }

        this.hity = 1.5
        this.hitx = 1
        this.hitz = 1

        const geometry = new THREE.BoxGeometry(1, 1.5, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.y = -200
        cube.position.x = -200
        cube.visible = false
        scene.add(cube)

        this.hitbox = cube
    }

    init() {
        const dir = "./models/cactus/3smallcactus"

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
        scene.remove(this.hitbox)
    }

    position(x = 0, y = 0, z = 0) {
        this.framePos = { z: -0.2, x: -0.3, y: 0 }

        this.framePos.x += x
        this.framePos.y += y
        this.framePos.z += z

        this.frame.position.z = this.framePos.z
        this.frame.position.x = this.framePos.x
        this.frame.position.y = this.framePos.y

        this.hitbox.position.z = this.framePos.z
        this.hitbox.position.x = this.framePos.x
        this.hitbox.position.y = this.framePos.y + 1.1
    }

    positionadd(x = 0, y = 0, z = 0) {
        this.framePos.z += z
        this.framePos.x += x
        this.framePos.y += y

        this.frame.position.z = this.framePos.z
        this.frame.position.x = this.framePos.x
        this.frame.position.y = this.framePos.y

        this.hitbox.position.z = this.framePos.z
        this.hitbox.position.x = this.framePos.x
        this.hitbox.position.y = this.framePos.y + 1.1
    }

    rotation(x = 0, y = 0, z = 0) {
        this.frame.rotation.x += x
        this.frame.rotation.y += y
        this.frame.rotation.z += z
    }
}

export { Smallcactus3 }
