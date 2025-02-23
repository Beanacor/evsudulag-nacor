import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeMaterialModule } from './home-material.module';
import { HomeRoutesModule } from './home-routes.module';
import { DetailComponent } from './pages/detail/detail.component';



@NgModule({
  declarations: [LoginpageComponent, DetailComponent],
  imports: [
    CommonModule,
    HomeRoutesModule,
    HomeMaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
