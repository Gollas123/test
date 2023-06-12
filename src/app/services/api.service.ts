import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url='http://localhost:3000/posts';
  

  constructor(private http:HttpClient) { }

  
  // postEmploye(data:any){
  //   return this.http.post<any>('http://localhost:3000/posts', data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }


  getEmploye(){
    return this.http.get<any>('http://localhost:3000/posts')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // updateEmploye(data:any, id:number){
  //   return this.http.put<any>("http://localhost:3000/posts/"+id, data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteEmployee(id : number){
  //   return this.http.delete<any>("http://localhost:3000/posts/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // // signup form crud operations 
  
  // getLoginEmploye(){
  //   return this.http.get<any>('http://localhost:3000/signupUsers')
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteEmploye(id : number){
  //   return this.http.delete<any>("http://localhost:3000/signupUsers/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // updateEmploye1(data:any, id:number){
  //   return this.http.put<any>("http://localhost:3000/signupUsers/"+id, data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }


  // postEmploye1(data:any){
  //   return this.http.post<any>('http://localhost:3000/signupUsers', data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  
  city(){
    return [
        {
            id: 1,
            name: "Mumbai"
        },
        {
            id: 1,
            name: "Pune"
        },
        {
          id: 1,
          name: "Mumbai"
      },
      {
          id: 1,
          name: "Pune"
      },
        {
            id: 2,
            name: "Kolkata"
        },
        {
            id: 2,
            name: "Howrah"
        }
    ]
}
 
}
