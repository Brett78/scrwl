import {Canvas} from './canvas';
import {Cursor} from './cursor';
import * as SocketIO from 'socket.io-client';

const canvas = new Canvas(window.innerWidth, window.innerHeight);
const socket = SocketIO();
const cursor = new Cursor(canvas, socket);

socket.on('canvas-update', (data: any) => {
    console.log(data);
    data.forEach((element: any) => {
        canvas.line(element.x - 1, element.y - 1, element.x, element.y);
    });
});