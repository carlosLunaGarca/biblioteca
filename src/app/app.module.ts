import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
//rutas

import { app_routing } from './app.routes';

//servicios

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LibrosUserComponent } from './components/libros-user/libros-user.component';
import { LibrosAdminComponent } from './components/libros-admin/libros-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LibrosUserComponent,
    LibrosAdminComponent,
    RegistroComponent
  ],
  imports: [
    app_routing,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
