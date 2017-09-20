import { Injectable }from '@angular/core';
import {Headers,Http,Response} from '@angular/http'
import {FavNews } from '../FavNews'

@Injectable()
    export class FavouriteService{
        url:string='http://localhost:63670/api/news';
       
    
        constructor(private http:Http){}
        getFavourite(){
            return this.http.get(this.url)
            .map(res=> res.json());
            
    
    
        }
        postFavourite(news:FavNews){
            console.log("hello");
            return this.http.post(this.url,news,{headers:new Headers({'Content-Type':'application/json'})})
            .subscribe(data=>{console.log("data from post",data)});
    
        }
        deleteObj(a:number){
            console.log("delete view");
            return this.http.delete(this.url+'/'+a)
            .subscribe(data=>{console.log("deleting the object",data)});
    
        }
        // update(news,comment){
        //     news.comment=comment;
        //     console.log("update service");
        //     return this.http.put(this.url+'/'+news.id,news,{headers:new Headers({'Content-Type':'application/json'})})
        //     .subscribe(data=>{console.log("updating the object",data)});


        // }
       
        update(obj:any){
            
           return this.http.put(`http://localhost:63670/api/news/${obj.id}`,JSON.stringify(obj),
           {headers:new Headers({'Content-Type':'application/json'})})
           .subscribe();
        
        }
    }
