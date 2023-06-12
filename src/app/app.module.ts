import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlertsComponent } from './alerts/alerts.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SensordataComponent } from './sensordata/sensordata.component';
import { SearchPipe } from './search.pipe';
import { SensorComponent } from './sensor/sensor.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ActionComponent } from './action/action.component';





@NgModule({
  declarations: [
    AppComponent,
    SensordataComponent,
    AlertsComponent,
    NavComponent,
    SearchPipe,
    SensorComponent,
    ActionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
    NgxQRCodeModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
