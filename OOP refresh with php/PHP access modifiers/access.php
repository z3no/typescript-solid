<?php

/*
 ******************************
 **** PHP ACCESS MODIFIERS ****
 ******************************
 */

//Access modifiers set the visibility of methods and member fields.
//PHP has three access modifiers: public, protected, and private.
//The public members can be accessed from anywhere.
//The protected members can be accessed only within the class itself and by inherited and parent classes.
//The private members may only be accessed by the class that defines the member.

class Person {
    public $name = "";
    private $age;
}

$person = new Person();
$person->name = "Zeno"; //We access the $name variable from the outside ('not in the class'). Because the variable is declared public.
#$person->age = 17; //Accessing the $age variable is not possible. The private modifier prohibits this. If we uncomment the code line, we get the 'Fatal error: Uncaught Error: Cannot access private property Person::$age' error.

echo $person->name . "<br><br>";
#echo $person->age;

class Base { //The Base class has three (member fields) instance variables, all with different access modifiers.
    public $name = "Base";
    protected $id = 6124;
    private $is_defined = "yes";
}

class Derived extends Base { //We have a Derived class which extends the Base class.
    public function info() { //The info method has a public access modifier. This means, it can be called outside the class environment.
        echo "This is the Derived class" . "<br>";
        echo "Members inherited: " . "<br>";

        echo $this->name . "<br>";
        echo $this->id . "<br><br>";
        #echo $this->is_defined . "<br>"; //The $is_defined member is not inherited. The private modifier prevents this.
    }
}

$derived = new Derived();
$derived->info();

//The public and protected members are inherited, the private member is not.

class SysInfo {
    private function get_date() {
        return date("Y/m/d");
    }

    private function get_version() {
        return phpversion();
    }

    public function getInfo() {
        $date = $this->get_date();
        $version = $this->get_version();

        echo "The date is: $date" . "<br>";
        echo "The PHP version is: $version" . "<br><br>";
    }
}

$system = new SysInfo();
$system->getInfo();
#$system->get_date();