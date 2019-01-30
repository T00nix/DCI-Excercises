/*

Create a new Class Animal
- with a property "name"
- with 2 methods "sayHi" and "speak" 

Initialize 2 instances of Animal 
(felix and snoop)

Call the methods and you should have as output
sayHi -> "Hi I'm Felix" or "Hi I'm Snoop"
speak -> "Felix makes a noise" or "Snoop makes a noise"

*/


class Animal {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Hi I'm ${this.name}.`)
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

const felix = new Animal("Felix");
felix.sayHi();
felix.speak();

const snoop = new Animal("Snoop");
snoop.sayHi();
snoop.speak();