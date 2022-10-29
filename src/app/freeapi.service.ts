import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }

  putPost(post:Posts){
    const url='https://jsonplaceholder.typicode.com/posts/5';
    return this.http.put<Posts>(url,post)
  }

  patchPost(post:Posts){
    const url='https://jsonplaceholder.typicode.com/posts/5';
    return this.http.patch<Posts>(url,post)

  }

  deletePostById(){
    const url='https://jsonplaceholder.typicode.com/posts/1';
    return this.http.delete(url);
  }
}
