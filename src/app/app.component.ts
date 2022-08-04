import { Component, OnInit } from '@angular/core';
import { booklist } from 'src/Model/booklist';
import { BooklistService } from 'src/services/booklist.service';


@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstangularapp';
  myclass= 'test';
  books:booklist[] = [];
  bookitems : booklist = {
    id:'',
    name:'',
    author:'',
    category:'',
    price:''
  }

  constructor(private booklist : BooklistService){}

  ngOnInit(): void {
    //this.getallBooks();
  }

  getallBooks() {
    this.booklist.getAllBooks()
    .subscribe(response => {this.books = response})
  }

  


}
