import { Component,Output,EventEmitter } from '@angular/core';
import {NewsService } from '../services/services.component'

@Component({
  selector: 'search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})

export class SearchNewsComponent  {
  newsJson:any;
  
  handleJson(json){
    this.newsJson=json;
    console.log("hellllll-----");
      console.log("app json",this.newsJson);
  
  }
}


