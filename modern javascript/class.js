class Person{
    constructor(id, name, job, birthYear){
        this.id = id;
        this.name = name;
        this.job = job;
        this.birthYear = birthYear;
        console.log("new object...");
    };
    ageCalculate(birthYear){
        let date = new Date().getFullYear();
        return date - this.birthYear;
    }
    information(id,name){
        return this.id + " - " + this.name;
    }
}

let person1 = new Person("1098","Beyza Parlak","Computer Engineer",2000);
let person2 = new Person("1101","Aslı Gültekin","Psychologist",2001);

console.log(person1.information()+" -  "+person1.ageCalculate());
console.log(person2.information()+" -  "+person2.ageCalculate());