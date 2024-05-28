import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User, UserData } from '../../../auth/models/login-data.model';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MatDialog } from '@angular/material/dialog';
import { AvailableUser, AvailableUserResponse, chatData, ChatMessage, ChatMessageResponse, ChatResponseModel, chatsModel } from '../../models/chat.models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';
import { SocketService } from '../../../../core/services/socket.service';
import { UserDetails } from '../../../auth/models/login.model';

@Component({
  selector: 'app-chat-console',
  templateUrl: './chat-console.component.html',
  styleUrl: './chat-console.component.css'
})
export class ChatConsoleComponent {
  searchControl = new FormControl('');
  userSubscription!: Subscription;
  chatListSubscription!: Subscription;
  fileInput: any;
  chats!: chatsModel;
  id: any;
  recieverName:any;
  chatroom!: ChatResponseModel;
  message: string = '';
  files: FileList | null = null;
  chatRoomId!: string;
  reciever!: UserData[];
  privateChatMessages: chatData[] = [];
  messageArray: ChatMessage[] = [];
  messageStore: ChatMessage[] = [];
  isTyping = false;
  userID:string | null = "";
  name:string| null = "";
  userData!: UserDetails;


  constructor(private _userService: UserService,
    private _matDialog: MatDialog, private _route: ActivatedRoute,
    private _socketService: SocketService
  ) { 
     this.userID = localStorage.getItem('userId');
     this.name = localStorage.getItem('username');
    
  }

  ngOnInit(): void {
    //this.getChatList();
    this._socketService.newMessageReceived().subscribe((data:ChatMessage) => {
      console.log(typeof(this.privateChatMessages))
      this.messageArray.push(data);
    
      console.log("chatl", this.messageArray)
      this.isTyping = false;
    });
    this._socketService.receivedTyping().subscribe((bool: { isTyping: boolean }) => {
      this.isTyping = bool.isTyping;
    });
    this.getQueryParams()
   
    if (this.name  && this.name < this.recieverName) {
      this.chatRoomId = this.name.concat(this.recieverName);
    } else  {
      this.chatRoomId = this.recieverName.concat(this.name);
    }
    console.log("chatroom name",this.chatRoomId);
    this.getChatRoom();
    this._userService.getChatRoomsChat(this.chatRoomId).subscribe((messages: ChatMessage[]) => {
      this.messageArray = messages;
      console.log("chatrromschat",this.messageArray)
    });
  }

  getQueryParams(){
    this._route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.recieverName = params.get('name');
      console.log( "userData", this.recieverName)
    })
  }

  getChatRoom() {
      console.log(this.name, this.chatRoomId)
      this._socketService.joinRoom({ user: this.name, room: this.chatRoomId });
      
    }
  

  getChatRoomMessages() {
    this._userService.getPrivateChat(this.chatRoomId).subscribe((chatMessages: ChatMessageResponse) => {
      console.log("chatMessages>>", chatMessages)
      this.privateChatMessages = chatMessages.data.reverse();
    })
  }

  getChatList() {
   
  }

  handleSendMessage() {
        this._socketService.sendMessage({room: this.chatRoomId, user: this.name, message: this.message});
        this.message = '';
        console.log("message array",this.messageArray)
      }

    
  

  handleFileInput(event: any) {
    this.files = event.target.files;
  }



  showContacts() {
    console.log("modal")
    this._matDialog.open(ContactListComponent, {
      width: '400px',
    })
  }

}
