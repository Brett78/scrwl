export class Canvas
{
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor(width: number, height: number){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.appendCanvas();
    }

    public addEventListener(event: string, callback: (event: Event) => void){
        this.canvas.addEventListener(event, callback);
    }

    public line(x: number, y: number, dx: number, dy: number): void {
        const prevStyle = this.context.fillStyle;
        this.context.fillStyle = '#111111';
        this.context.lineJoin = 'round';
        this.context.lineWidth = 5;
        this.context.beginPath()
        this.context.moveTo(x, y)
        this.context.lineTo(dx, dy);
        this.context.closePath();
        this.context.stroke();
        this.context.fillStyle = prevStyle;
    }

    public get pixelData(): any {
        return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
    }

    private appendCanvas(): void {
        if(!document.body){
            document.appendChild(document.createElement('body'));
        }
        document.body.appendChild(this.canvas);
    }
}