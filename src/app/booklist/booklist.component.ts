import { Component, OnInit } from '@angular/core';
import { booklist } from 'src/Model/booklist';
import { BooklistService } from 'src/services/booklist.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


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
    this.booklist.getAllBooks()
    .subscribe(response => {this.books = response;})
  } 

}
