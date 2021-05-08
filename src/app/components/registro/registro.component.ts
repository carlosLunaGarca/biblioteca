import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
usuario:usuario;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.usuario= new usuario();
  }
 onsubmit(form:NgForm){
 this.auth.registrarUser(this.usuario).subscribe( resp=>{
console.log(resp);

 });
 }
}
