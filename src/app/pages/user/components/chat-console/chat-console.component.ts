import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User, UserData } from '../../../auth/models/login-data.model';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MatDialog } from '@angular/material/dialog';
import { AvailableUser, AvailableUserResponse, chatData, ChatMessageResponse, ChatResponseModel, chatsModel } from '../../models/chat.models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat-console',
  templateUrl: './chat-console.component.html',
  styleUrl: './chat-console.component.css'
})
export class ChatConsoleComponent {
  showFiller = false;
  searchControl =  new FormControl('');
  userSubscription!:Subscription;
  chatListSubscription!: Subscription;
  fileInput: any;
  chats!:any;
  id:any;
  chatroom!: ChatResponseModel;
  message: string = '';
  files: FileList | null = null;
  chatRoomId!:string;
  reciever!:UserData[];
  privateChatMessages:chatData[] = [];

  constructor(  private _userService: UserService, 
    private _matDialog: MatDialog, private _route: ActivatedRoute,
    private _socketService: WebSocketService
  ){}

  ngOnInit(): void {
    this.userSubscription = this._userService.getAllUsers().subscribe((user:AvailableUserResponse)=>{
      console.log(user);
    })
    this.getChatList();
    this._route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
      if(this.id){
        this.getChatRoom();
      }  
    })
  }

getChatRoom(){
  if(this.id){
    this._socketService.joinPrivateRoom(this.id).subscribe((chatroom:ChatResponseModel)=>{
      console.log("chatroom",chatroom)
       this.reciever = chatroom.data.participants.filter((participant)=> chatroom.data.admin !== participant._id)
      this.chatRoomId = chatroom.data._id;
      this.getChatRoomMessages();
    })
  }
}

getChatRoomMessages(  ){
  this._userService.getPrivateChat(this.chatRoomId).subscribe((chatMessages:ChatMessageResponse)=>{
    console.log("chatMessages>>",chatMessages)
    this.privateChatMessages = chatMessages.data.reverse();
  })
}
  getChatList(){
    this.chatListSubscription = this._userService.getAllChats().subscribe((chats:chatsModel)=> {
      this.chats = chats;
      console.log(chats)
    })
  }

  handleSendMessage() {
    if (this.message.trim() || this.files) {
      const formData = new FormData();
      formData.append('content', this.message);
      console.log(this.message)
      this._socketService.sendPrivateMessage(this.chatRoomId,formData).subscribe((responseData)=>{
        console.log(responseData)
        if(responseData){
          this.message = '';
          this.files = null;
          this.getChatRoomMessages();
        }
      })
     
    }
  }

  handleFileInput(event: any) {
    this.files = event.target.files;
  }

  

  showContacts(){
    console.log("modal")
    this._matDialog.open(ContactListComponent, {
      width: '400px',
      })
  }

}
