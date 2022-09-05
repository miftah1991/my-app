export class User {
    name:string;
    gender:string;
    isMarried:boolean=false;
    isTCAccepted:boolean
    constructor(uname:string,gen:string,istc:boolean){
        this.name=uname;
        this.gender=gen;
        this.isTCAccepted=istc;
    }
}