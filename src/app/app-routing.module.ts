import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthModule } from './pages/auth/auth.module';
import { ChatComponent } from './layout/chat/chat.component';

const routes: Routes = [
  {  
    path:'', component:HomeComponent 
  },

  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: ()=> import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },

  {
    path: 'chat',
    component: ChatComponent,
    loadChildren: ()=> import('./pages/chat/chat.module').then((m) => m.ChatModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
