import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user:User;
  @Input() id:number;
  confirm:boolean=true;
  message:string='';
  constructor(private myServicio:MyServiceService) { }

  ngOnInit(): void {
  }
  addProfession(profession:string, id:number){
    // let i= parseInt(id);
    console.log('dentro de profesion');
    this.myServicio.addProfession(profession, id);
    this.confirm=false;
    this.message='¡Profesión añadida!';
  }
  // setUser(id:number, name:string, name_last:string, email:string){
  //   this.users[id].name=name;
  //   this.users[id].name_last=name_last;
  //   this.users[id].email=email;
  //  }
  setUser(id:number, name:string, name_last:string, email:string){
    if(this.myServicio.setUser(id, name, name_last, email)) {
      this.message='¡Usuario modificado!';
    } else{
      this.message='¡No se ha modificado el usuario!';
    }
    this.confirm=false;  
  }
   deleteUser(id:number){
     console.log(id + 'del metodo');
     this.myServicio.deleteUser(id);
    
   }
   deleteProfession(id:number){
    if(this.myServicio.deleteProfession(id)===true){
      this.message='¡Profesión eliminada!';
    }else{
      this.message='¡Profesión vacía no se puede eliminar!';
    }
    this.confirm=false;
   }
 
}

