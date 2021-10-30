import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { GuideComponent } from '../components/guide/guide.component';
import { PlantdetailsComponent } from '../components/plants/plantdetails/plantdetails.component';
import { PlantsComponent } from '../components/plants/plants.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'plantdetails/:name', component: PlantdetailsComponent }
];

@NgModule({
  declarations: [
    PlantsComponent,
    GuideComponent,
    PlantdetailsComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CarouselModule],
  exports: [RouterModule]
})
export class MainModule { }
