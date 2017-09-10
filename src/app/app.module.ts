import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent }  from './app.component';



import { AppRoutingModule} from './app-routing.module';
import { SearchNewsComponent } from './search-news/search-news.component';
import { NewsService } from './services/services.component'
import { FavouriteService } from './services/favourite.service';
import { FavouriteNewsComponent } from './favourite-news/favourite-news.component';
import { SearchListComponent } from './search-list/search-list.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { ViewFavouriteNewsComponent } from './view-favourite-news/view-favourite-news.component';
import { NewsComponent } from './news/news.component'



@NgModule({
  declarations: [
    AppComponent,
    SearchNewsComponent,
  FavouriteNewsComponent,
   SearchListComponent,
   MyFavouriteComponent,
   ViewFavouriteNewsComponent,
   NewsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [NewsService,FavouriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
