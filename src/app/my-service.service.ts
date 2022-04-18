import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  users:User[]=[
    new User("Pepe", "Santana", "pep@gmail.com", "1", ""),
    new User("Laura", "Quevedo", "quevedol@outlook.es", "2", ""),
    new User("Diego", "Vera", "pUp@gmail.com", "3", ""),
  ];
  
  addProfession(profession:string, id:number){
    this.users[id].profession=profession;
  }
  addUser(user:User){
    this.users.push(user);
  }
  setUser(id:number, name:string, name_last:string, email:string){
    if(this.users[id].name===name && this.users[id].name_last===name_last && this.users[id].email===email) return false;
    this.users[id].name=name;
    this.users[id].name_last=name_last;
    this.users[id].email=email;
    return true;
    
  }
  deleteUser(id:number){    
    this.users.splice(id,1);
    
  }
  deleteProfession(id:number){
    if (this.users[id].profession !== ''){
      this.users[id].profession='';
      return true;
    }else{
      return false;
    }

  }
  
}
