import { Dino } from "./dino"
import { Floor } from "./floor/floor"
import { Hill } from "./floor/hill"
import { Ptero } from "./ptero"
import { Subfloor } from "./floor/subfloor"
import { Bigcactus1 } from "./cactuses/1bigcactus"
import { Bigcactus2 } from "./cactuses/2bigcactus"
import { Mediumcactus2 } from "./cactuses/2mediumcactus"
import { Smallcactus2 } from "./cactuses/2smallcactus"
import { Mediumcactus3 } from "./cactuses/3mediumcactus"
import { Smallcactus3 } from "./cactuses/3smallcactus"
import { Bigtree1 } from "./decorations/1bigtree"
import { Flower_pink1 } from "./decorations/1flower_pink"
import { Flower_yellow1 } from "./decorations/1flower_yellow"
import { Flower_pink2 } from "./decorations/2flower_pink"
import { Rock2x2 } from "./decorations/2x2rock"
import { Rock2x3 } from "./decorations/2x3rock"
import { Rock3x3 } from "./decorations/3x3rock"
import { Rock3x4 } from "./decorations/3x4rock"
import { Dinoskull } from "./decorations/dinoskull"
import { Hintgold } from "./decorations/hintgold"
import { Palm } from "./decorations/palm"
import { Scorpion } from "./decorations/scorpion"
import { Seaweed } from "./decorations/seaweed"
import { Skull } from "./decorations/skull"
import { scene } from "./index"

class loader {
    constructor(scene) {
        this.dino = () => new Dino()
        this.floor = () => new Floor()
        this.hill = () => new Hill()
        this.ptero = () => new Ptero(scene)
        this.subfloor = () => new Subfloor()
        this.bigcactus1 = () => new Bigcactus1(scene)
        this.bigcactus2 = () => new Bigcactus2(scene)
        this.mediumcactus2 = () => new Mediumcactus2(scene)
        this.smallcactus2 = () => new Smallcactus2(scene)
        this.mediumcactus3 = () => new Mediumcactus3(scene)
        this.smallcactus3 = () => new Smallcactus3(scene)
        this.bigtree1 = () => new Bigtree1()
        this.flower_pink1 = () => new Flower_pink1()
        this.flower_yellow1 = () => new Flower_yellow1()
        this.flower_pink2 = () => new Flower_pink2()
        this.rock2x2 = () => new Rock2x2()
        this.rock2x3 = () => new Rock2x3()
        this.rock3x3 = () => new Rock3x3()
        this.rock3x4 = () => new Rock3x4()
        this.dinoskull = () => new Dinoskull()
        this.hintgold = () => new Hintgold()
        this.palm = () => new Palm()
        this.scorpion = () => new Scorpion()
        this.seaweed = () => new Seaweed()
        this.skull = () => new Skull()
    }
}

export { loader }
