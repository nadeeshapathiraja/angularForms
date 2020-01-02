import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './componets/form-one/form-one.component';
import { UserRoleComponent } from './user-role/user-role.component';


const routes: Routes = [
  {path: '', component: FormOneComponent},
  {path:'user', component: UserRoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
