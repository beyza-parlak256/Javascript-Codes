class Person{
    constructor(id, name, birthYear,language){
        this.id = id;
        this.name = name;
        this.birthYear = birthYear
        this.language = language;
    };
    get ID(){
        return this.id;
    }
    get Language(){
        return this.language;
    }
    set Name(name){
        return this.name = name.toLowerCase();
    }
}

Person.Language = "Turkish";
Person.ID = 100536;
Person.Name = "Beyza Parlak";
console.log("ID : "+ Person.ID + " - Name : " + Person.Name + " - Language : " + Person.Language);