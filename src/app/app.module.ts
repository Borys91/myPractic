import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    BookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
