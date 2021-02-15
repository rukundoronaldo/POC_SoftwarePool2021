/* ***typescript ****** */

let world = "hello world";

console.log(world);

/*function great(firstname: string, lastname?: string): void{
  console.log("hello " + firstname + " " + lastname);
}

great("ronaldo", "rukundo");*/

/*type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}
function superComputer(number1 : number, oparator : string, number2 : number, callback : Callback) {
    if (oparator == "+")
        callback(null, number1 + number2);
}
superComputer(1, "+", 2, callback);*/

}