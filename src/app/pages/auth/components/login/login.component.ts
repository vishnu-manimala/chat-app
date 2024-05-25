import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginData, LoginResponse } from '../../models/login-data.model';

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
  constructor( private _authService: AuthService){}
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
    this.loginSubscription = this._authService.userLogin(data).subscribe((response:LoginResponse)=>{
      if(response.success){
        localStorage.setItem('accessToken',response.data.accessToken);
        localStorage.setItem('refreshToken',response.data.refreshToken);
        localStorage.setItem('role', response.data.user.role);
        localStorage.setItem('username', response.data.user.username);
      }
    })
  }


}
