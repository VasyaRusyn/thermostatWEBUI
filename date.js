`use strict`

class GetDateModel{
  constructor() {
this.mass_day = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
this.date = new Date();
this.numDate = '';
this.time = ``;
  }
  Date(){
    let day = this.date.getDate() ;
    this.day = this.date.getDay();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    if(day < 10){
      day = `0` + day;
    }
    if(month < 10){
      month = `0` + month ;
    }
    return this.numDate = `${this.mass_day[this.day]} ${day}.${month}.${year}`
  }
  Hour(){
   this.hour = this.date.getHours();
   this.minute = this.date.getMinutes();
   this.second = this.date.getSeconds();
   if(this.hour < 10){
    this.hour = `0` + this.hour;
   }
   if(this.minute < 10){
    this.minute = `0` + this.minute;
   }
   if(this.second < 10){
    this.second = `0` + this.second;
   }
   return this.time = `${this.hour}:${this.minute}:${this.second}`;
    }
}

class ViewDate extends GetDateModel{
    constructor(){
    super()
    this.dateView = document.querySelector(`#date`);
    this.timeView = document.querySelector(`#time`);
  }
  ViewDate(){
  this.dateView.innerHTML = this.Date()
  this.timeView.innerHTML = this.Hour()
  }
}

export {ViewDate};


