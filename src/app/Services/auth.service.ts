import { HttpClient } from '@angular/common/http';
import { MapType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { usuario } from '../models/usuario.model';
import {map} from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//
  constructor(private http:HttpClient) { }
  idUser:number;

  logout(){

  }

  login(usuario:usuario){
    const authData={
      email:usuario.email,
      pass:usuario.pass,
    }

return this.http.post("http://127.0.0.1:8080/Login",authData).pipe(map(resp=>{
this.guardarid(resp['id']);
return resp;
}));

  }
  registrarUser(usuario:usuario){
    const authData={
      email:usuario.email,
      pass:usuario.pass,
      nombre:usuario.Nombre
    }

return this.http.post("http://127.0.0.1:8080/Registrar",authData)

  }
private guardarid(id:number){
  this.idUser=id;
  localStorage.setItem("id",""+id);
}

leerID(){
if(localStorage.getItem("id")){
  this.idUser=parseInt(localStorage.getItem("id"));
}else{
}
}

autentificado(): boolean{
return this.idUser!=null;
}

}
