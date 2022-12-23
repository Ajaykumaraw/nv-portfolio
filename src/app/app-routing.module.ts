import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroSectionComponent } from './intro-section/intro-section.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
