interface IShelfItem{
    title?: string;
}

export default class Shelf<T extends IShelfItem>{
    private _items: Array<T> = new Array<T>();
    constructor(){console.log('new shelf initialized')}

    add(item:T){
        this._items.push(item)
    }

    getFirst():T{
        return this._items[0];
    }

    find(title:string):T{
        return this._items.filter(item => item.title === title)[0];
    }

    printTitles():void{
        this._items.forEach(item => console.log(item.title))
    }
}