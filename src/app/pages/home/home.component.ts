import { Component, ElementRef, inject, Inject, OnInit, signal,ViewChild,viewChild } from '@angular/core';
import { IApiResponse, ICource, ICourceVideos } from '../model/master.model';
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
  courseVideos:ICourceVideos[] =[];

  @ViewChild('courseModal') modal:ElementRef | undefined;  // we connect thorough @View child
  

  ngOnInit(): void {
    this.getCourse();
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
  }
  


