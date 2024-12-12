import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, User } from '../model/master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterservicesService {

  constructor(private http:HttpClient) { }

  baseUrl:string ="https://projectapi.gerasim.in/api/OnlineLearning/";

  getCourse():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.baseUrl}GetAllCourse`);
  }
  getCourseVi(userId:number):Observable<IApiResponse>{
    return this.http.get<IApiResponse>(this.baseUrl+"GetCourseVideosbyCourseId?courseId="+userId);
  }
  addNewUser(obj:User):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(`${this.baseUrl}AddNewUser`,obj);

  }
}