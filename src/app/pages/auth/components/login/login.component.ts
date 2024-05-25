import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imgPath: string = '/assets/food-4511335_1920.jpg';
  url: string = '';
  showErrorMessage!: Observable<string>;
  hide = true;

  loginForm!: FormGroup;

  ngOnInit(): void {
   
 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  handleLogin(response: any) {
  
  }

  onLoginUser() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  }


}
