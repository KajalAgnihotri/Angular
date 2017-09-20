import { Component, OnInit,Input } from '@angular/core';
import { FavouriteService } from '../services/favourite.service';


@Component({
  selector: 'view-favourite-news',
  templateUrl: './view-favourite-news.component.html',
  styleUrls: ['./view-favourite-news.component.css']
})
export class ViewFavouriteNewsComponent implements OnInit {

  constructor(private favNews:FavouriteService) { }
 @Input() viewFav:Array<any>;

  ngOnInit() {
   }
  

  

  // deleteFavourite(a:number){
  //   console.log("delete view");
  //     this.favNews.deleteObj(a);
  //     console.log("call get");
    
      
  //     var ele = this.viewFav.find(f=>f.id==a);
  //     const index= this.viewFav.indexOf(ele);
  //     this.viewFav.splice(index,1);
  //    }
  //    updateFavouriteNews(news:any,values:string){
  //      news.comment=values;
  //      console.log("update component");
  //      this.favNews.update(news);


     }

