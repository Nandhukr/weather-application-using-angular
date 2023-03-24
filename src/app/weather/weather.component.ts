import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

wdata={
  lname:"",
  humidity:"",
  temp:"",
  windSpeed:"",
  description:""
}
  constructor(private service:WeatherService ){}

  fetchweather(inpt:any){
    console.log(inpt.value);
    this.service.findweather(inpt.value).then(res=>res.json()).then(data=>{
      this.wdata.lname=data.name
      this.wdata.humidity=data.main.humidity
      this.wdata.temp=data.main.temp
      this.wdata.windSpeed=data.wind.windSpeed
      this.wdata.description=data.weather[0].description
    })
    
  }


}
