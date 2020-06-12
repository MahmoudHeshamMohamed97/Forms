import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './app/components/sign-up/sign-up.component';
import { SignInComponent } from './app/components/sign-in/sign-in.component';
import { ProfileComponent } from './app/components/profile/profile.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

//This is my case 
const routes: Routes = [
    { path: "", redirectTo: "sign-in", pathMatch: "full" },
    { path: "sign-up", component: SignUpComponent },
    { path: "sign-in", component: SignInComponent },
    { path: "profile", component: ProfileComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
