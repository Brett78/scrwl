import {Canvas} from './canvas';

export class Cursor
{
    private isMouseDown: boolean = false;
    private lastX: number;
    private lastY: number;
    private moves: Array<any> = [];

    constructor(private canvas: Canvas, private socket: any){
        this.canvas.addEventListener('mousemove', this.draw());
        this.canvas.addEventListener('mousedown', this.mouseDown());
        this.canvas.addEventListener('mouseup', this.mouseUp());
    }

    public draw(): (event: MouseEvent) => void {
        const cursor = this;
        return (event: MouseEvent): void => {
            if(cursor.isMouseDown){
                const startX = cursor.lastX || event.layerX - 1;
                const startY = cursor.lastY || event.layerY - 1;
                cursor.canvas.line(startX, startY, event.layerX, event.layerY);
                cursor.lastX = event.layerX;
                cursor.lastY = event.layerY;
                cursor.moves.push({x: event.layerX, y: event.layerY});
            }
        }
    } 

    private mouseDown(): (event: MouseEvent) => void {
        const cursor = this;
        return (event: MouseEvent): void => {
            cursor.isMouseDown = true;
        }
    }

    private mouseUp(): (event: MouseEvent) => void {
        const cursor = this;
        return (event: MouseEvent): void => {
            cursor.lastX = null;
            cursor.lastY = null;
            cursor.isMouseDown = false;
            cursor.socket.emit('canvas-update', cursor.moves);
            cursor.moves = [];
        }
    }
}