import { Animal } from "./animal";

export class Parrot extends Animal{

    constructor(name: string, type: string, sound: string) {
        super(name, type, sound);
    }

}