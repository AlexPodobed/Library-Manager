namespace Utility{
    export namespace Fees{
        export function CalculateFee(daysLate:number):number{
            return daysLate * .25;
        }
    }
    export function MaxBooksAllowed(age:number):number{
        return age < 12 ? 3: 10
    }
    function privateFunc():void{
        console.log('this is private')
    }
}