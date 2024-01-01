import {PieceRotatiin, PieceType} from "./piece-rotatiin";
import {Shape, Shapes} from "./shape";

export class Piece{
    x: number;
    y: number;
    rotation: PieceRotatiin.Deg0;
    type: PieceType;
    shape: Shape;
    next: Shape;

    private shapes: Shapes;
    private lastConfig: Partial<Piece>

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y
    }

    moveDown(step: number = 1){
        this.y  = this.y + step
    }

    moveLeft(){
        this.x--
    }

    moveRight(){
        this.x++
    }

}
