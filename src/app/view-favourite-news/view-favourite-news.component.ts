import { Component, OnInit,Input } from '@angular/core';
import { FavouriteService } from '../services/favourite.service';


@Component({
  selector: 'view-favourite-news',
  templateUrl: './view-favourite-news.component.html',
  styleUrls: ['./view-favourite-news.component.css']
})
export class ViewFavouriteNewsComponent implements OnInit {

  constructor(private favNews:FavouriteService) { }
 @Input() viewFav:any;
  ngOnInit() {
  }

  

  deleteFavourite(a:number){
    console.log("delete view");
      this.favNews.deleteObj(a);
      console.log("call get");
      this.favNews.getFavourite();
     }
     updateFavouriteNews(a:number,news:any){
       console.log("update component");
       this.favNews.update(a,news);


     }
}
