import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensordataComponent } from './sensordata/sensordata.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'sensor', component:SensordataComponent},
  {path:'alerts', component:AlertsComponent},
  {path:'sen', component:SensorComponent},
  {path:'action', component:ActionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
