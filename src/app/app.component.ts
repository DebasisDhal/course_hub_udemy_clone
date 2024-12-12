import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IApiResponse, User } from './pages/model/master.model';
import { FormsModule } from '@angular/forms';
import { MasterservicesService } from './pages/services/masterservices.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursehub';
  toggle = false;
  userRegisterObj:User = new User();
  mservice = inject(MasterservicesService)

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
      }else{
        alert(res.message)
      }
    })

  }

}
