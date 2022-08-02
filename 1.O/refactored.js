"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parrot_1 = require("./model/parrot");
var cat_1 = require("./model/cat");
var dog_1 = require("./model/dog");
var lion_1 = require("./model/lion");
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new parrot_1.Parrot('Gizmo', 'Parrot', 'Pretty bird!'));
zoo.addAnimal(new cat_1.Cat('Minoes', 'Cat', 'Miauw!'));
zoo.addAnimal(new dog_1.Dog('Oscar', 'Dog', 'Woef, Woef!'));
zoo.addAnimal(new lion_1.Lion('Zuba', 'Lion', 'GROAR!'));
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.name + " is a " + animal.type + ": " + animal.sound + "<br>");
});
