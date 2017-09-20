import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {NewsService } from '../services/services.component'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

 
data:any={};
data2:any=[];

stat=false;
@Output() termData :EventEmitter<any> = new EventEmitter();

constructor(private n:NewsService) { }

ngOnInit():void {
  this.displayData();
}
displayData(){
  this.n.getChannel().subscribe(data=>{
      console.log(data);
      this.data=data;
  })

}
searchData(temp: string){
  this.n.getNews(temp).subscribe(data2=>{
      this.data2=JSON.parse(data2["_body"]);
      console.log(this.data2);
      this.termData.emit(this.data2);});
      
      this.stat=true;
  
}

}