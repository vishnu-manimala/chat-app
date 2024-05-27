import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ChatConsoleComponent } from './components/chat-console/chat-console.component';
import { MaterialModule } from '../../shared/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewGroupComponent } from './components/new-group/new-group.component';


@NgModule({
  declarations: [
    ChatConsoleComponent,
    ContactListComponent,
    NewGroupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
