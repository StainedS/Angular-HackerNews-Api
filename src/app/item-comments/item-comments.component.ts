import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';
@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit{

  sub : any;
  item : any;

  constructor(
    private _hackerNewsAPIServices : HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
      this.sub = this.route.params.subscribe( params => {
        let itemID = +params['id'];
        this._hackerNewsAPIServices.fetchComments(itemID).subscribe(data => {
          this.item = data;
        },error => console.log('Could not load item' + itemID));
      });
  }
}
