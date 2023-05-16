<?php

class Person {
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
        
    }
    function sayHi($name) {
        return "Hi, $name, I am " . $this->name;
    }
    function setHp($hp) {
        if ($this->hp + $hp > 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }
    function getHp() {
        return $this->hp;
    }
    function getName() {
        return $this->name;
    }
    function getLastname() {
        return $this->lastname;
    }
    function getMother() {
        return $this->mother;
    }
    function getFather() {
        return $this->father;
    }
    function getInfo() {
        return "<h3>A few words about me:</h3><br>" . "My name is: " . $this->getName() . "<br>My lastname is: " . $this->getLastname() . 
        "<br>My mother is: " . $this->getMother()->getName() . " " . $this->getMother()->getLastname() . 
        "<br>My father is: " . $this->getFather()->getName() . " " . $this->getFather()->getLastname() . 
        "<br>My grandma by mother's side is: " . $this->getMother()->getMother()->getName() . " " . $this->getMother()->getMother()->getLastname() . 
        "<br>My grandpa by mother's side is: " . $this->getMother()->getFather()->getName() . " " . $this->getMother()->getFather()->getLastname() . 
        "<br>My grandma by father's side is: " . $this->getFather()->getMother()->getName() . " " . $this->getFather()->getMother()->getLastname() .  
        "<br>My grandpa by father's side is: " . $this->getFather()->getFather()->getName() . " " . $this->getFather()->getFather()->getLastname();
        
    }
}

//Здоровье чела не может быть больше 100%
$anna = new Person("Anna", "Ivanova", 69);
$oleg = new Person("Oleg", "Popov", 77);

$svetlana = new Person("Svetlana", "Keker", 65);
$alex = new Person("Alex", "Keker", 68);

$olga = new Person("Olga", "Popova", 35, $svetlana, $alex);
$igor = new Person("Igor", "Popov", 37, $anna, $oleg);
$lavrentiy = new Person("Lavrentiy", "Popov", 12, $olga, $igor);

// echo $lavrentiy->getMother()->getFather()->getName();
echo $lavrentiy->getInfo();
