import {OvenInterface} from "../Interfaces/OvenInterface";

export class ElectricOven implements OvenInterface{
    private _isOn;

    public on(): void {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE POWER IS ON!</p>";
        }, 1000);
        console.log("THE POWER IS ON!");
        this._isOn = true;
    }

    public off(): void {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE POWER IS OFF!</p><hr>";
        }, 3000);
        console.log("THE POWER IS OFF!");
        this._isOn = false;
    }

    public bake(item: string): void {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no power!</p>";
            }, 2000);
            console.log("there is no power!");
        }
    }
}