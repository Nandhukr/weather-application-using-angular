import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  
  findweather(loc:any){
   return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=48c78543a6bdccd18cb95f8010f9231c&units=metric`) 
  }
}
