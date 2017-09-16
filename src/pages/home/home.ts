import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ArticleServiceProvider} from "../../providers/arctile-service/arctile-service";
import {ContentPage} from "../content/content";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articleTab:string="dt";
  articledata=[];
  constructor(public navCtrl: NavController,
              public articleProvider: ArticleServiceProvider) {

  }
  ngOnInit(){
    this.articleProvider.getArticle().subscribe(res=>this.articledata=res);
  }
  readArticle(content,title){
    this.navCtrl.push(ContentPage,{
      content:content,
      title:title
    })
  }
}
