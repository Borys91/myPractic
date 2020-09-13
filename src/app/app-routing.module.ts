import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: "", component: AuthorListComponent },
  {path:":id/:name/:surname", component: BookComponent},
  { path: "**" , redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
