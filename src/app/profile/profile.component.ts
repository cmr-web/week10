import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  public data:any = {}
  ngOnInit(): void {
      this.fetchDetails()
  }
  constructor(public http:HttpClient){

  }
  public fetchDetails(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (data:any) =>{
        this.data = data;
      }
    )
  }
}
