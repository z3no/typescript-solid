<?php

abstract class Shape {

    private int $x = 0;
    private int $y = 0;

    public abstract function area();
}

class Rectangle extends Shape {

    function __construct($x, $y) {

        $this->x = $x;
        $this->y = $y;
    }

    function area() {
        return $this->x * $this->y;
    }
}

class Square extends Shape {

    function __construct($x) {
        $this->x = $x;
    }

    function area() {
        return $this->x * $this->x;
    }
}

$shapes = [ new Square(5), new Rectangle(12, 4), new Square(8) ];

foreach ($shapes as $shape) {
    echo $shape->area() . "\n";
}