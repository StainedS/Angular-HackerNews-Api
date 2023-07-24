import { Component, Input, OnInit } from '@angular/core';

import { HackernewsApiService } from '../hackernews-api.service';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item : any;

  constructor() {}

  ngOnInit() {
   
  }
}
