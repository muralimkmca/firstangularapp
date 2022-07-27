import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { booklist } from 'src/Model/booklist';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  baseUrl = 'http://localhost:5110/api/books/';

  constructor(private http : HttpClient) { }

  getAllBooks() : Observable<booklist[]> {    
    return this.http.get<booklist[]>(this.baseUrl);
  }
}
