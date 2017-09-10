import { Component, OnInit } from '@angular/core';
import { FavNews} from '../FavNews'
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent implements OnInit {
  newsFav:any;

  constructor(private favNews:FavouriteService) { }

  ngOnInit() {
    this.getFavouriteNews();
  }
  getFavouriteNews(){
      this.favNews.getFavourite().subscribe(newsFav=>this.newsFav=newsFav);
     }

}
