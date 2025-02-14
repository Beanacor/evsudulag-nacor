import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutesModule } from './home-routes.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeMaterialModule } from './home-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule,
    HomeRoutesModule,
    HomeMaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
