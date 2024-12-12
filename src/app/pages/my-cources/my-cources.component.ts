import { Component, inject, OnInit } from '@angular/core';
import { MasterservicesService } from '../services/masterservices.service';
import { IApiResponse } from '../model/master.model';

@Component({
  selector: 'app-my-cources',
  standalone: true,
  imports: [],
  templateUrl: './my-cources.component.html',
  styleUrl: './my-cources.component.css'
})
export class MyCourcesComponent implements OnInit{
  ngOnInit(): void {
    
  }
}
