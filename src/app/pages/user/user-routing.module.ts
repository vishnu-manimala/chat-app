import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatConsoleComponent } from './components/chat-console/chat-console.component';
import { userGuard } from '../../guards/user.guard';

const routes: Routes = [{
  path:'', 
  component:ChatConsoleComponent,
  canActivate:[userGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
