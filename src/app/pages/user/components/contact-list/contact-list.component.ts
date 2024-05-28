import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../../auth/models/login-data.model';
import { AvailableUser, AvailableUserResponse, ChatMessage } from '../../models/chat.models';
import { AllUsers, UserDetails } from '../../../auth/models/login.model';
import { SocketService } from '../../../../core/services/socket.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  users:AvailableUser[] = [];
  contact:string = "";
  userSubscription!:Subscription;
  userdata!:UserDetails[] ;
 
  
  constructor(private _matDialog: MatDialog, private _router: Router, private _userService: UserService,){
   
  }

  ngOnInit(): void {
    // this.userSubscription = this._userService.getAllUsers().subscribe((user:AvailableUserResponse)=>{
    //   console.log("conatct list",);
    //   this.users = user.data;
    // })

    this._userService.allUsers().subscribe((user: AllUsers)=>{
     this.userdata = user.data;
     console.log("conatct list",this.userdata);
    })
    
  }
  selectUser(user:UserDetails){
    console.log(user);
    this._matDialog.closeAll()
    this._router.navigate(['/user'],{ queryParams: { id: user._id, name:user.name } })
  }
}
