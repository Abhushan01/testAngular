import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  markdown: string='' ;
  constructor(private mdService: MarkdownService, private http: HttpClient) { }

  async ngOnInit() {
    const markdownRaw = String(await this.http.get('/assets/html.md', 
      { responseType: 'text' }).toPromise());   
    this.markdown = this.mdService.parse(markdownRaw);
  }
}
