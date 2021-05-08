import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:usuario;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.usuario= new usuario();
  }
 onsubmit(form:NgForm){
 this.auth.login(this.usuario).subscribe( resp=>{
console.log(resp);

 });
 }
}
