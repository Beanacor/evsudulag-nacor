import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  Form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.Form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get username() {
    return this.Form.get('username');
  }

  get password() {
    return this.Form.get('password');
  }

  message = '';
  onSubmit() {

    this.userService.userLogin(this.Form.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/home/dashboard']);
          this.message = ''; 
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.message = 'Invalid username or password.';
        } else {
          this.message = 'Something went wrong. Please try again.';
        }
      }
    });

    // const { username, password } = this.Form.value;
    // if(this.UserService.validate(username, password)){
    //   this.router.navigate(['/home/detail'])
    // } else {
    //   console.log('error')
    // }
  }
}
