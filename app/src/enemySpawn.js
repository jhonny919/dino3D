class EnemySpawn {
    constructor(Loader, list, scene) {
        this.enemy_type = ["ptero", "bigcactus1", "bigcactus2", "mediumcactus2", "smallcactus2", "mediumcactus3", "smallcactus3"]
        for (let i = 36; i < 80; i += 18) {
            let name = this.enemy_type[Math.floor(Math.random() * this.enemy_type.length)]
            if (name === "bigcactus1") {
                const bigcactus1 = Loader.bigcactus1()
                bigcactus1.init().then(() => {
                    bigcactus1.rotation(0, (Math.PI / 8) * 0, 0)

                    bigcactus1.add(scene)
                    bigcactus1.position(i, 0, 0)
                    list.add(bigcactus1)
                })
            }
            if (name === "mediumcactus2") {
                const mediumcactus2 = Loader.mediumcactus2()
                mediumcactus2.init().then(() => {
                    mediumcactus2.rotation(0, (Math.PI / 8) * 4, 0)

                    mediumcactus2.add(scene)
                    mediumcactus2.position(i, 0, 0)
                    list.add(mediumcactus2)
                })
            }
            if (name === "smallcactus2") {
                const smallcactus2 = Loader.smallcactus2()
                smallcactus2.init().then(() => {
                    smallcactus2.rotation(0, (Math.PI / 8) * 4, 0)

                    smallcactus2.add(scene)
                    smallcactus2.position(i, 0, 1)
                    list.add(smallcactus2)
                })
            }
            if (name === "mediumcactus3") {
                const mediumcactus3 = Loader.mediumcactus3()
                mediumcactus3.init().then(() => {
                    mediumcactus3.rotation(0, (Math.PI / 8) * 4, 0)

                    mediumcactus3.add(scene)
                    mediumcactus3.position(i, 0, 1)
                    list.add(mediumcactus3)
                })
            }
            if (name === "smallcactus3") {
                const smallcactus3 = Loader.smallcactus3()
                smallcactus3.init().then(() => {
                    smallcactus3.rotation(0, (Math.PI / 8) * 4, 0)

                    smallcactus3.add(scene)
                    smallcactus3.position(i, 0, 0.5)
                    list.add(smallcactus3)
                })
            }
            if (name === "bigcactus2") {
                const bigcactus2 = Loader.bigcactus2()
                bigcactus2.init().then(() => {
                    bigcactus2.rotation(0, (Math.PI / 8) * 0, 0)

                    bigcactus2.add(scene)
                    bigcactus2.position(i, 0, 0)
                    list.add(bigcactus2)
                })
            }
            if (name === "ptero") {
                const ptero = Loader.ptero()
                ptero.init().then(() => {
                    ptero.rotation(0, (Math.PI / 8) * 0, 0)
                    let arr = [1, 2.7, 4]
                    ptero.add(scene)
                    ptero.position(i, arr[this.random(0, 2)], 0)
                    list.add(ptero)
                })
            }
        }
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    add(Loader, list, scene) {
        let name = this.enemy_type[Math.floor(Math.random() * this.enemy_type.length)]
        if (name === "bigcactus1") {
            const bigcactus1 = Loader.bigcactus1()
            bigcactus1.init().then(() => {
                bigcactus1.rotation(0, (Math.PI / 8) * 0, 0)

                bigcactus1.add(scene)
                bigcactus1.position(80, 0, 0)
                list.add(bigcactus1)
            })
        }
        if (name === "mediumcactus2") {
            const mediumcactus2 = Loader.mediumcactus2()
            mediumcactus2.init().then(() => {
                mediumcactus2.rotation(0, (Math.PI / 8) * 4, 0)

                mediumcactus2.add(scene)
                mediumcactus2.position(80, 0, 0)
                list.add(mediumcactus2)
            })
        }
        if (name === "smallcactus2") {
            const smallcactus2 = Loader.smallcactus2()
            smallcactus2.init().then(() => {
                smallcactus2.rotation(0, (Math.PI / 8) * 4, 0)

                smallcactus2.add(scene)
                smallcactus2.position(80, 0, 1)
                list.add(smallcactus2)
            })
        }
        if (name === "mediumcactus3") {
            const mediumcactus3 = Loader.mediumcactus3()
            mediumcactus3.init().then(() => {
                mediumcactus3.rotation(0, (Math.PI / 8) * 4, 0)

                mediumcactus3.add(scene)
                mediumcactus3.position(80, 0, 1)
                list.add(mediumcactus3)
            })
        }
        if (name === "smallcactus3") {
            const smallcactus3 = Loader.smallcactus3()
            smallcactus3.init().then(() => {
                smallcactus3.rotation(0, (Math.PI / 8) * 4, 0)

                smallcactus3.add(scene)
                smallcactus3.position(80, 0, 0.5)
                list.add(smallcactus3)
            })
        }
        if (name === "bigcactus2") {
            const bigcactus2 = Loader.bigcactus2()
            bigcactus2.init().then(() => {
                bigcactus2.rotation(0, (Math.PI / 8) * 0, 0)

                bigcactus2.add(scene)
                bigcactus2.position(80, 0, 0)
                list.add(bigcactus2)
            })
        }
        if (name === "ptero") {
            const ptero = Loader.ptero()
            ptero.init().then(() => {
                ptero.rotation(0, (Math.PI / 8) * 0, 0)
                let arr = [1, 2.7, 4]
                ptero.add(scene)
                ptero.position(80, arr[this.random(0, 2)], 0)
                list.add(ptero)
            })
        }
    }
}

export { EnemySpawn }
