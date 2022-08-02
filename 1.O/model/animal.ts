export class Animal {
    private _name : string;
    private _type: string;
    private _sound: string;

    constructor(name:string, type:string, sound:string) {
        this._name = name;
        this._type = type;
        this._sound = sound;
    }

    get name() : string {
        return this._name;
    }

    get type() : string {
        return this._type;
    }

    get sound() : string {
        return this._sound;
    }
}