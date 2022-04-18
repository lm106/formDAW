export class User {
    name='';
    name_last='';
    email='';
    pass='';
    profession='';
    constructor(name:string, name_last:string, email:string, pass:string, profession:string){
        this.name=name;
        this.name_last=name_last;
        this.email=email;
        this.pass=pass;
        if(profession !=''){
            this.profession=profession;
        }
        
    }
}