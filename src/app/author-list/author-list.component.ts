import { Component, Input, OnInit,EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfoService } from '../shared/get-info.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authorsList;
  
  

  constructor(
    private getInfo: GetInfoService,
    private router: Router,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.authorsList=this.getInfo.authorsList
  }
  showBook(author){
    this.router.navigate([author.id,author.surname ,author.name],{relativeTo:this.activatedRoute})
  }
  addAuthor(surname,name,date){
    let newAuthor={
      id:this.authorsList.length+1,
      surname:surname.value,
      name:name.value,
      date: new Date(date.value).toLocaleDateString(),
      books:[]
    }
    
    this.authorsList.push(newAuthor)
  }
  removeAuthor(id){
    this.authorsList.forEach(element => {
      if(id.value==element.id){
       this.authorsList.splice(this.authorsList.indexOf(element),1)
      }
      
    });
  }
  redactAuthor(id,surname){
    this.authorsList.forEach(element => {
     if(id.value==element.id){
       element.surname=surname.value
     
     }
  })
  }
}
