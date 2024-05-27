import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  baseUrl = 'https://api.freeapi.app/api/v1/chat-app/chats';
  constructor(private _http: HttpClient) { }
  private socket = io(this.baseUrl)

  joinPrivateRoom(data: { user: any; room: any; }) {
    console.log("room",data);
    
    // this.socket.emit('join', data);
  }
  sendPrivateMessage(data: any) {
    this.socket.emit('message', data);
  }
}
