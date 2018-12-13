import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    data: { title: 'People List' }
  },
  {
    path: 'personajes',
    component: PeopleComponent,
    data: { title: 'People List' }
  },
  {
    path: 'person-details/:url',
    component: PersonDetailsComponent,
    data: { title: 'Person Details' }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
