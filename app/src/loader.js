import { Dino } from "./dino"
import { Floor } from "./floor"
import { Hill } from "./hill"
import { Ptero } from "./ptero"
import { Subfloor } from "./subfloor"
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

const Loader = {
    dino: () => new Dino(),
    floor: () => new Floor(),
    hill: () => new Hill(),
    ptero: () => new Ptero(),
    subfloor: () => new Subfloor(),
    bigcactus1: () => new Bigcactus1(),
    bigcactus2: () => new Bigcactus2(),
    mediumcactus2: () => new Mediumcactus2(),
    smallcactus2: () => new Smallcactus2(),
    mediumcactus3: () => new Mediumcactus3(),
    smallcactus3: () => new Smallcactus3(),
    bigtree1: () => new Bigtree1(),
    flower_pink1: () => new Flower_pink1(),
    flower_yellow1: () => new Flower_yellow1(),
    flower_pink2: () => new Flower_pink2(),
    rock2x2: () => new Rock2x2(),
    rock2x3: () => new Rock2x3(),
    rock3x3: () => new Rock3x3(),
    rock3x4: () => new Rock3x4(),
    dinoskull: () => new Dinoskull(),
    hintgold: () => new Hintgold(),
    palm: () => new Palm(),
    scorpion: () => new Scorpion(),
    seaweed: () => new Seaweed(),
    skull: () => new Skull(),
}

export { Loader }
