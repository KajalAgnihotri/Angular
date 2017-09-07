import { Component } from '@angular/core';
import {Http,Response} from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/news" routerLinkActive="active"></a>
</nav>
<router-outlet></router-outlet>
    `
})
export class AppComponent { }

 
  

