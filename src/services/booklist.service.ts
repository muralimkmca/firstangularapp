import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { booklist } from 'src/Model/booklist';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  baseUrl = 'http://localhost:5110/api/v1.0/books/';

  constructor(private http : HttpClient) { }


  // Get books
  getAllBooks() : Observable<booklist[]> {    
    return this.http.get<booklist[]>(this.baseUrl);
  }

  //Add Books
  addBooks(blist:booklist):Observable<booklist>{
    return this.http.post<booklist>(this.baseUrl,blist);
  }

}
