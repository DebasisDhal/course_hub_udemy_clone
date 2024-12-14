import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { MyCourcesComponent } from './pages/my-cources/my-cources.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'courcedetails/:id',
        component:CourseDetailsComponent
    },
    {
        path:'my-Cources',
        component:MyCourcesComponent
    }

];
