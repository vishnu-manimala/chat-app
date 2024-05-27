import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../../auth/models/login-data.model';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-console',
  templateUrl: './chat-console.component.html',
  styleUrl: './chat-console.component.css'
})
export class ChatConsoleComponent {
  showFiller = false;
  searchControl =  new FormControl('');
  userSubscription!:Subscription;
  fileInput: any;

  constructor(  private _userService: UserService, private _matDialog: MatDialog,){}

  ngOnInit(): void {
    this.userSubscription = this._userService.getAllUsers().subscribe((user:User[])=>{
      console.log(user);
    })
    
  }
  // @Input() sendMessage!: (message: string, files: FileList | null) => void; // Function to send message
  // message: string = '';
  // files: FileList | null = null;

  // handleSendMessage() {
  //   if (this.message.trim() || this.files) {
  //     this.sendMessage(this.message, this.files);
  //     this.message = '';
  //     this.files = null;
  //   }
  // }

  // handleFileInput(event: any) {
  //   this.files = event.target.files;
  // }
 

  // triggerFileInput() {
  //   this.fileInput.nativeElement.click();
  // }

  // handleImageSelection(event: any) {
  //   const selectedFile = event.target.files[0];
  //   console.log('Selected image:', selectedFile);
  // }

  @Input() sendMessage!: (message: string, files: FileList | null) => void; // Function to send message
  message: string = '';
  files: FileList | null = null;
  showUploadOptions: boolean = false;

  handleSendMessage() {
    if (this.message.trim() || this.files) {
      this.sendMessage(this.message, this.files);
      this.message = '';
      this.files = null;
      this.showUploadOptions = false;
    }
  }

  handleFileInput(event: any) {
    this.files = event.target.files;
  }

  toggleUploadOptions() {
    console.log(this.showUploadOptions)
    this.showUploadOptions = !this.showUploadOptions;
  }

  showContacts(){
    console.log("modal")
    this._matDialog.open(ContactListComponent, {
      width: '450px',
      })
  }

}
