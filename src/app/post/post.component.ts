import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  markdown: string='' ;
  constructor(private mdService: MarkdownService, private http: HttpClient,private _Activatedroute:ActivatedRoute) { 
}
  post_id:any;

 ngOnInit() {
  this._Activatedroute.paramMap.subscribe(paramMap => { 
    this.post_id = paramMap.get('id'); 
    let markdownRaw=''
    this.http.get(`assets/post-${this.post_id}.md`, 
      { responseType: 'text' }).subscribe((val)=>{
        markdownRaw=val
        this.markdown = this.mdService.parse(markdownRaw);
      });   
});
  }


}
