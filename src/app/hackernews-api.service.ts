import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  baseURL: string;

  constructor(private http:HttpClient) {
    this.baseURL ='https://api.hackerwebapp.com';
   }

  fetchStories(storyType : string , page : number): Observable<any> {
    return this.http.get(`${this.baseURL}/${storyType}?page=${page}`)

  }
  
  fetchComments(id : number): Observable<any> {
    return this.http.get(`${this.baseURL}/item/${id}`)
  }

}
