export default class Keg {
    constructor(
        public name: string, 
        public style: string, 
        public quantity: number,
        public color: colorCode,
        public APV: number,
        public IBU: number,
        public hops: Array<string>,
        public price16: number,
        public price32: number,
        public price64: number,        
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
