import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './components/plants/plants.component';
import { GuideComponent } from './components/guide/guide.component';
import { PlantdetailsComponent } from './components/plants/plantdetails/plantdetails.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    GuideComponent,
    PlantdetailsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
