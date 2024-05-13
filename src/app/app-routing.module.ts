import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ProfilComponent} from "./profil/profil.component";
import {ConsulterComponent} from "./consulter/consulter.component";
import {PostulerComponent} from "./postuler/postuler.component";

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "signin", component : SigninComponent},
  {path : "signup", component : SignupComponent},
  {path : "profil", component : ProfilComponent},
  {path : "consulter", component : ConsulterComponent},
  {path : "postuler", component : PostulerComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
