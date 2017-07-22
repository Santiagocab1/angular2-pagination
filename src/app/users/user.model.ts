export class User {

    public name: string;
    public email: string;
    public regDate: string;
    public city: string;
    public age: number;

    constructor( name:string, email:string, regDate:string, city:string, age:number ) {
    	this.name = name;
    	this.email = email;
    	this.regDate = regDate;
    	this.city = city;
    	this.age = age;
    }
	
}