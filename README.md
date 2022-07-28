# TYPESCRIPT - SOLID
Learning Challenge

## Must do!
Try to make more time for the theoretical part here. Try to understand, research, document.

- [x] Before installing, read the article: [Typescript for JavaScript programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [x] Start with the installation
  - For Mac users that have node.js installed globally:
  - [x] Install Typescript 
    - `npm install typescript --save-dev -g`
  - [x] PhpStorm integration:
  - Here I went for the first option, make it so all TypeScript files are compiled the moment you change something in the file. `File | Settings | Languages & Frameworks | Typescript` and make sure to check -[x] Recompile on changes
  - [x] Install Parcel (make sure you have node.js installed)
    - `npm install parcel --save-dev -g`
    - After installing parcel you should be able to run `parcel index.html` in your project directory.
- [x] Try and make a 'Hello TypeScript'
  - resource: [Hello World](https://www.geeksforgeeks.org/hello-world-in-typescript-language/)

## OOP (Object-Oriented Programming) not an OOPSIE
Let's first go back to OOP and do some reading, research,...

The assertion that everything is an ***object*** is the concept which underlies **Object-Oriented Programming**, OOP for short. The concept of ***objects***
Object-oriented programming is based on the concept of objects. In object-oriented programming data structures, or **objects** are defined, each with its own **properties or attributes.**
Each object can also contain its own **procedures or methods.**

Benefits of using objects:
  - Faster and easier to execute.
  - Providing a clear structure for a program.
  - Making code easier to modify, debug and maintain.
  - Making it easier to reuse code.

### Basic terminology:
- **Object:** The instance of a class / it's the working entity of class
- **Class:** This is the model or standard about the capability of what an object can do
- **Method:** Can modify a class state that would apply across all the instances of the class
- **Instance:** These are like objects, however, let's think about it in these terms: A blueprint for a car design is the class description, all the cars manufactured from that blueprint are objects of that class. Your car that has been made from that blueprint is an instance of that class.

OOP languages are diverse, but the most popular ones are **class-based** languages in which objects are instances of **classes**.

A simple way to explain object-oriented programming is to use something like a car as an example. A car has a model name, a colour, a year in which it was manufactured, an engine size and so on.

We can create a Car object with the properties/attributes name, colour, engine size and year.
For every new car we make we would use the car object. We can have a 2009 blue BMW with an S65 (4.0 Liter Naturally Aspirated V8) engine or a 2017 Red Audi with a 5.0 V10 TFSI engine. In each instance we would reuse the code contained in the original object.

### The 4 Pillars (or main principles) of OOP

### Encapsulation:
All properties and methods of an object are kept private and safe from interference by other objects. In each object we can have private, protected and public variables and methods.
Private variables and methods cannot be called or used by other objects, whereas public ones can. Attributes with the access modifier protected can be accessed within your class, by all classes within the same file and by all subclasses within the same file or other files.
The protected modifier is mostly used for internal methods that need to be called or overridden by subclasses.

Let's look at our car. The attributes such as colour, year and model would be private variables. They can not be changed by other objects.
In turn we can have a public method called 'Start'. Other objects, for instance a Person object, would be able to call this method.

### Abstraction:


## SOLID

SOLID ᕦ(ò_ó)ᕤ a set of 5 principles, helping you write good OOP code. It is considered as one of the leading theories for modern code.

### **S** - Single Responsibility Principle

The ***Single Responsibility Principle*** states that **a Class should do one thing, therefore it should have only a single reason to change.**

![Single Responsibility](https://miro.medium.com/max/1400/1*P3oONz9Da3Tc1w97fMV73Q.png)

If a Class has many responsibilities it increases the possibility of bugs because making changes to one of its responsibilities. It could affect the other ones without knowing.

#### Goal:
This principle aims to separate behaviours so that if bugs arise as a result of your change it won't affect other unrelated behaviours.

### **O** - Open-Closed Principle

The ***Open-Closed Principle*** requires that **Classes should be open for extension and closed to modification.**

**Modification** means changing the code of an existing Class and **extension** means adding new functionality.

### **L** - Liskov Substitution Principle

The ***Liskov Substitution Principle*** states that subclasses should be substitutable for their base classes.

This means that, given Class B is a subclass of Class A, we should be able to pass an object of Class B to any method that expects an object of Class A and the method should not give any weird output in that case.

When we use **inheritance** we assume that the child class inherits everything that the superclass has. The child class extends the behaviour but **never** narrows it down.

### **I** - Interface Segregation Principle

**Segregation** means keeping things separated and the ***Interface Segregation Principle*** is about separating the interfaces.

The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do not need.

### **D** - Dependency Inversion Principle

The ***Dependency Inversion Principle*** states that our classes should depend upon interfaces or abstract classes instead of concrete classes and functions.

## Resources:

[The Four Pillars of Object  Oriented Programming](https://info.keylimeinteractive.com/the-four-pillars-of-object-oriented-programming)
[Object-Oriented Programming for Kids](https://funtech.co.uk/latest/explain-object-oriented-programming-to-kids#:~:text=The%20simplest%20way%20to%20explain,size%20and%20year%20as%20attributes.)
[The SOLID Principles of Object-Oriented Programming Explained in Plain English](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)
