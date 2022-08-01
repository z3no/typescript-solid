import { FuelTank } from "./fuelTank";

export class Engine {
    private _engineStatus: boolean = false;
    private _fuelTank: FuelTank;

    constructor(capacity: number) {
        this._fuelTank = new FuelTank(capacity)
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

    get fuelTank(): FuelTank {
        return this.fuelTank;
    }
}