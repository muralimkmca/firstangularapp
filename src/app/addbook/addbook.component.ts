import { Component, OnInit } from '@angular/core';
import { booklist } from 'src/Model/booklist';
import { BooklistService } from 'src/services/booklist.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent  {

  constructor(private booklist : BooklistService){}

  books:booklist[] = [];
  bookitems : booklist = {
    id:'',
    name:'',
    author:'',
    category:'',
    price:''
  }

  ngOnInit(): void {
  }
  
  onSubmit(data:any){
    if(this.bookitems.id ===''){
      this.booklist.addBooks(data)
      .subscribe( (result)=> {console.warn("result",result)})      
    }
  }

}
