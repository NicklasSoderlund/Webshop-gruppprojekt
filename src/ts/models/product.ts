export class Product {
    constructor(public image:URL, 
        public name:string,
        public quality:string, 
        public inches:string,
        public hz:string, 
        public price:number,
        public category:string,
        public amount:number) {
    }
    
}