import { Component, OnInit } from '@angular/core';
import { FavNews} from '../FavNews'
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent implements OnInit {
  newsFav:Array<any>;

  constructor(private favNews:FavouriteService) { }

  ngOnInit() {
    this.getFavouriteNews();
  }
  getFavouriteNews(){
      this.favNews.getFavourite().subscribe(newsFav=>this.newsFav=newsFav);
     }
     deleteFavourite(a:number){
      console.log("delete view");
        this.favNews.deleteObj(a);
        console.log("call get");
      
        
        var ele = this.newsFav.find(f=>f.id==a);
        const index= this.newsFav.indexOf(ele);
        this.newsFav.splice(index,1);
       }
       updateFavouriteNews(news:any,values:string){
         news.comment=values;
         console.log("update component");
         this.favNews.update(news);
     

}
}
