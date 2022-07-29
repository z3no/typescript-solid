<?php

/*
 *********************
 **** PHP OBJECTS ****
 *********************
 */

class Simple {} //A simple definition of a class. The body of the blueprint is empty, it does not have any data or methods.

$object = new Simple(); //We create a new instance of the Simple class. For this we have the new keyword
print_r($object); //print_r to get info about the object
echo "<br>", gettype($object), "<br><br>"; //gettype to get the type of the variable

// We will not get much info since the class definition is empty but we will see that our variable returns object as type


/*
 *******************************
 **** PHP OBJECT ATTRIBUTES ****
 *******************************
 */

//Object attributes are the data bundled in an instance of a class.
//The object attributes are called instance variables.
//An instance variable is a variable defined in a class.

//Person class with one instance variable
class Person {
    public $name = ""; //instance variable
}

$person1 = new Person(); //create an instance of the person class
$person1->name = "Zeno"; //set the $name variable to "Zeno". We use the -> operator to access the attributes of objects

$person2 = new Person(); //create another instance of the person class
$person2->name = "Robyn"; //we set the variable to "Robyn"

//We echo the contents of the variables
echo $person1->name . "<br>";
echo $person2->name . "<br><br>";
//In our output we see each instance of the Person class has a separate copy of the $name field.