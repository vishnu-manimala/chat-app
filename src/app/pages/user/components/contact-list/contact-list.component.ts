import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../../auth/models/login-data.model';
import { AvailableUser, AvailableUserResponse } from '../../models/chat.models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  users:AvailableUser[] = [];
  contact:string = "";
  userSubscription!:Subscription;
  constructor(private _matDialog: MatDialog, private _router: Router, private _userService: UserService){}

  ngOnInit(): void {
    this.userSubscription = this._userService.getAllUsers().subscribe((user:AvailableUserResponse)=>{
      console.log("conatct list",);
      this.users = user.data;
    })
    
  }
  selectUser(user:any){
    console.log(user);
    this._matDialog.closeAll()
    this._router.navigate(['/user'],{ queryParams: { id: user } })
  }
}
