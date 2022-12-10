import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
  title=""
  readValues=()=>{
    const data:any = {"title":this.title}
    this.api.searchCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length) {
          this.searchData = response
          this.count = true
        } else {
          alert("Invalid Title")
          this.searchData = []
          this.count = false
        }
        
      }
    )
  }
  searchData:any = []
  count:any  = false
}
