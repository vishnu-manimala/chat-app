import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatviewComponent } from './component/chatview/chatview.component';

const routes: Routes = [
  {
    path:'', component: ChatviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
