import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SearchNewsComponent} from './search-news/search-news.component';
import {MyFavouriteComponent} from './my-favourite/my-favourite.component'

const routes:Routes=[
    {path:'news' ,component:SearchNewsComponent},
    {path:'' ,redirectTo:'/',pathMatch:'full'},
    {path:'myFavourite', component:MyFavouriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports:[RouterModule],
})

export class AppRoutingModule{

}
  