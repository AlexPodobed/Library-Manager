export function CalculateLateFee(daysLate: number): number {
    return daysLate * .25;
}
export function MaxBooksAllowed(age: number): number {
    return age < 12 ? 3 : 10
}
function privateFunc(): void {
    console.log('this is private')
}
// example of generic function
export function Purge<T>(inventory: Array<T>): Array<T> {
    // do staff
    return inventory.splice(2, inventory.length)
}