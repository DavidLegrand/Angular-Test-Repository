import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddressComponent } from './components/user-profile/address/address.component';
import { ContactComponent } from './components/user-profile/contact/contact.component';
import { CompanyComponent } from './components/user-profile/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NewTaskComponent,
    TaskComponent,
    MenuComponent,
    UserProfileComponent,
    AddressComponent,
    ContactComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ToDoListComponent },
      {
        path: 'profile',
        component: UserProfileComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'address' },
          { path: 'address', component: AddressComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'company', component: CompanyComponent },
        ],
      },
      {
        path: 'profile/:id',
        component: UserProfileComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'address' },
          { path: 'address', component: AddressComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'company', component: CompanyComponent },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
