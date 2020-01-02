import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './componets/form-one/form-one.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ProfileComponent } from './profile/profile.component';
import { FormControl } from '@angular/forms';
import { FormGroup }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    UserRoleComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
