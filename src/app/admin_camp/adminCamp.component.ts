import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
import { ActivatedRoute, Params ,Router} from '@angular/router';

@Component({
    selector: 'admin-camp',
    templateUrl: './admin_camp.html',
    styleUrls:["../../assets/css/main.css","../admin.css"]
})
export class AdminCampComponent implements OnInit {
    userName: string = "";
    constructor(private myRoute:ActivatedRoute,private route:Router) { }

    ngOnInit() { 
        this.userName = this.myRoute.snapshot.queryParams["id"];
    }

}