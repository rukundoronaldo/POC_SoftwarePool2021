export type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

export function callback(err: Error, result?: undefined): Error;
export function callback(err: null, result: number): number;

export function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

export enum opators {
    add = "+",
    minus = "-",
    multiply = "*",
    divide = "/",
    modilo = "%"
}
function superComputer(number1 : number, oparator : opators, number2 : number, callback : Callback): number | Error {
    switch (oparator) {
        case opators.add:
            return callback(null, number1 + number2);
        case opators.minus:
            return callback(null, number1 - number2);
        case opators.multiply:
            return callback(null, number1 * number2);
        case opators.divide:
            return callback(null, number1 / number2);
        case opators.modilo:
            return callback(null, number1 % number2);
        default:
            return callback(new Error("Bad operator"));
    }
    if (oparator == opators.divide && (number1 == 0 || number2 == 0)) {
        return callback(new Error("Division by 0"));
        console.log(" Something else?");
    }
}

export default superComputer;