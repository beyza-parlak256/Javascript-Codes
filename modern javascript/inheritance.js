class Machine{
    constructor(id, name){
        this.id = id;
        this.name = name;
    };
    get machineID(){
        return this.id;
    }
    set machineID(x){
        this.machineID = x;
    }
    get machineName(){
        return this.name;
    }
    set machineName(y){
        this.machineName = y;
    }
}
const myMachine1 = new Machine("100050","My Robot");

console.log(myMachine1.id);
console.log(myMachine1.name);