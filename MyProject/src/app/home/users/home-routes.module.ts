import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { DetailComponent } from './pages/detail/detail.component';

const homeroutes: Routes = [
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes)
  ]
})
export class HomeRoutesModule { }
