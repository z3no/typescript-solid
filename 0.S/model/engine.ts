export class Engine {
    private _engineStatus: boolean = false;
    private _fuel : number = 0;
    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    get fuel(): number {
        return this._fuel;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    consumeFuel() {
        this._fuel -= 1;
    }
}