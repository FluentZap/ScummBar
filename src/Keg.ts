export default class Keg {
    constructor(
        public name: string, 
        public type: string, 
        public quantity: number,
        public color: colorCode,
        public APV: number,
        public IBU: number,
        public Hops: Array<string>,
        public Price16: number,
        public Price32: number,
        public Price64: number,        
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
