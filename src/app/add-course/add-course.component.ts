import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api: ApiService) { }
  courseTitle = ""
  courseDescription = ""
  courseDuration = ""
  courseDate = ""
  courseVenue = ""

  readValues = () => {
    let courseData = { "courseTitle": this.courseTitle, "courseDescription": this.courseDescription, "courseDuration": this.courseDuration, "courseDate": this.courseDate, "courseVenue": this.courseVenue }
    this.api.addCourse(courseData).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {
          alert('Course added successfully')
          this.courseTitle = ""
          this.courseDescription = ""
          this.courseDuration = ""
          this.courseDate = ""
          this.courseVenue = ""
        } else {
          alert('Error in adding course')
        }
      }
    )
    console.log(courseData)
  }
}