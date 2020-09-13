import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  authorsList = [
    {
      "id": 1,
      "surname": "Пушкин",
      "name": "Александр",
      "middleName": "Сергеевич",
      "date": new Date(1799 ,4 ,26).toLocaleDateString(),
      "books": [
        { name: "книга1", numberOfPages: 100, genre: "Деловая литература" },
        { name: "книга2", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { name: "книга3", numberOfPages: 130, genre: "Искусство" },
        { name: "книга4", numberOfPages: 140, genre: "Компьютеры и Интернет" }
        ]
    },
    {
      "id": 2,
      "surname": "Лермонтов",
      "name": "Михаил",
      "middleName": "Юрьевич",
      "date": new Date (1814 ,10 ,15).toLocaleDateString(),
      "books": [
        { name: "книга4", numberOfPages: 100, genre: "Деловая литература" },
        { name: "книга6", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { name: "книга7", numberOfPages: 130, genre: "Искусство" },
        { name: "книга8", numberOfPages: 140, genre: "Компьютеры и Интернет" }
        ]
    }
  ]
    constructor() { }

    getBook(id){
     return this.authorsList.find(elem=>{
      if(id==elem.id){
        
        return elem
      }
       
     }).books
    }
    getId(id){
      return this.authorsList.find(elem=>{
       if(id==elem.id){
         
         return elem
       }
        
      }).id
     }
}
