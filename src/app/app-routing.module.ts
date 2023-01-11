import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path:"about",component:AboutMeComponent},
  {path:"workexperience",component:WorkExperienceComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"getIntouch",component:GetInTouchComponent},
  {path:"",component:IntroSectionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
