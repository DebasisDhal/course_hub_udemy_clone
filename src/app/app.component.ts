import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IApiResponse, login, User } from './pages/model/master.model';
import { FormsModule } from '@angular/forms';
import { MasterservicesService } from './pages/services/masterservices.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  mservice = inject(MasterservicesService)
  title = 'coursehub';
  toggle = false;
  userRegisterObj:User = new User();
  loginObj:login = new login();
  loggedUserData: User = new User(); //Here we get data in localstorage check user login or not in constructor


  constructor(){
    const localData = localStorage.getItem('learningUser');
    if(localData != null){
      const parseData = JSON.parse(localData);
      this.loggedUserData = parseData;
    }
  }

  modalOpen(){
    const modal = document.getElementById("myModal");
    if(modal){
      modal.style.display='block';
    }
    console.log(modal);
    
  }
  modalClose(){
    const modal = document.getElementById("myModal");
    if(modal){
      modal.style.display='none';
    }
  }
  login(value:boolean){
    this.toggle = true;
  }
  registation(value:boolean){
    this.toggle = false;
  }
  onRegister(){
    this.mservice.addNewUser(this.userRegisterObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("User Registed")
        this.modalClose();
      }else{
        alert(res.message)
      }
    })

  }
  onLogin(){
    this.mservice.loginUser(this.loginObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("User is Logid in")
        localStorage.setItem("learningUser",JSON.stringify(res.data)) //Login User store in Local storage
        this.loggedUserData = res.data;
        this.modalClose();
      }else{
        alert(res.message)
      }
    })
  }

  onLogOff(){
    this.loggedUserData = new User();
    localStorage.removeItem('learningUser');
  }

}
