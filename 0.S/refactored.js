"use strict";
class Car {
    constructor() {
        //it is convention to start property names in TypeScript with an underscore.
        this._fuel = 0;
        this._miles = 0;
    }
}
class Engine {
    constructor() {
        this._engineStatus = false;
    }
}
class MusicPlayer {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
