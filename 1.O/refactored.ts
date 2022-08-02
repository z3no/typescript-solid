import {Animal} from "./model/animal";
import {Parrot} from "./model/parrot";
import {Cat} from "./model/cat";
import {Dog} from "./model/dog";
import {Lion} from "./model/lion";

class Zoo {
    private _animals : Array<Animal> = new Array<Animal>();

    public addAnimal(animal: Animal) {
        this._animals.push(animal);
    }

    get animals(): Array<Animal> {
        return this._animals;
    }
}

let zoo = new Zoo;
zoo.addAnimal(new Parrot('Gizmo', 'Parrot', 'Pretty bird!'));
zoo.addAnimal(new Cat('Minoes', 'Cat', 'Miauw!'));
zoo.addAnimal(new Dog('Oscar', 'Dog', 'Woef, Woef!'));
zoo.addAnimal(new Lion('Zuba', 'Lion', 'GROAR!'));

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.name + " is a " + animal.type + ": " + animal.sound + "<br>");
});