import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
// import { NgxQRCodeModule } from 'ngx-qrcode2/lib/qrcode.module';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2/lib/qrcode.types';
import { runInThisContext } from 'vm';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  // api variables
  public getJsonValue:any;
  public postJsonValue:any;
  public url = 'https://jsonplaceholder.typicode.com/todos/1';

  // QRCode variables
  // title = 'QRCode';
  // name = 'Ang;lar ' + VERSION.major;
  // elementType = NgxQrcodeElementTypes.URL;
  // value = 'https://www.youtube.com/watch?v=qr7f9DjXbHE';
  // errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;


  //data fetch variable
  public apData:any;

   
  constructor(private _http: HttpClient, private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.d1();
  }

  getData(){
    this._http.get(this.url).subscribe((data) =>{
      this.getJsonValue = data;
    }
    )
  }

  d1(){
    this.api.getEmploye().subscribe((res) =>{
      this.apData = res;
    })
  }

}

