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

  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {
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

  onSubmit() {
    const { username, password } = this.Form.value;
    if(this.UserService.validate(username, password)){
      this.router.navigate(['/home/detail'])
    } else {
      console.log('error')
    }
  }
}
