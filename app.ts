import {Category} from './enums';
import {IBook, Logger, IAuthor, ILibrarian, IMagazine} from './interfaces';
import {UnivesityLibrarian, ReferenceItem} from './classes';
import {CalculateLateFee as CalcFe, Purge} from './modules_demo/utilityFunctions';
import {Encyclopedia} from "./encyclopedia";
import Shelf from './shelf';

function GetAllBooks():IBook[] {
    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
        {
            id: 3,
            title: 'I Know Why the Caged Bird Sings',
            author: 'Maya Angelou',
            available: true,
            category: Category.Poetry
        },
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log(`Total books: ${numberOfBooks}`);
    console.log(`FirstAvailable: ${firstAvailable}`);
}



function GetBookTitlesByCategory(catogeoryFilter: Category = Category.Fiction): Array<string> {
    console.log(`Getting books in category: ${[Category[catogeoryFilter]]}`);
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === catogeoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}


function LogBookTitles(titles: string[]): void {
    for (let bookTitle of titles) {
        console.log(bookTitle)
    }
}


function GetBookByID(id: number):IBook {
    const allBooks = GetAllBooks();
    return allBooks.filter((book) => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name:string, age?:number, city?: string):void{
    if(age){
        console.log(`Age: ${age}`)
    }
    if(city){
        console.log(`City: ${city}`)
    }
}

function CheckoutBooks(customer:string, ...bookIDs:number[]):string[]{
    console.log(`Checking out boooks for ${customer}`);
    let booksCheckedOut:string[] = [];

    for(let id of bookIDs){
        let book = GetBookByID(id);
        if(book && book.available){
            booksCheckedOut.push(book.title)
        }
    }
    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty:any):string[]{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string'){
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    if(typeof bookProperty == 'boolean'){
        for(let book of allBooks){
            if(book.available === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book:IBook):void{
    console.log(`${book.title} by ${book.author}`)
}

let inventory: Array<IBook> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let bookShelf: Shelf<IBook> = new Shelf<IBook>();

inventory.forEach(book => bookShelf.add(book));
let fisrtBookOnShelf:IBook = bookShelf.getFirst();

PrintBook(fisrtBookOnShelf);

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

