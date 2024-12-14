import { Component, ElementRef, inject, Inject, OnInit, signal,ViewChild,viewChild } from '@angular/core';
import { IApiResponse, ICource, ICourceVideos, IEnrolment, User } from '../model/master.model';
import { MasterservicesService } from '../services/masterservices.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  mService = inject(MasterservicesService);
  courseLIst = signal<ICource[]>([]); //Signal which is introduce in Ang-17 we can store data in api
  courseVideos:ICourceVideos[] =[];    //Here is the without signal also store

  @ViewChild('courseModal') modal:ElementRef | undefined;  // we connect thorough @View child
  loggedUserData:User = new User();

  ngOnInit(): void {
    this.getCourse();

    const localData = localStorage.getItem('learningUser');
    if(localData != null){
      const parseData = JSON.parse(localData);
      this.loggedUserData = parseData;
      
      
    }
    
  }

  openModel(courseId:number){
    if(this.modal){
      this.modal.nativeElement.style.display="block";
    }
    this.getCourseVideos(courseId); //pass the Id 

  }
  closeModel(){
    if(this.modal){
      this.modal.nativeElement.style.display="none";
    }

  }


    getCourse(){
      this.mService.getCourse().subscribe((res:IApiResponse)=>{
        console.log(res.data);
        this.courseLIst.set(res.data)
        
      },error=>{

      })
    }

    getCourseVideos(id:number){
      this.mService.getCourseVi(id).subscribe((res:IApiResponse)=>{
        this.courseVideos = res.data
      })
    }

    onEnroll(coureseId:number){
      
      if(this.loggedUserData.userId == 0){
        alert("Please Logged in first");
      }else{
        console.log(this.loggedUserData.userId);
        const enrolObj: IEnrolment = {
          courseId:coureseId,
          enrollmentId:0,
          enrolledDate:new Date(),
          userId:this.loggedUserData.userId,
          isCompleted:false
        };

        this.mService.onEnrollment(enrolObj).subscribe((res:IApiResponse)=>{
          if(res.result){
            alert("Enrollment Sucess")
          }else{
            alert(res.result);
          }
        })
      }
    }
  }
  


