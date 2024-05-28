import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginData, LoginResponse } from '../../models/login-data.model';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';

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
  loginSubscription!: Subscription;
  constructor( private _authService: AuthService, private _router: Router){}
  ngOnInit(): void {
   
 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  handleLogin(response: any) {
  
  }

  onLoginUser() {
    const data: LoginData = {
        username:this.loginForm.value.email,
        password:this.loginForm.value.password
    }
    console.log(data);
    this.loginSubscription = this._authService.login(data).subscribe((response: Login)=>{ 
      console.log(response.status)
      if(response.status === 'Success'){
        localStorage.setItem('accessToken',response.token);
        localStorage.setItem('refreshToken',response.refresh_token);
        localStorage.setItem('userId',JSON.stringify(response.data._id));
        localStorage.setItem('username',JSON.stringify(response.data.name));
        localStorage.setItem('role',response.data.isAdmin?'ADMIN':'USER');
        this._router.navigate(['/user']);
      }
    })
  }


}
