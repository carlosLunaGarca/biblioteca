
import { RouterModule,Routes} from "@angular/router";
import { LibrosAdminComponent } from "./components/libros-admin/libros-admin.component";
import { LibrosUserComponent } from "./components/libros-user/libros-user.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { AuthGuard } from "./guards/auth.guard";


const  APP_ROUTES:Routes=[
{path: 'login',component: LoginComponent},
{path: 'registro',component: RegistroComponent},
{path: 'LibrosU',component: LibrosUserComponent,canActivate:[AuthGuard]},
{path: 'LibrosA',component: LibrosAdminComponent,canActivate:[AuthGuard]},
{path: '**',pathMatch:'full',redirectTo:'login'}


]

export const app_routing=RouterModule.forRoot(APP_ROUTES);