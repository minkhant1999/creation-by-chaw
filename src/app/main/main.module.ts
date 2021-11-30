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
import { CheckoutComponent } from '../components/checkout/checkout.component';

import { PlantService } from '../services/plant.service';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FishesService } from '../services/fishes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'fishes', component: FishComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'checkout', component: CheckoutComponent },
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
    CheckoutComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatInputModule,
  ],
  providers: [PlantService, FishesService, CheckoutService],
  exports: [RouterModule]
})
export class MainModule { }
