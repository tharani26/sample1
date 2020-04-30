export class User {
    id:number;
    email:string;
    //Both the password are in a single object
    password:{
        pwd:string;
        confirmPwd:string;
    };
    gender:string;
    terms:boolean;

    constructor(values: Object ={}) {
        //constructor initialization
        Object.assign(this,values);
    }
}

