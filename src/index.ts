import libnut from '@nut-tree/libnut';
import bufferToDataUrl from "buffer-to-data-url";
const encode_module = require('image-encode');

type Screenshot = {
    width: number;
    height: number;
    image: Buffer;
};

type ScreenSize = {
    width: number;
    height: number;
};

export function getRegion(x1:number,y1:number,x2:number,y2:number):Screenshot{
    return libnut.screen.capture(x1,y1,x1+x2,y1+y2)
}

export function screenSize():ScreenSize{
    return libnut.getScreenSize()
}

export function screenshot():Screenshot{
    const screensize = screenSize()
    return getRegion(0,0,screensize.width,screensize.height)
}

export function encode (raw:Screenshot,format:string):Buffer{
    const encoded = encode_module(raw.image,[raw.width,raw.height],format)
    return Buffer.from(encoded)
}
export function toURL(buffer:Buffer):Promise<string>{
    return bufferToDataUrl('image/png',buffer)
}
