class DecSpawn {
    constructor(Loader, list, scene) {
        this.bg1 = ["dinoskull", "hintgold", "scorpion", "skull", "1bigcactus", "2mediumcactus", "2smallcactus", "3mediumcactus", "3smallcactus"]

        this.bg2 = ["1bigtree", "palm", "dinoskull", "skull", "1bigcactus", "2bigcactus", "2mediumcactus", "2smallcactus", "3mediumcactus", "3smallcactus"]

        this.bg3 = ["1flower_pink", "1flower_yellow", "2flower_pink", "2x2rock", "2x3rock", "3x3rock", "3x4rock", "dinoskull", "scorpion", "seaweed"]

        this.bg4 = ["1flower_pink", "1flower_yellow", "2flower_pink", "2x2rock", "2x3rock", "3x3rock", "3x4rock"]
        ;(() => {
            let name
            for (let i = 0; i < 73; i += 14) {
                name = this.bg1[Math.floor(Math.random() * this.bg1.length)]
                if (name === "skull") {
                    const skull = Loader.skull()
                    skull.init().then(() => {
                        skull.frame.scale.multiplyScalar(0.5)
                        skull.rotation((Math.PI / 8) * 4, 0, (Math.PI / 8) * 11)

                        skull.add(scene)
                        skull.position(i, 0.6, this.random(-9, -7))
                        list.add(skull)
                    })
                }
                if (name === "dinoskull") {
                    const dinoskull = Loader.dinoskull()
                    dinoskull.init().then(() => {
                        dinoskull.rotation(0, (Math.PI / 8) * 6, 0)

                        dinoskull.add(scene)
                        dinoskull.position(i, 0.6, this.random(-9, -7))
                        list.add(dinoskull)
                    })
                }
                if (name === "hintgold") {
                    const hintgold = Loader.hintgold()
                    hintgold.init().then(() => {
                        hintgold.rotation(0, (Math.PI / 8) * 7, 0)

                        hintgold.add(scene)
                        hintgold.position(i, 0.2, this.random(-9, -7))
                        list.add(hintgold)
                    })
                }
                if (name === "scorpion") {
                    const scorpion = Loader.scorpion()
                    scorpion.init().then(() => {
                        scorpion.rotation(0, (Math.PI / 8) * 4, 0)

                        scorpion.add(scene)
                        scorpion.position(i, 0.2, this.random(-11, -8))
                        list.add(scorpion)
                    })
                }
                if (name === "1bigcactus") {
                    const bigcactus1 = Loader.bigcactus1()
                    bigcactus1.init().then(() => {
                        bigcactus1.rotation(0, (Math.PI / 8) * 2, 0)

                        bigcactus1.add(scene)
                        bigcactus1.position(i, 0.2, this.random(-10, -8))
                        list.add(bigcactus1)
                    })
                }
                if (name === "2mediumcactus") {
                    const mediumcactus2 = Loader.mediumcactus2()
                    mediumcactus2.init().then(() => {
                        mediumcactus2.rotation(0, (Math.PI / 8) * 7, 0)

                        mediumcactus2.add(scene)
                        mediumcactus2.position(i, 0.2, this.random(-11, -9))
                        list.add(mediumcactus2)
                    })
                }
                if (name === "2smallcactus") {
                    const smallcactus2 = Loader.smallcactus2()
                    smallcactus2.init().then(() => {
                        smallcactus2.rotation(0, (Math.PI / 8) * 6, 0)

                        smallcactus2.add(scene)
                        smallcactus2.position(i, 0.2, this.random(-10, -7))
                        list.add(smallcactus2)
                    })
                }
                if (name === "3mediumcactus") {
                    const mediumcactus3 = Loader.mediumcactus3()
                    mediumcactus3.init().then(() => {
                        mediumcactus3.rotation(0, (Math.PI / 8) * 5, 0)

                        mediumcactus3.add(scene)
                        mediumcactus3.position(i, 0.2, this.random(-9, -8))
                        list.add(mediumcactus3)
                    })
                }
                if (name === "3smallcactus") {
                    const smallcactus3 = Loader.smallcactus3()
                    smallcactus3.init().then(() => {
                        smallcactus3.rotation(0, (Math.PI / 8) * 3, 0)

                        smallcactus3.add(scene)
                        smallcactus3.position(i, 0.2, this.random(-10, -8))
                        list.add(smallcactus3)
                    })
                }
                name = this.bg2[Math.floor(Math.random() * this.bg2.length)]
                if (name === "1bigtree") {
                    const bigtree1 = Loader.bigtree1()
                    bigtree1.init().then(() => {
                        bigtree1.rotation(0, -(Math.PI / 8) * 1, 0)

                        bigtree1.add(scene)
                        bigtree1.position(i, 2, this.random(-15, -13))
                        list.add(bigtree1)
                    })
                }
                if (name === "palm") {
                    const palm = Loader.palm()
                    palm.init().then(() => {
                        palm.rotation(0, -(Math.PI / 8) * 0, 0)

                        palm.add(scene)
                        palm.position(i, 2, this.random(-15, -13))
                        list.add(palm)
                    })
                }
                if (name === "dinoskull") {
                    const dinoskull = Loader.dinoskull()
                    dinoskull.init().then(() => {
                        dinoskull.rotation(0, (Math.PI / 8) * 6, 0)

                        dinoskull.add(scene)
                        dinoskull.position(i, 2, this.random(-15, -13))
                        list.add(dinoskull)
                    })
                }
                if (name === "skull") {
                    const skull = Loader.skull()
                    skull.init().then(() => {
                        skull.frame.scale.multiplyScalar(0.5)
                        skull.rotation((Math.PI / 8) * 4, 0, (Math.PI / 8) * 11)

                        skull.add(scene)
                        skull.position(i, 2.3, this.random(-15, -13))
                        list.add(skull)
                    })
                }
                if (name === "1bigcactus") {
                    const bigcactus1 = Loader.bigcactus1()
                    bigcactus1.init().then(() => {
                        bigcactus1.rotation(0, (Math.PI / 8) * 2, 0)

                        bigcactus1.add(scene)
                        bigcactus1.position(i, 2, this.random(-15, -13))
                        list.add(bigcactus1)
                    })
                }
                if (name === "2mediumcactus") {
                    const mediumcactus2 = Loader.mediumcactus2()
                    mediumcactus2.init().then(() => {
                        mediumcactus2.rotation(0, (Math.PI / 8) * 7, 0)

                        mediumcactus2.add(scene)
                        mediumcactus2.position(i, 2, this.random(-15, -13))
                        list.add(mediumcactus2)
                    })
                }
                if (name === "2smallcactus") {
                    const smallcactus2 = Loader.smallcactus2()
                    smallcactus2.init().then(() => {
                        smallcactus2.rotation(0, (Math.PI / 8) * 6, 0)

                        smallcactus2.add(scene)
                        smallcactus2.position(i, 2, this.random(-15, -13))
                        list.add(smallcactus2)
                    })
                }
                if (name === "3mediumcactus") {
                    const mediumcactus3 = Loader.mediumcactus3()
                    mediumcactus3.init().then(() => {
                        mediumcactus3.rotation(0, (Math.PI / 8) * 5, 0)

                        mediumcactus3.add(scene)
                        mediumcactus3.position(i, 2, this.random(-14, -12))
                        list.add(mediumcactus3)
                    })
                }
                if (name === "3smallcactus") {
                    const smallcactus3 = Loader.smallcactus3()
                    smallcactus3.init().then(() => {
                        smallcactus3.rotation(0, (Math.PI / 8) * 3, 0)

                        smallcactus3.add(scene)
                        smallcactus3.position(i, 2, this.random(-15, -13))
                        list.add(smallcactus3)
                    })
                }
                if (name === "2bigcactus") {
                    const bigcactus2 = Loader.bigcactus2()
                    bigcactus2.init().then(() => {
                        bigcactus2.rotation(0, (Math.PI / 8) * 0, 0)

                        bigcactus2.add(scene)
                        bigcactus2.position(i, 2, this.random(-15, -13))
                        list.add(bigcactus2)
                    })
                }
            }
        })()
    }

    add(Loader, list, scene) {
        this.spawnbg1(Loader, list, scene)
        this.spawnbg2(Loader, list, scene)
        this.spawnbg3(Loader, list, scene)
        this.spawnbg4(Loader, list, scene)
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    spawnbg1(Loader, list, scene) {
        this.bg1i = setTimeout(() => {
            let name = this.bg1[Math.floor(Math.random() * this.bg1.length)]
            if (name === "skull") {
                const skull = Loader.skull()
                skull.init().then(() => {
                    skull.frame.scale.multiplyScalar(0.5)
                    skull.rotation((Math.PI / 8) * 4, 0, (Math.PI / 8) * 11)

                    skull.add(scene)
                    skull.position(80, 0.6, this.random(-9, -7))
                    list.add(skull)
                })
            }
            if (name === "dinoskull") {
                const dinoskull = Loader.dinoskull()
                dinoskull.init().then(() => {
                    dinoskull.rotation(0, (Math.PI / 8) * 6, 0)

                    dinoskull.add(scene)
                    dinoskull.position(80, 0.6, this.random(-9, -7))
                    list.add(dinoskull)
                })
            }
            if (name === "hintgold") {
                const hintgold = Loader.hintgold()
                hintgold.init().then(() => {
                    hintgold.rotation(0, (Math.PI / 8) * 7, 0)

                    hintgold.add(scene)
                    hintgold.position(80, 0.2, this.random(-9, -7))
                    list.add(hintgold)
                })
            }
            if (name === "scorpion") {
                const scorpion = Loader.scorpion()
                scorpion.init().then(() => {
                    scorpion.rotation(0, (Math.PI / 8) * 4, 0)

                    scorpion.add(scene)
                    scorpion.position(80, 0.2, this.random(-11, -8))
                    list.add(scorpion)
                })
            }
            if (name === "1bigcactus") {
                const bigcactus1 = Loader.bigcactus1()
                bigcactus1.init().then(() => {
                    bigcactus1.rotation(0, (Math.PI / 8) * 2, 0)

                    bigcactus1.add(scene)
                    bigcactus1.position(80, 0.2, this.random(-10, -8))
                    list.add(bigcactus1)
                })
            }
            if (name === "2mediumcactus") {
                const mediumcactus2 = Loader.mediumcactus2()
                mediumcactus2.init().then(() => {
                    mediumcactus2.rotation(0, (Math.PI / 8) * 7, 0)

                    mediumcactus2.add(scene)
                    mediumcactus2.position(80, 0.2, this.random(-11, -9))
                    list.add(mediumcactus2)
                })
            }
            if (name === "2smallcactus") {
                const smallcactus2 = Loader.smallcactus2()
                smallcactus2.init().then(() => {
                    smallcactus2.rotation(0, (Math.PI / 8) * 6, 0)

                    smallcactus2.add(scene)
                    smallcactus2.position(63, 0.2, this.random(-10, -7))
                    list.add(smallcactus2)
                })
            }
            if (name === "3mediumcactus") {
                const mediumcactus3 = Loader.mediumcactus3()
                mediumcactus3.init().then(() => {
                    mediumcactus3.rotation(0, (Math.PI / 8) * 5, 0)

                    mediumcactus3.add(scene)
                    mediumcactus3.position(80, 0.2, this.random(-9, -8))
                    list.add(mediumcactus3)
                })
            }
            if (name === "3smallcactus") {
                const smallcactus3 = Loader.smallcactus3()
                smallcactus3.init().then(() => {
                    smallcactus3.rotation(0, (Math.PI / 8) * 3, 0)

                    smallcactus3.add(scene)
                    smallcactus3.position(80, 0.2, this.random(-10, -8))
                    list.add(smallcactus3)
                })
            }
        }, this.random(1500, 3000))
    }
    spawnbg2(Loader, list, scene) {
        this.bg2i = setTimeout(() => {
            let name = this.bg2[Math.floor(Math.random() * this.bg2.length)]
            if (name === "1bigtree") {
                const bigtree1 = Loader.bigtree1()
                bigtree1.init().then(() => {
                    bigtree1.rotation(0, -(Math.PI / 8) * 1, 0)

                    bigtree1.add(scene)
                    bigtree1.position(80, 2, this.random(-15, -13))
                    list.add(bigtree1)
                })
            }
            if (name === "palm") {
                const palm = Loader.palm()
                palm.init().then(() => {
                    palm.rotation(0, -(Math.PI / 8) * 0, 0)

                    palm.add(scene)
                    palm.position(80, 2, this.random(-15, -13))
                    list.add(palm)
                })
            }
            if (name === "dinoskull") {
                const dinoskull = Loader.dinoskull()
                dinoskull.init().then(() => {
                    dinoskull.rotation(0, (Math.PI / 8) * 6, 0)

                    dinoskull.add(scene)
                    dinoskull.position(80, 2, this.random(-15, -13))
                    list.add(dinoskull)
                })
            }
            if (name === "skull") {
                const skull = Loader.skull()
                skull.init().then(() => {
                    skull.frame.scale.multiplyScalar(0.5)
                    skull.rotation((Math.PI / 8) * 4, 0, (Math.PI / 8) * 11)

                    skull.add(scene)
                    skull.position(80, 2.3, this.random(-15, -13))
                    list.add(skull)
                })
            }
            if (name === "1bigcactus") {
                const bigcactus1 = Loader.bigcactus1()
                bigcactus1.init().then(() => {
                    bigcactus1.rotation(0, (Math.PI / 8) * 2, 0)

                    bigcactus1.add(scene)
                    bigcactus1.position(80, 2, this.random(-15, -13))
                    list.add(bigcactus1)
                })
            }
            if (name === "2mediumcactus") {
                const mediumcactus2 = Loader.mediumcactus2()
                mediumcactus2.init().then(() => {
                    mediumcactus2.rotation(0, (Math.PI / 8) * 7, 0)

                    mediumcactus2.add(scene)
                    mediumcactus2.position(80, 2, this.random(-15, -13))
                    list.add(mediumcactus2)
                })
            }
            if (name === "2smallcactus") {
                const smallcactus2 = Loader.smallcactus2()
                smallcactus2.init().then(() => {
                    smallcactus2.rotation(0, (Math.PI / 8) * 6, 0)

                    smallcactus2.add(scene)
                    smallcactus2.position(63, 2, this.random(-15, -13))
                    list.add(smallcactus2)
                })
            }
            if (name === "3mediumcactus") {
                const mediumcactus3 = Loader.mediumcactus3()
                mediumcactus3.init().then(() => {
                    mediumcactus3.rotation(0, (Math.PI / 8) * 5, 0)

                    mediumcactus3.add(scene)
                    mediumcactus3.position(80, 2, this.random(-14, -12))
                    list.add(mediumcactus3)
                })
            }
            if (name === "3smallcactus") {
                const smallcactus3 = Loader.smallcactus3()
                smallcactus3.init().then(() => {
                    smallcactus3.rotation(0, (Math.PI / 8) * 3, 0)

                    smallcactus3.add(scene)
                    smallcactus3.position(80, 2, this.random(-15, -13))
                    list.add(smallcactus3)
                })
            }
            if (name === "2bigcactus") {
                const bigcactus2 = Loader.bigcactus2()
                bigcactus2.init().then(() => {
                    bigcactus2.rotation(0, (Math.PI / 8) * 0, 0)

                    bigcactus2.add(scene)
                    bigcactus2.position(80, 2, this.random(-15, -13))
                    list.add(bigcactus2)
                })
            }
        }, this.random(1500, 3000))
    }
    spawnbg3(Loader, list, scene) {
        this.bg3i = setTimeout(() => {
            let name = this.bg3[Math.floor(Math.random() * this.bg3.length)]
            if (name === "1flower_pink") {
                const flower_pink1 = Loader.flower_pink1()
                flower_pink1.init().then(() => {
                    flower_pink1.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_pink1.add(scene)
                    flower_pink1.position(80, -1, this.random(3, 8))
                    list.add(flower_pink1)
                })
            }
            if (name === "1flower_yellow") {
                const flower_yellow1 = Loader.flower_yellow1()
                flower_yellow1.init().then(() => {
                    flower_yellow1.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_yellow1.add(scene)
                    flower_yellow1.position(80, -1, this.random(3, 8))
                    list.add(flower_yellow1)
                })
            }
            if (name === "2flower_pink") {
                const flower_pink2 = Loader.flower_pink2()
                flower_pink2.init().then(() => {
                    flower_pink2.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_pink2.add(scene)
                    flower_pink2.position(80, -1, this.random(3, 8))
                    list.add(flower_pink2)
                })
            }
            if (name === "2x2rock") {
                const rock2x2 = Loader.rock2x2()
                rock2x2.init().then(() => {
                    rock2x2.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock2x2.add(scene)
                    rock2x2.position(80, -1, this.random(3, 8))
                    list.add(rock2x2)
                })
            }
            if (name === "2x3rock") {
                const rock2x3 = Loader.rock2x3()
                rock2x3.init().then(() => {
                    rock2x3.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock2x3.add(scene)
                    rock2x3.position(80, -1, this.random(3, 8))
                    list.add(rock2x3)
                })
            }
            if (name === "3x3rock") {
                const rock3x3 = Loader.rock3x3()
                rock3x3.init().then(() => {
                    rock3x3.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock3x3.add(scene)
                    rock3x3.position(80, -1, this.random(3, 8))
                    list.add(rock3x3)
                })
            }
            if (name === "3x4rock") {
                const rock3x4 = Loader.rock3x4()
                rock3x4.init().then(() => {
                    rock3x4.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock3x4.add(scene)
                    rock3x4.position(80, -1, this.random(3, 8))
                    list.add(rock3x4)
                })
            }
            if (name === "dinoskull") {
                const dinoskull = Loader.dinoskull()
                dinoskull.init().then(() => {
                    dinoskull.rotation(0, -(Math.PI / 8) * 5, 0)

                    dinoskull.add(scene)
                    dinoskull.position(80, -1, this.random(3, 8))
                    list.add(dinoskull)
                })
            }
            if (name === "scorpion") {
                const scorpion = Loader.scorpion()
                scorpion.init().then(() => {
                    scorpion.rotation(0, this.random(0, 6), 0)

                    scorpion.add(scene)
                    scorpion.position(80, -1, this.random(3, 8))
                    list.add(scorpion)
                })
            }
            if (name === "seaweed") {
                const seaweed = Loader.seaweed()
                seaweed.init().then(() => {
                    seaweed.rotation(0, (Math.PI / 8) * 3, 0)

                    seaweed.add(scene)
                    seaweed.position(80, -1, this.random(-5, -3))
                    list.add(seaweed)
                })
            }
        }, this.random(1000, 2000))
    }
    spawnbg4(Loader, list, scene) {
        this.bg4i = setTimeout(() => {
            let name = this.bg4[Math.floor(Math.random() * this.bg4.length)]
            if (name === "1flower_pink") {
                const flower_pink1 = Loader.flower_pink1()
                flower_pink1.init().then(() => {
                    flower_pink1.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_pink1.add(scene)
                    flower_pink1.position(80, 0, this.random(-1, 1))
                    list.add(flower_pink1)
                })
            }
            if (name === "1flower_yellow") {
                const flower_yellow1 = Loader.flower_yellow1()
                flower_yellow1.init().then(() => {
                    flower_yellow1.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_yellow1.add(scene)
                    flower_yellow1.position(80, 0, this.random(-1, 1))
                    list.add(flower_yellow1)
                })
            }
            if (name === "2flower_pink") {
                const flower_pink2 = Loader.flower_pink2()
                flower_pink2.init().then(() => {
                    flower_pink2.rotation(0, -(Math.PI / 8) * 0, 0)

                    flower_pink2.add(scene)
                    flower_pink2.position(80, 0, this.random(-1, 1))
                    list.add(flower_pink2)
                })
            }
            if (name === "2x2rock") {
                const rock2x2 = Loader.rock2x2()
                rock2x2.init().then(() => {
                    rock2x2.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock2x2.add(scene)
                    rock2x2.position(80, 0, this.random(-1, 1))
                    list.add(rock2x2)
                })
            }
            if (name === "2x3rock") {
                const rock2x3 = Loader.rock2x3()
                rock2x3.init().then(() => {
                    rock2x3.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock2x3.add(scene)
                    rock2x3.position(80, 0, this.random(-1, 1))
                    list.add(rock2x3)
                })
            }
            if (name === "3x3rock") {
                const rock3x3 = Loader.rock3x3()
                rock3x3.init().then(() => {
                    rock3x3.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock3x3.add(scene)
                    rock3x3.position(80, 0, this.random(-1, 1))
                    list.add(rock3x3)
                })
            }
            if (name === "3x4rock") {
                const rock3x4 = Loader.rock3x4()
                rock3x4.init().then(() => {
                    rock3x4.rotation(0, -(Math.PI / 8) * 0, 0)

                    rock3x4.add(scene)
                    rock3x4.position(80, 0, this.random(-1, 1))
                    list.add(rock3x4)
                })
            }
        }, this.random(1000, 2000))
    }
}

export { DecSpawn }
