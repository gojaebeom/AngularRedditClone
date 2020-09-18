import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector:'app-article',
    templateUrl:'./article.component.html',
    styleUrls:['./article.component.scss']
})
export class ArticleComponent implements OnInit
{
    @Input() article:Article;

    constructor(){}

    ngOnInit(){ }

    like():boolean
    {
        this.article.like();

        return false;
    }

    unlike():boolean
    {
        this.article.unlike();

        return false;
    }
}