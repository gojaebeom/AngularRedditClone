export class Article
{
    title:string;
    link:string;
    likeCount:number;

    constructor(title:string, link:string, likeCount?:number)
    {
        this.title = title;
        this.link = link;
        this.likeCount = likeCount||0;
    }

    like():void
    {
        this.likeCount += 1;
    }

    unlike():void
    {
        this.likeCount -= 1;
    }
}