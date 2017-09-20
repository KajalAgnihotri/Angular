import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SearchNewsComponent} from './search-news/search-news.component';
import {MyFavouriteComponent} from './my-favourite/my-favourite.component'
import{AppComponent} from './app.component';
import{NewsComponent} from './news/news.component';
import{LoginComponent} from './login/login.component';
import{RegisterComponent} from './register/register.component'
import{HomeComponent} from './home/home.component';


const routes:Routes=[
    
    {path:'app-root',component:AppComponent},
   
    {path:'search-news' ,component:SearchNewsComponent},
    {path:'app-home' ,component:HomeComponent},
    {path:'app-news',component:NewsComponent},
    
    {path:'app-login',component:LoginComponent},
    {path:'app-register',component:RegisterComponent},
    {path:'app-my-favourite', component:MyFavouriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports:[RouterModule],
})

export class AppRoutingModule{

}
  