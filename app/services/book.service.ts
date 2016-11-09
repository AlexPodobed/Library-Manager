import {IBook} from "../interfaces/interfaces";
import {Category} from "../shared/enums";

export function GetAllBooks(): IBook[] {
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

export function LogFirstAvailable(books:IBook[] = GetAllBooks()): void {
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


export function GetBookTitlesByCategory(catogeoryFilter: Category = Category.Fiction): Array<string> {
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


export function LogBookTitles(titles: string[]): void {
    for (let bookTitle of titles) {
        console.log(bookTitle)
    }
}


export function GetBookByID(id: number): IBook {
    const allBooks = GetAllBooks();
    return allBooks.filter((book) => book.id === id)[0];
}

export function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

export function CreateCustomer(name: string, age?: number, city?: string): void {
    if (age) {
        console.log(`Age: ${age}`)
    }
    if (city) {
        console.log(`City: ${city}`)
    }
}

export function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out boooks for ${customer}`);
    let booksCheckedOut: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book && book.available) {
            booksCheckedOut.push(book.title)
        }
    }
    return booksCheckedOut;
}

export function GetTitles(author: string): string[];
export function GetTitles(available: boolean): string[];

export function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

export function PrintBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`)
}