import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RegistrationResponse } from '../../models/registration-data.model';

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
  registerSubscription!: Subscription;
  registerForm!: FormGroup;
  email: string = '';

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

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
    });
  }

  public whiteSpaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { whitespace: true };
  }

  onRegisteruser() {
    if (this.registerForm.valid && this.passwordMatch()) {
      const userData = {
                          "email": this.registerForm.get('email')?.value,
                          "password": this.registerForm.get('password')?.value,
                          // 
                          "phone":this.registerForm.get('phoneNumber')?.value,
                          "name": this.registerForm.get('userName')?.value
                        }
      console.log(this.registerForm.value);
      this.registerSubscription = this.authService.register(userData).subscribe((response) => {
        console.log(response);
        if(response){
          this.router.navigate(['/']);
        }
      })
    } else {
      console.log("error")
    }
  }

  passwordMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

  ngOnDestroy(): void {
    if (this.registerSubscription) {
      this.registerSubscription.unsubscribe();
    }
  }
}
