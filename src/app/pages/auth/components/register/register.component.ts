import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const phonePattern = /^\d{10}$/;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  imgPath: string = '/assets/tablecloth-3336687_1920.jpg';
  otpField: boolean = false;
  showErrorMessage!: Observable<string>;

  registerForm!: FormGroup;
  email: string = '';
  constructor(private router: Router,
    private fb: FormBuilder,){}
  ngOnInit(): void {

    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, this.whiteSpaceValidator]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(phonePattern)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.whiteSpaceValidator]],
      confirmPassword: ['', [Validators.required, this.whiteSpaceValidator]],
      otp: [''],
    });
  }

  public whiteSpaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { whitespace: true };
  }

  onRegisteruser() {
    if (!this.otpField) {
      if (this.registerForm.valid && this.passwordMatch()) {
       console.log("register")
      } else {
        console.log("error")
      }
    } else {
      this.onVerify(this.email);
    }
  }

  onVerify(email: string) {
    const otp = this.registerForm.get('otp')?.value;

    if (otp && email) {
    
    }
  }

  passwordMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }
}
