import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NgControlStatus } from '@angular/forms/src/directives/ng_control_status';
import { DataService } from '../serve/data.serve';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls:["./login.css"]
})
export class LoginComponent implements OnInit {

    myUser: string = "";
    myPwd: string = "";
    tipMsg: string = "";

    constructor(private myRouter:Router,private dataserve:DataService) { }

    ngOnInit() { 

    }

    login() {
        this.dataserve.getData("assets/data/login.json").subscribe(res => {
            console.log(res);
            for (var u of res) {
                if (u.uname == this.myUser) {
                    if (u.upwd == this.myPwd) {
                        alert("登陆成功");
                        sessionStorage.uname = this.myUser;
                        this.myRouter.navigate(["adminUser"])
                        if (u.grade == 1) {
                            this.myRouter.navigate(["adminUser"])
                        }
                        // sessionStorage.uname = this.myUser;
                        // this.myRouter.navigate(["adminCamp"])
                    } else {
                        this.tipMsg = "密码有误";
                    }
                    return;
                }
            }
            this.tipMsg = "账号密码有误";
        });
    }
   
}