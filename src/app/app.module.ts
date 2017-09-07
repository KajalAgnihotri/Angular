import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent }  from './app.component';
import { NewsComponent }  from './News.component';

import {NewsService} from './news.service'
import { AppRoutingModule} from './app-routing.module'




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
