import { v4 } from 'uuid';

export default class Keg {
    id: string = v4();
    constructor(
        public name: string = 'new keg', 
        public style: string = 'style', 
        public quantity: number = 124,
        public color: colorCode = new colorCode(100, 100, 100, 1),
        public APV: number = 5.0,
        public IBU: number = 80,
        public hops: Array<string> = ['GreenSkin', '', ''],
        public price16: number = 2.50,
        public price32: number = 5.00,
        public price64: number = 10.00,
    ) {}
}

export class colorCode {
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number,
    ) {}
}
