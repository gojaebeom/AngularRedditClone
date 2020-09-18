import { Component} from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  articles:Article[];


  constructor()
  {
    this.articles = [
      new Article('Angular','https://angular.kr/', 32),
      new Article('React', 'https://ko.reactjs.org/', 40),
      new Article('Vue', 'https://kr.vuejs.org/', 20),
    ]
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement)
  {
    this.articles.push(new Article(title.value , link.value, 0));
    title.value = '';
    link.value = '';
  }
}
