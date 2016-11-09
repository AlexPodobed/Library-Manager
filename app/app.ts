import {Category} from './shared/enums';
import {IBook, Logger, IAuthor, ILibrarian, IMagazine} from './interfaces/interfaces';
import {UnivesityLibrarian, ReferenceItem} from './classes/classes';
import {CalculateLateFee as CalcFe, Purge} from './shared/utilityFunctions';
import {Encyclopedia} from "./classes/encyclopedia";
import Shelf from './classes/shelf';
import * as BookService from './services/book.service';


let inventory: Array<IBook> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let bookShelf: Shelf<IBook> = new Shelf<IBook>();

inventory.forEach(book => bookShelf.add(book));
let fisrtBookOnShelf:IBook = bookShelf.getFirst();



BookService.LogFirstAvailable();
BookService.PrintBook(fisrtBookOnShelf);

console.log(`The 1st book on the shelf is ${fisrtBookOnShelf.title}`)

let magazines: Array<IMagazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<IMagazine> = new Shelf<IMagazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
let firstMagazine:IMagazine = magazineShelf.getFirst();

magazineShelf.printTitles()



// let purgedBooks = Purge<IBook>(inventory);
// let purgedBooks: Array<IBook> = Purge<IBook>(inventory);
// purgedBooks.forEach(book => console.log(book.title));


//
// let refBook:ReferenceItem = new Encyclopedia('WoldPedia', 1990, 10);
// refBook.printCitation();




// let ref = new ReferenceItem("this is title", 1888);
//
// ref.printItem();
// ref.publisher = "random";
//
// console.log(ref.publisher);


// let favLibrarian: ILibrarian = new UnivesityLibrarian();
// favLibrarian.name = 'test';
// favLibrarian.assistCustomer('lala');






// let MyBook:IBook = {
//     id: 5,
//     title: 'Some Book Title',
//     author: 'Angelou Maya',
//     available: true,
//     category: Category.Poetry,
//     pages: 390,
//     markDamaged: (reason:string)=> console.log(`Damaged: ${reason}`)
// };
//
// let logDamage: Logger;
//
// logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDamage('coffee stains');


// PrintBook(MyBook);



//
// CreateCustomer('Alex', 25, 'krk');



// LogFirstAvailable();
// LogBookTitles(CheckoutBooks("Alex", 1,2,34))

// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name:string, id: number)=> {return id + name};

// let myID: string = IdGenerator('alex', 15);
// console.log(myID);

// const poetryBooks = GetBookTitlesByCategory(Category.Fiction);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(val));

