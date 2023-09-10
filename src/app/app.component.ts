import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testproject';
  constructor(private httpClient:HttpClient){
  }

  postInfo:any;
  ngOnInit(){
    this.httpClient.get('assets/posts_path.json').subscribe((res:any)=>{
      this.postInfo=res
      console.log(res)
    })
  }

  navigate(event:any){
    console.log(event)
  }
}
