
import {ViewTemp} from "./ViewPage.js" ;

class DayHorlyView{
    constructor(){
      this.save_day = document.querySelector(`.save_day`)
      this.nav = document.querySelector(`.nav`) ;
      this.activBtn = this.nav.querySelectorAll(`button`);
      this.idecator_temp =document.querySelector(`.idecator_temp`)
      this.days_setting = document.querySelector(`.days_setting`)
    this.auto_setting = document.querySelector(`.auto_setting`)
    this.auto = document.querySelector(`.auto`);
    this.auto_setting = document.querySelector(`.auto_setting`)
    this.auto.addEventListener(`click`,(event)=>{
      this.auto_setting.classList.remove(`hidden`)
    })
    this.auto_setting.addEventListener(`click`,(event) =>{
      this.days_setting.classList.toggle(`hidden`);
      this.idecator_temp.classList.toggle(`hidden`)
    })
    document.addEventListener(`click`,(event)=>{
            for(let key of this.activBtn){
          if(event.target == key){
            this.idecator_temp.classList.remove(`hidden`);
            this.days_setting.classList.add(`hidden`);
        }
      }
      if(event.target == this.save_day){
        this.idecator_temp.classList.remove(`hidden`);
        this.days_setting.classList.add(`hidden`);
      }
    })
    }
}


class DayHorlySetting extends ViewTemp{
  constructor(){
    super();
    this.setting_btn = document.querySelector(`.setting_btn`)
    this.eco_active = document.querySelector(`.eco_active`)
    this.setap_btn = document.querySelector(`.setap_btn`)
    this.offBtn = document.querySelector(`.off`)
    this.setting_btn = document.querySelector(`.setting_btn`)
    this.auto = document.querySelector(`.auto`);
    this.save_day = document.querySelector(`.save_day`)
    this.mass_day = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
    document.addEventListener(`click`,(event)=>{
      if(event.target == this.auto ){
           this.int = setInterval(() =>{
            this.setData();
            this.viewData();
        },1000)
     }
     if(event.target == this.offBtn || event.target == this.setap_btn || event.target == this.eco_active || event.target == this.setting_btn){
      clearInterval(this.int);
    }
    })
  }
  setData(){
    this.date = new Date();
    this.day = this.date.getDay();
    this.Tage = document.querySelector(`.${this.mass_day[this.day]}`) 
   this.hour = this.Tage.querySelectorAll(`#Hour`);
    this.min = this.Tage.querySelectorAll(`#min`);
     for(let i of this.hour){
         if (i.value == this.date.getHours()){
           for(let key of this.min){
          if(key.value == this.date.getMinutes()){
          this.newTemp = key.parentElement.parentElement.nextElementSibling.querySelector(`input`);
       }
    } 
 }
}
  }
  viewData(){
    if(this.newTemp != undefined){
      this.range.value = this.newTemp.value;
      this.big_indec.firstChild.innerHTML = `${this.range.value}℃`;
    }  
  }
}




 
export{DayHorlyView}
export{DayHorlySetting}