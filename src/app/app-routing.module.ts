import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/guide/guide.component';
import { PlantdetailsComponent } from './components/plants/plantdetails/plantdetails.component';
import { PlantsComponent } from './components/plants/plants.component';

const routes: Routes = [
  { path: 'plants', component: PlantsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'plantdetails/:name', component: PlantdetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
