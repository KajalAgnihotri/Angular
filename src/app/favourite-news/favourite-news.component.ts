import { Component, OnInit ,Input} from '@angular/core';
import {FavNews} from '../FavNews'
import { FavouriteService } from '../services/favourite.service';
import { SearchListComponent } from '../search-list/search-list.component';

@Component({
  selector: 'app-favourite-news',
  templateUrl: './favourite-news.component.html',
  styleUrls: ['./favourite-news.component.css']
})
export class FavouriteNewsComponent implements OnInit {

  @Input()  details:any ;
  newsFav:any={};
  data2:any=[];
  constructor(private favNews:FavouriteService) { }

  ngOnInit() {
    
  }
  
  // deleteFavourite(a:string){
  //   this.favNews.deleteObj(a);
  // }
  addFavourite(fav:FavNews){
    console.log("hi");
    this.favNews.postFavourite(fav);
  }

}
