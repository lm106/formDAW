import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { User } from '../user.model';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  users:User[]=[];

  message:string='';
  form:boolean=true;
  datos:boolean=false;
  show=false;
  /* ---------Validación--------------- */
  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeat_pass: new FormControl('', [Validators.required]),
  });

  constructor(private myServicio:MyServiceService) { }
  ngOnInit(): void {
    this.users=this.myServicio.users;
  }
  /* ---------Mostrar usuarios---------*/
  setShow(){
    this.datos=true;
    this.form=false;
  }
  /* ---------Mostrar formulario---------*/
  setForm(){
    this.datos=false;
    this.form=true;
  }
  setAddUser(name:string, name_last:string, email:string, pass:string, repeat_pass:string, event:Event){
    event.preventDefault();
    this.reset();
    if(this.formulario.valid && this.validate(pass,repeat_pass)){
      let user = new User (name, name_last, email, pass, '');
      this.myServicio.addUser(user);
      this.message = "¡Has registrado un usuario!";
      this.form=false;
      this.datos=true;
    } else {      
      this.message = "Hay datos inválidos";
    }
    console.log(this.users);
  }
  private reset(){
    this.message='';
    this.form=true;
  }
  validate(pass:string, repeat_pass:string){
    return (pass.localeCompare(repeat_pass)===0)? true: false;
  }
  
}
