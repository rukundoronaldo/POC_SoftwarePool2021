import { createCosmonaut,Cosmonaut } from "./createCosmonaut";

export function getCosmonaut(path: string): Cosmonaut | Error {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
    const json = require(path);
    const { name, mission, country} = json["cosmonaut"][1];
    const name2 = json["cosmonaut"][1]["name"];
    if (!name || !country || !mission) {
        return new Error("Json is invalid");
    }
    console.log(name2);
    return createCosmonaut(name, mission, country);
}