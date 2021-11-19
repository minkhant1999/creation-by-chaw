import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import initializeFirebaseApp from './firebase';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    {
      useFactory: initializeFirebaseApp,
      provide: APP_INITIALIZER,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
