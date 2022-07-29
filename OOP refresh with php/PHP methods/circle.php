<?php

/*
 *********************
 **** PHP METHODS ****
 *********************
 */

//Methods are functions defined inside the body of a class.
//They are used to perform operations with the attributes of our objects.
//Methods are essential in encapsulation concept of the OOP paradigm.

//Circle class with 2 methods
class Circle {
    public $radius; //instance variable, public keyword is an access specifier. It tells that the variable is fully accessible from the outside world.

    function setRadius($radius){ //setRadius method. Normal PHP function. Functions defined inside classes are named methods.
        $this->radius = $radius; //$this variable is a special variable which we use to access the instance variables from methods
    }

    function area(){ //the area method returns the area of a circle. M_PI is a built-in constant.
        return $this->radius * $this->radius * M_PI;
    }
}

$circle = new Circle();
$circle->setRadius(5);

echo $circle->area() . "<br><br>";