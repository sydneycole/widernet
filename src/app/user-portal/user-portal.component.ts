import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('http://127.0.0.1:3000/hostid').subscribe(data => {
      console.log(data);
    });
  }

}
