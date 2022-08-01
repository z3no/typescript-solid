import { Engine } from "./engine";
import { MusicPlayer } from "./musicPlayer";
import { FuelTank } from "./fuelTank";

export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _miles : number = 0;
    private _radio : MusicPlayer;
    private _engine : Engine;
    private _fuelTank: FuelTank;
    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private FUEL_MILEAGE: number = 10;

    constructor() {
        this._engine = new Engine();
        this._radio = new MusicPlayer();
        this._fuelTank = new FuelTank(100)
    }

    get miles(): number {
        return this._miles;
    }

    get radio(): MusicPlayer {
        return this._radio;
    }

    get engine(): Engine {
        return this._engine;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.


    drive() {
        if(this._engine.engineStatus === false || this._fuelTank.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._fuelTank.consumeFuel();
        this._miles += this.FUEL_MILEAGE;
    }
}