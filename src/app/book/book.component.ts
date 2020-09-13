import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfoService } from '../shared/get-info.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  booksList;
  constructor(
    private getInfo: GetInfoService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.forEach(param => {
      // console.log( this.getInfo.getBook(param.id))
      this.booksList = this.getInfo.getBook(param.id)

    })
  }
  goBack(){
    this.router.navigate(["../"],{relativeTo:this.activatedRoute})
  }
  addBook(book){
    let newBook={
      name:book.value,
    }
    this.booksList.push(newBook)
  }
  redactBook(name,bookName1){
    this.booksList.forEach(element => {
      if(name.value==element.name){
        element.name=bookName1.value
      }
    });
  }
}
