import {Component,OnInit} from '@angular/core'
import {Http,Response} from '@angular/http'
import { NewsService } from './news.service'
import {AppRoutingModule} from './app-routing.module'

@Component({
    selector:'my-news',
    templateUrl:"./news.component.html",
    styleUrls:["./news.component.css"],

})

export class NewsComponent implements OnInit{
   
    //temp:string;
    data:any={};
    data2:any=[];

    stat=false;
    constructor(private n:NewsService){

    }
    ngOnInit() :void {
        this.displayData();
     }

    displayData(){
        this.n.getData().subscribe(data=>{
            console.log(data);
            this.data=data;
        })

    }
    searchData(temp: string){
        this.n.search(temp).subscribe(data2=>{
            this.data2=JSON.parse(data2["_body"]);console.log(this.data2);});
            this.stat=true;
        
    }

    
    

    
}

 