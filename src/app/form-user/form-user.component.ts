import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  users=[
    {
      "name":'Pepe',
      "name_last":'Santana',
      "email":'pepe@gmail.com',
      "pass":'1'
    },
    {
      "name":'Laura',
      "name_last":'Quevedo',
      "email":'quevedol@outlook.es',
      "pass":'2'
    }
  ];

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

  constructor() { }

  ngOnInit(): void {
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
  setUser(id:number, name:string, name_last:string, email:string){
   this.users[id].name=name;
   this.users[id].name_last=name_last;
   this.users[id].email=email;
  }
  setDelete(id:number){
    this.users=(id>0)?this.users.splice(id -1, 1): this.users.splice(id+1,1);
  }

  setAddUser(name:string, name_last:string, email:string, pass:string, repeat_pass:string, event:Event){
    event.preventDefault();
    this.reset();
    if(this.formulario.valid && this.validate(pass,repeat_pass)){
      this.users.push({ name: name, name_last: name_last, email:email, pass:pass});
      this.message = "¡Has registrado un usuario!";
      this.form=false;
      this.datos=true;
    } else {      
      this.message = "Hay datos inválidos";
    }
  }
  private reset(){
    this.message='';
    this.form=true;
  }
  validate(pass:string, repeat_pass:string){
    return (pass.localeCompare(repeat_pass)===0)? true: false;
  }

}
