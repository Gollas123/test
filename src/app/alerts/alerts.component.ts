import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  public alerts:any;
  date!:Date; 
  searchText='';

  urls='';

  // for playing youtube videos
  player:YT.Player | undefined;
  public id:string = "oRPxRq1Uub4";


  savePlayer(player:any){
    this.player = player;
    console.log('player instane', player);
  }

  onStateChange(event:any){
    console.log('player state', event.data);
  }


  
  constructor(private api:ApiService) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }

  ngOnInit(): void {
    this.getAllemploye();
  }

  getAllemploye(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.alerts = res;
    })
  }



  videoIcon:string = "./assets/images/play.png";
  play:string = "Play";
  videodisabled:boolean = true;

  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "./assets/images/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "./assets/images/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }




}
