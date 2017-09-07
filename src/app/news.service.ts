import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {AppRoutingModule} from './app-routing.module'

@Injectable()
export class NewsService{
   
    
    constructor(private http:Http){}
        
            getData(){
                return this.http.get('https://newsapi.org/v1/sources?language=en').map(response=>response.json())
            }
            search(temp:string){
                return this.http.get('https://newsapi.org/v1/articles?source='+temp+'&sortBy=top&apiKey=e125a8aa157c4c82b56236486f51e306');
            }
            

            
  
               
}
    