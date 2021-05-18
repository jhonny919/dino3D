class FloorSpaw {
    constructor(Loader, list, scene) {
        this.length = 81

        for (let i = -1; i < 10; i++) {
            {
                const floor = Loader.floor()
                floor.init().then(() => {
                    floor.add(scene)
                    list.add(floor)
                    floor.position(i * 9, 0, 0)
                })
            }

            {
                const subfloor = Loader.subfloor()
                subfloor.init().then(() => {
                    subfloor.add(scene)
                    list.add(subfloor)
                    subfloor.position(i * 9, 0, 4)
                })
            }
            {
                const subfloor = Loader.subfloor()
                subfloor.init().then(() => {
                    subfloor.add(scene)
                    list.add(subfloor)
                    subfloor.position(i * 9, 0, 9.58)
                })
            }
            {
                const subfloor = Loader.subfloor()
                subfloor.init().then(() => {
                    subfloor.add(scene)
                    list.add(subfloor)
                    subfloor.position(i * 9, 0, 15)
                })
            }
            {
                const hill = Loader.hill()
                hill.init().then(() => {
                    hill.add(scene)
                    list.add(hill)
                    hill.position(i * 9, -1.5, -8.87)
                })
            }
            {
                const hill = Loader.hill()
                hill.init().then(() => {
                    hill.add(scene)
                    list.add(hill)
                    hill.position(i * 9, 0.25, -13.87)
                })
            }
            {
                const subfloor = Loader.subfloor()
                subfloor.init().then(() => {
                    subfloor.add(scene)
                    subfloor.position(i * 9, 0, -4.5)
                    subfloor.rotation(0, 0, Math.PI)
                })
            }
        }
    }
    minus(a) {
        this.length -= a
    }
    checkif() {
        return this.length <= 72
    }
    add(Loader, list) {
        {
            const floor = Loader.floor()
            floor.init().then(() => {
                floor.add(scene)
                list.add(floor)
                floor.position(this.length, 0, 0)
            })
        }
        {
            const subfloor = Loader.subfloor()
            subfloor.init().then(() => {
                subfloor.add(scene)
                list.add(subfloor)
                subfloor.position(this.length, 0, 4)
            })
        }
        {
            const subfloor = Loader.subfloor()
            subfloor.init().then(() => {
                subfloor.add(scene)
                list.add(subfloor)
                subfloor.position(this.length, 0, 9.58)
            })
        }
        {
            const subfloor = Loader.subfloor()
            subfloor.init().then(() => {
                subfloor.add(scene)
                list.add(subfloor)
                subfloor.position(this.length, 0, 15)
            })
        }
        {
            const hill = Loader.hill()
            hill.init().then(() => {
                hill.add(scene)
                list.add(hill)
                hill.position(this.length, -1.5, -8.87)
            })
        }
        {
            const hill = Loader.hill()
            hill.init().then(() => {
                hill.add(scene)
                list.add(hill)
                hill.position(this.length, 0.25, -13.87)
            })
        }
        this.length += 9
    }
}

export { FloorSpaw }
