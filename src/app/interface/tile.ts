export  type TileValue = 0 | 1 | 2

export class Tile {
    isSolid: boolean;
    #value: TileValue;

    constructor(val: TileValue) {
        this.#value = val;
    }

    get isFilled() {
        return this.#value === 1;
    }
}
