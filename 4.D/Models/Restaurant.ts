import {OvenInterface} from "../Interfaces/OvenInterface";

export class Restaurant {
    private _name : string;
    private _oven : OvenInterface;

    constructor(name : string, oven : OvenInterface) {
        this._name = name;
        this._oven = oven;
    }

    public Cook(item : string) {
        this._oven.on();
        this._oven.bake(item);
        this._oven.off();
    }
}