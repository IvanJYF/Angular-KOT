import { Component, OnInit,Injectable  } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  ngOnInit() {
    
  }

  getData(url:string) {
    return this.http.get(url).map(data => data.json());
  }

}