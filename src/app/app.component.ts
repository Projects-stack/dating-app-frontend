import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dating-app-frontend';
  users: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("http://localhost:8080/api/users/").subscribe({
      next: (response) => this.users = response,
      error: (e) => console.log(e),
      complete: () => {
        console.log('complete')
      }
    })
  }


}
