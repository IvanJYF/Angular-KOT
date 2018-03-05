import { Component, OnInit,OnChanges } from '@angular/core';
import { DataService } from '../serve/data.serve';
import *  as  $ from "jquery/dist/jquery.min";

declare var $: any;
@Component({
    selector: 'admin-user',
    templateUrl: 'admin_user.html',
    styleUrls:["../../assets/css/main.css","../admin.css"]
})
    
export class AdminUserComponent implements OnInit {

    dataArr: Array<Object> = [];
    userData: Array<Object> = [];
    pageCount: number = 1;
    pageList=[];
    curNum = 0;
    ckbState = false;

    allCkbState: boolean = false;

    constructor(private dataServe:DataService,) {}

    ngOnInit() { 
        this.initData();
    }
    ngOnChanges(){
        
    }

    initData() {
        this.dataServe.getData("assets/data/login.json").subscribe(res => {
            this.dataArr = res.splice(1);
            this.pageCount = Math.ceil(this.dataArr.length / 10);
            this.showData(1);
        })
    }

    allCkb($event) {
        this.allCkbState = $($event.srcElement).prop("checked");
    }

    change($event) {
        var $ckb = $($event.srcElement);
        var isChecked = $($ckb).prop("checked");
        if (isChecked) {
            $($ckb).parent().parent().addClass("active");
        } else {
            $($ckb).parent().parent().removeClass("active");
        }
        if ($("#tbody tr").length == $("#tbody tr.active").length) {
            $("#ckbAll").prop("checked", true);
        } else {
            $("#ckbAll").prop("checked", false);
        }
    }

    //数据显示
    showData(i: number) {
        var start = (i-1)*10;
        var end = start+10;
        this.userData = this.dataArr.slice(start, end);
    }

    getPageNum(msg:any){
        this.showData(msg);
        this.curNum = msg;
    }

    delUser() {
        for(var user of $("#tbody tr.active")){
            var uid = $(user).index();
            console.log(uid);
            var index = 10 * (this.curNum - 1) + uid;
            this.dataArr.splice(index, 1);
        }
        
        $(".dialog").fadeOut();
        this.showData(this.curNum);
    }

    isShow(flag:boolean) {
        if (flag) {
            $(".dialog").fadeIn();
        } else {
            $(".dialog").fadeOut();
        }
    }

}