import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api: ApiService,private route:Router) { }
  title = ""
  description = ""
  duration = ""
  date = ""
  venue = ""

  readValues = () => {
    let courseData = { "title": this.title, "description": this.description, "duration": this.duration, "date": this.date, "venue": this.venue }
    this.api.addCourse(courseData).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {
          alert('Course added successfully')
          
        } else {
          alert('Error in adding course')
        }
      }
    )
    this.route.navigate(["/"])
    this.title = ""
    this.description = ""
    this.duration = ""
    this.date = ""
    this.venue = ""
    console.log(courseData)
  }

}