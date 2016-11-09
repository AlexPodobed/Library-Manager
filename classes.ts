import * as Interfaces from './interfaces';


class UnivesityLibrarian implements Interfaces.ILibrarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research';


    constructor(public title: string, protected year: number) {
        console.log('Creating new Reference item')
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. For ${ReferenceItem.department} department`)
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation():void;
}




export {UnivesityLibrarian, ReferenceItem}