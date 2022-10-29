import { Component } from '@angular/core';
import { FreeapiService } from './freeapi.service';
import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private freeapiService:FreeapiService){}
  title = 'Calling external API in Angular 14 : PUT,PATCH,DELETE - https://jsonplaceholder.typicode.com/posts';
  putPost: Posts = new Posts;
  patchPost:Posts=new Posts;
  message!:string;

  ngOnInit(){

    let putPost1=new Posts();
    putPost1.id=1001;
    putPost1.title='Angular api consumption';
    putPost1.body='PUT method geting implementation'
    putPost1.userId=1
    this.freeapiService.putPost(putPost1).subscribe(data=>this.putPost=data);

    let patchPost1=new Posts();
    patchPost1.body='Patch method implemeted'
    this.freeapiService.patchPost(patchPost1).subscribe(data=>this.patchPost=data);

    //Delete

    this.freeapiService.deletePostById().subscribe(data=>this.message='Resource with Id-1 Delete Successfully')
  }

}
