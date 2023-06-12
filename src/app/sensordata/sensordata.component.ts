import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Api2Service } from '../services/api2.service';

@Component({
  selector: 'app-sensordata',
  templateUrl: './sensordata.component.html',
  styleUrls: ['./sensordata.component.css']
})
export class SensordataComponent implements OnInit {
  public sensorData:any;   
  date!:Date; 
  searchText='';
  

  state: any = [];
  city: any = [];


  constructor(private api:ApiService, private api2:Api2Service, ) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }

  ngOnInit(): void {
    this.getAllemploye();
    this.state = this.api2.state();
  }

  onSelect(state:any){
    this.city = this.api2.city().filter(e => e.id == state.target.value);
}
 // enterSearchValue: string = '';


  
 
  getAllemploye(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.sensorData = res;
    })
  }

}
