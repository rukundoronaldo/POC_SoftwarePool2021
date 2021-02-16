/* ***typescript ****** */
import superComputer,{opators, callback} from "./superComputer";
import {createCosmonaut} from "./createCosmonaut";
import {getCosmonaut} from "./getCosmonaut";


const world = "hello world";

console.log(world);

superComputer(4, opators.add, 5, callback);

//let structure = createCosmonaut({name: "ronaldo", mission: "mars", country: "france"});
//createCosmonaut("ronaldo", "mars", "france");

console.log(getCosmonaut("./cosmonaut.json"));