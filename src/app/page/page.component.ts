import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'page',
    template: `
        <div id="page">
            <ul class="pageList clear">
                <li (click)="pages(curNum-1)" [ngClass]="{'disable':curNum==1}"><a>上一页</a></li>
                <!--<li class="active"><a href="#">1</a></li>-->
                <!--<li><a href="#">2</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>-->
                <li *ngFor="let p of pageList" (click)="pages(p)" [ngClass]="{'active':curNum==p}"><a>{{p}}</a></li>
                <li (click)="pages(curNum+1)" [ngClass]="{'disable':curNum==pageCount}"><a >下一页</a></li>
            </ul>
        </div>
    `,
    styleUrls:["../../assets/css/main.css","../admin.css"]
})
export class PageComponent implements OnInit {

    pageList=[];
    curNum = 0;
    
    @Input('pageCount')  pageCount=0;
    @Output() sendPageNum = new EventEmitter();

    constructor() { }

    ngOnInit() { 
        this.pages(1)
    }

    ngOnChanges(){
        this.pages(1)
    }

    //分页
    pages(p:number){
        if(p<=0 || p>this.pageCount){
            return;
        }
        var arr = [];
        this.curNum=p;
        if(p-2>0){
            arr.push(p-2);
        }
        if(p-1>0){
            arr.push(p-1);
        }
        arr.push(p);
        if(p+1<=this.pageCount){
            arr.push(p+1);
        }
        if(p+2<=this.pageCount){
            arr.push(p+2);
        }
        this.pageList=arr;

        this.sendPageNum.emit(p);
    }

}