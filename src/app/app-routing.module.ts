import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes = [
  { path: '', component: ToDoListComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'profile/:id', component: UserProfileComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
