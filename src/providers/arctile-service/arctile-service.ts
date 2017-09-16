import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ArctileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleServiceProvider {

  constructor(public http: Http) {
    console.log('Hello   Provider');
  }
  getArticle(){
   return this.http.get("http://www.hfwebapp.com/wp-json/wp/v2/posts").map(res=>res.json());
  }
}
