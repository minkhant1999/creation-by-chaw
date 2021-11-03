import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FishComponent } from '../components/fish/fish.component';
import { GuideComponent } from '../components/guide/guide.component';
import { PlantdetailsComponent } from '../components/plants/plantdetails/plantdetails.component';
import { PlantsComponent } from '../components/plants/plants.component';
import { ProductsComponent } from '../components/products/products.component';
import { PlantService } from '../plant.service';
import { MatButtonModule } from '@angular/material/button'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'fishes', component: FishComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'plantdetails/:name', component: PlantdetailsComponent }
];

@NgModule({
  declarations: [
    PlantsComponent,
    GuideComponent,
    PlantdetailsComponent,
    DashboardComponent,
    ProductsComponent,
    FishComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [PlantService],
  exports: [RouterModule,]
})
export class MainModule { }
