import {Restaurant} from "./Models/Restaurant";
import {GasOven} from "./Models/GasOven";
import {ElectricOven} from "./Models/ElectricOven";

let bakery = new Restaurant("Bakery", new GasOven());
bakery.Cook("cookies");

let momsKitchen = new Restaurant("Mom's kitchen", new ElectricOven());
momsKitchen.Cook("Chicory with ham and cheese in the oven");