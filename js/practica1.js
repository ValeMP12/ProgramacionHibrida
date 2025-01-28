//Objeto basico

//function createNewPerson(name) {
//  var obj = {}
//obj.name = name;
//obj.greeting = function(){
//  alert('Hi! ' + this.name + '! ');
//}
//return obj;
//}

//
class Person {
    constructor(firstname, lastname, age, gender, interests) {
        this.name = {
            first: firstname,
            last: lastname,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    // Método para obtener el nombre completo
    getName() {
        return `${this.name.first} ${this.name.last}`;
    }

    // Método para la biografía
    bio() {
        return `My name is ${this.getName()}, I'm ${this.age} years old, ${this.gender}, and I enjoy ${this.interests.join(', ')}.`;
    }

    // Método de saludo
    greeting() {
        alert(`Hello, ${this.name.first}!`);
    }
}

// Crear un objeto de la clase Person
var person1 = new Person('Valeria', 'Preciado', 21, 'male', ['skateboarding', 'reading', 'coding']);

// Probar los métodos
console.log(person1.bio()); 
person1.greeting();

class Professor extends Persona {
    teacher;

    constructor(first, last, teacher) {
        super(first, last, 35, 'female', ['math', 'pysics'] );
        this.teacher = teacher;
    }
    teachingBio() {
        return `${super.bio()} I'm a teacher, and my favorite subject is ${this.teacher}.`;
    }
}

var persona2 = new Professor('John', 'Doe', 'Physics');
