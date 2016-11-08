function GetAllBooks() {
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


enum Category {Biography, Poetry, Fiction, History, Children}

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


function GetBookByID(id: number) {
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

CreateCustomer('Alex', 25, 'krk');



// LogFirstAvailable();
LogBookTitles(CheckoutBooks("Alex", 1,2,34))

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name:string, id: number)=> {return id + name};

let myID: string = IdGenerator('alex', 15);
// console.log(myID);

// const poetryBooks = GetBookTitlesByCategory(Category.Fiction);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(val));

