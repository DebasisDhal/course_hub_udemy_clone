import { Component, inject, OnInit } from '@angular/core';
import { MasterservicesService } from '../services/masterservices.service';
import { IApiResponse, IEnrolment, IEnrolments, User } from '../model/master.model';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-cources',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './my-cources.component.html',
  styleUrl: './my-cources.component.css'
})
export class MyCourcesComponent implements OnInit{

  mService = inject(MasterservicesService)
  loggedUserData:User = new User();
  courseList:IEnrolments[] = [];

  router = inject(Router) // Query parameter through pass the data
 
  courseId:number=0;

  ngOnInit(): void {
    const localData = localStorage.getItem('learningUser');
    if(localData != null){
      const parseData = JSON.parse(localData);
      this.loggedUserData = parseData;
    }
    this.getEnrollmentByUserId();

  }

  getEnrollmentByUserId(){
    this.mService.getEnrollmentByCourseUserId(this.loggedUserData.userId).subscribe((res:IApiResponse)=>{
      this.courseList = res.data;
    })
  }

// Query parameter through pass the data
  navigatingToCourse(userId:number){    
    this.router.navigate(['courcedetails',userId])
  }
}
