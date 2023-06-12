import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor() { }

  state(){
    return [
        {
            id: 1,
            name: "Maharasthra"
        },
        {
            id: 2,
            name: "West Bengal"
        }
    ]
}

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
