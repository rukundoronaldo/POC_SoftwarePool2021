export interface Cosmonaut{
    name : string;
    mission : string;
    country : string;
}

export function createCosmonaut(nom : string, missions : string, countries: string): Cosmonaut {
    const value = {name : "roro", mission: "roro", country: "france"};
    value.name = nom;
    value.mission = missions;
    value.country = countries;

    return value;
}