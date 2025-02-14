import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.Form.get('email');
  }

  get password() {
    return this.Form.get('password');
  }

  onSubmit() {
    if (this.Form.valid) {
      console.log('Form Submitted', this.Form.value);
    }
  }
}
