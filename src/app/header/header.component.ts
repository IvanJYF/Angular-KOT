import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';
@Component({
    selector: 'my-header',
    templateUrl: 'header.html',
    styleUrls:["../../assets/css/main.css","../admin.css"]
})
export class HeaderComponent implements OnInit {
    userName: string = "";
    isShow1: boolean = false;
    isShow2: boolean = false;
    isShow3: boolean = false;
    @Input('show') show="";

    constructor(private route:Router) { }

    ngOnInit() { 
        this.showAct(this.show);

        if (sessionStorage.uname) {
            this.userName = sessionStorage.uname;    
        } else {
            this.route.navigate(["login"]);
        }
        
    }

    logout() {
        sessionStorage.removeItem("uname");
        this.route.navigate(["login"]);
    }
    showAct(n: any) {
        if (n == 1) {
            this.isShow1 = true;
        } else if (n == 2) {
            this.isShow2 = true;
        } else if (n == 3) {
            this.isShow3 = true;
        }
    }

}