import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  typeSub : any;
  pageSub : any;
  items: number[] = [];
  storiesType : any;
  pageNum !: number;
  listStart !: number;

  constructor(
    private _hackerNewsAPIServices : HackernewsApiService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(){
    this.typeSub = this.route.data.subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      
      this._hackerNewsAPIServices.fetchStories(this.storiesType,this.pageNum).subscribe(
                items => this.items = items,
                error => console.log('Error Fetching' + this.storiesType + 'stories'),
                () => this.listStart = ((this.pageNum - 1)* 30) + 1 );
  
              
    });
  }
}
