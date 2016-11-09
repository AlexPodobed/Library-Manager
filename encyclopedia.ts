import {ReferenceItem} from "./classes";

export  class Encyclopedia extends ReferenceItem{
    constructor(newTitle:string, newYear:number, public edition:number){
        super(newTitle, newYear);
    }

    printItem():void{
        super.printItem();
        console.log(`Edition: ${this.edition} | year: ${this.year}`);
    }

    printCitation():void{
        console.log(`${this.title} - ${this.year}`)
    }
}