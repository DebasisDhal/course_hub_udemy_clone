import { Component, inject, OnInit } from '@angular/core';
import { IApiResponse, ICourceVideos, User, Video } from '../model/master.model';
import { MasterservicesService } from '../services/masterservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  mService = inject(MasterservicesService)
  loggedUserData:User = new User();
  
  videoList:Video[] = [];
  
  activatedRoute = inject(ActivatedRoute) //qurey parameter recive and save here
  courseId:number=0;

  ngOnInit(): void {
    const localData = localStorage.getItem('learningUser');
    if(localData != null){
      const parseData = JSON.parse(localData);
      this.loggedUserData = parseData;
    }
  
    this.activatedRoute.params.subscribe((res:any)=>{ //qurey parameter  save here
      this.courseId = res.id;
      this.getVideos();
    })
  }

  getVideos(){
    this.mService.getCourseVi(this.courseId).subscribe((res:IApiResponse)=>{
      this.videoList = res.data();
    })
  }
}
