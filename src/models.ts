export class Pets {
    id: string;
    name : string;
    species : string;
    carry : string;
    weight : number;
    date_of_birth : string;

    constructor(id: string, name: string, species: string, carry: string, weight: number, date_of_birth: string) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.carry = carry;
        this.weight = weight;
        this.date_of_birth = date_of_birth;
    }
}

export class Tutors{
    id: string;
    name : string;
    phone : string;
    email : string;
    date_of_birth : string;
    zipCode : string;
    pets : Pets[];

    constructor(id : string, name: string, phone: string, email: string, date_of_birth: string, zipCode: string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.zipCode = zipCode;
        this.pets = [];
    }
}
